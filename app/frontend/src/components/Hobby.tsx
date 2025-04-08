import { IonText, IonItem, IonCheckbox, IonContent } from "@ionic/react";
import React from "react";
import { HobbyData } from "../types/hobbyTypes";

const Hobby: React.FC<HobbyData> = ({ name, types }) => {
  return (
    <>
      <IonCheckbox slot="start" />
      <IonText>{name}</IonText>
      {types.map((type, index) => (
        <h2 key={index}>{type.name}</h2>
      ))}
    </>
  );
};

export default Hobby;
