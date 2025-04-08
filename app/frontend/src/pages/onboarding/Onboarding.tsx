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
import React, { useState } from "react";

import Hobby from "../../components/Hobby";
import { HobbyData } from "../../types/hobbyTypes";

const Onboarding: React.FC = () => {
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
        filteredHobbies = hobbies;
      } else {
        filteredHobbies = hobbies.filter((hobby) =>
          hobby.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
      }
      console.log(filteredHobbies);
    }
  };

  const hobbies: HobbyData[] = [];
  hobbies.push(
    {
      name: "abc",
      types: [{ name: "a" }, { name: "b" }],
    },
    {
      name: "xyz",
      types: [{ name: "a" }, { name: "b" }],
    },
    {
      name: "abcde",
      types: [{ name: "a" }, { name: "b" }],
    },
  );

  var filteredHobbies = hobbies;

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
              debounce={1000}
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
