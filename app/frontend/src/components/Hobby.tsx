import { IonText, IonItem, IonCheckbox, IonContent } from "@ionic/react";
import React from "react";
import { Hobby, HobbyTypes } from "../types/hobbyTypes";

interface HobbyComponentProps {
  name: string;
  types: HobbyTypes[];
  onChange: (name: string, checked: boolean) => void;
}

const HobbyComponent: React.FC<HobbyComponentProps> = ({
  name,
  types,
  onChange,
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (name: string, checked: boolean) => {
    setChecked(checked);
    onChange(name, checked);
  };

  return (
    <>
      <IonCheckbox
        slot="start"
        checked={checked}
        onIonChange={(e) => handleChange(name, e.detail.checked)}
      />
      <h1>{name}</h1>
      {types.map((type, index) => (
        <p key={index}>{type.name}</p>
      ))}
    </>
  );
};

export default HobbyComponent;
