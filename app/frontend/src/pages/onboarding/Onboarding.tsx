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

import Hobby from "../../components/Hobby";
import { HobbyData } from "../../types/hobbyTypes";
import { findAllHobbies } from "../../services/api";

const Onboarding: React.FC = () => {
	const [hobbies, setHobbies] = useState<HobbyData[]>([]);
	const [filteredHobbies, setFilteredHobbies] = useState<HobbyData[]>([]);

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

  const handleSaveHobbies = () => {
    alert("Hobbies saved successfully!");
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
        setFilteredHobbies(hobbies.filter((hobby) =>
          hobby.name.toLowerCase().includes(searchValue.toLowerCase()),
        ));
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
                  <Hobby key={index} name={value.name} types={value.types} />
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
