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
} from "@ionic/react";
import React, { useState } from "react";
import { login } from "../../services/api";
import { LoginData } from "../../types/userTypes";

const Login: React.FC = () => {
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    const user: LoginData = {
      email,
      password,
    };
    login(user).then((response) => {
      if (response.ok) {
        alert("Login successful");
        console.log("Login successful", response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardContent>
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
              <IonButton onClick={handleLogin}>
                <IonLabel>Login</IonLabel>
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonRouterLink routerLink="/register">
            Don't have an account? Register here.
          </IonRouterLink>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;
