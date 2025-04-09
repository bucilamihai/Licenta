import { IonText, IonItem, IonCheckbox, IonContent } from "@ionic/react";
import React from "react";
import { HobbyData } from "../types/hobbyTypes";

const Hobby: React.FC<HobbyData> = ({ name, types }) => {
  return (
    <>
      <IonCheckbox slot="start" />
      <h1>{name}</h1>
      {types.map((type, index) => (
        <p key={index}>{type.name}</p>
      ))}
    </>
  );
};

export default Hobby;
