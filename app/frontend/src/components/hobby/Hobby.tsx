import { IonText, IonItem, IonCheckbox, IonContent } from "@ionic/react";
import React from "react";
import { HobbyTypes } from "../../types/hobbyTypes";
import "./Hobby.css";

interface HobbyComponentProps {
  name: string;
  types: HobbyTypes[];
  checked: boolean;
  onChange: (name: string, checked: boolean) => void;
}

const HobbyComponent: React.FC<HobbyComponentProps> = ({
  name,
  types,
  checked,
  onChange,
}) => {
  const handleChange = (name: string, checked: boolean) => {
    onChange(name, checked);
  };

  return (
    <>
      <IonItem className={`checkbox-item ${checked ? "checked" : ""}`}>
        <IonCheckbox
          slot="start"
          checked={checked}
          onIonChange={(e) => handleChange(name, e.detail.checked)}
          className="custom-checkbox"
        />
        <IonText className="checkbox-text">{name}</IonText>
      </IonItem>
      {types.length > 0 && (
        <div className="types-container">
          {types.map((type, index) => (
            <IonText key={index} className="type-tag">
              {type.name}
            </IonText>
          ))}
        </div>
      )}
    </>
  );
};

export default HobbyComponent;
