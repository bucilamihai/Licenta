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
  IonCardHeader,
  IonCardTitle,
  IonSearchbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import HobbyComponent from "../../components/Hobby";
import { Hobby } from "../../types/hobbyTypes";
import { findAllHobbies } from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useHistory } from "react-router-dom";
import { saveHobbies } from "../../services/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/authSlice";

const Onboarding: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);

  if (!user || !token) {
    history.push("/login");
    return null;
  }

  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [filteredHobbies, setFilteredHobbies] = useState<Hobby[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    findAllHobbies().then((response) => {
      if (response.ok) {
        setHobbies(response.data);
        setFilteredHobbies(response.data);
      } else {
        alert(`Error: ${response.error}`);
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
      alert("Please select at least one hobby");
      return;
    }
    const userWithHobbies = {
      ...user,
      hobbies: selectedHobbies,
    };
    saveHobbies(userWithHobbies).then((response) => {
      if (response.ok) {
        alert("Hobbies saved successfully");
        dispatch(setUser(userWithHobbies));
        history.push("/home");
      } else {
        alert(`Error: ${response.error}`);
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

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Onboarding</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                Complete your profile by selecting your hobbies
              </IonCardTitle>
            </IonCardHeader>
            <IonSearchbar
              debounce={500}
              onIonInput={(event) => handleSearch(event)}
            ></IonSearchbar>
            <IonCardContent>
              <IonList>
                {filteredHobbies.map((value, index) => (
                  <HobbyComponent
                    key={index}
                    name={value.name}
                    types={value.types}
                    onChange={handleSelectHobby}
                  />
                ))}
              </IonList>
              <IonButton onClick={handleSaveHobbies}>Save</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
