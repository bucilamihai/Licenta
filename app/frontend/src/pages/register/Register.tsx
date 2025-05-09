import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonCard,
  IonCardContent,
  IonButton,
  IonRouterLink,
  useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import { register } from "../../services/api";
import { UserRegistration } from "../../types/userTypes";

const Register: React.FC = () => {
  const router = useIonRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const user: UserRegistration = {
      firstName,
      lastName,
      email,
      password,
    };
    register(user).then((response) => {
      if (response.ok) {
        alert("Registration successful");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        alert(`Error: ${response.error}`);
      }
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonInput
                type="text"
                placeholder="First name"
                value={firstName}
                onIonChange={(e) => setFirstName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="text"
                placeholder="Last name"
                value={lastName}
                onIonChange={(e) => setLastName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="email"
                placeholder="Email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="password"
                placeholder="Password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonButton onClick={handleRegister}>
              <IonLabel>Register</IonLabel>
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonRouterLink routerLink="/login" routerDirection="back">
          Already have an account? Login here.
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Register;
