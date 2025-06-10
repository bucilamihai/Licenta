import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonButton,
  IonCard,
  IonCardContent,
  IonSearchbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import { Hobby } from "../../types/hobbyTypes";
import { findAllHobbies } from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useHistory } from "react-router-dom";
import { saveHobbies } from "../../services/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/authSlice";
import { clearCredentials } from "../../slices/authSlice";
import HobbyComponent from "../../components/hobby/Hobby";
import ProfileBadge from "../../components/profile-badge/ProfileBadge";
import CustomAlert from "../../components/custom-alert/CustomAlert";
import { useAlert } from "../../hooks/useAlert";
import "./Onboarding.css";

const Onboarding: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);

  const { alert, showAlert, hideAlert } = useAlert();

  if (!user || !token) {
    history.push("/login");
    return null;
  }

  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [filteredHobbies, setFilteredHobbies] = useState<Hobby[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    findAllHobbies(token).then((response) => {
      if (response.ok) {
        setHobbies(response.data);
        setFilteredHobbies(response.data);
      } else {
        showAlert;
      }
    });
  }, []);

  const handleSelectHobby = (name: string, checked: boolean) => {
    if (checked) {
      setSelectedHobbies((prev) => {
        const hobby = hobbies.find((hobby) => hobby.name === name);
        if (hobby) {
          return [...prev, hobby];
        }
        return prev;
      });
    } else {
      setSelectedHobbies((prev) => {
        const hobby = hobbies.find((hobby) => hobby.name === name);
        if (hobby) {
          return prev.filter((hobby) => hobby.name !== name);
        }
        return prev;
      });
    }
  };

  const handleSaveHobbies = () => {
    if (selectedHobbies.length === 0) {
      showAlert("Please select at least one hobby", "warning");
      return;
    }
    const userWithHobbies = {
      ...user,
      hobbies: selectedHobbies,
    };
    saveHobbies(userWithHobbies, token).then((response) => {
      if (response.ok) {
        showAlert("Hobbies saved successfully!", "success");
        dispatch(setUser(userWithHobbies));
        history.push("/home");
      } else {
        showAlert(response.error || "Failed to save hobbies", "error");
      }
    });
  };

  const handleSearch = (event: Event) => {
    const target = event.target as HTMLIonSearchbarElement;
    if (target) {
      const searchValue = target.value;
      if (
        searchValue === null ||
        searchValue === undefined ||
        searchValue === ""
      ) {
        setFilteredHobbies(hobbies);
      } else {
        setFilteredHobbies(
          hobbies.filter((hobby) =>
            hobby.name.toLowerCase().includes(searchValue.toLowerCase()),
          ),
        );
      }
    }
  };

  const handleLogout = () => {
    dispatch(clearCredentials());
    setTimeout(() => {
      history.push("/login");
    }, 1000);
  };

  return (
    <IonPage>
      <CustomAlert
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={hideAlert}
      />
      <IonHeader>
        <IonToolbar className="onboarding-toolbar">
          <IonTitle className="onboarding-title">Choose your hobbies</IonTitle>
          <ProfileBadge
            name={user?.firstName + " " + user?.lastName}
            onLogout={handleLogout}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent className="onboarding-content">
        <IonCard className="onboarding-card">
          <IonSearchbar
            debounce={500}
            onIonInput={(event) => handleSearch(event)}
          ></IonSearchbar>
          <IonCardContent className="onboarding-card-content">
            <IonList className="onboarding-scrollable-list">
              {filteredHobbies.map((value, index) => (
                <HobbyComponent
                  key={index}
                  name={value.name}
                  types={value.types}
                  checked={selectedHobbies.some(
                    (hobby) => hobby.name === value.name,
                  )}
                  onChange={handleSelectHobby}
                />
              ))}
            </IonList>
            <IonButton
              className="onboarding-button"
              onClick={handleSaveHobbies}
            >
              Save
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
