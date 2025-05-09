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
import { login } from "../../services/api";
import { UserLogin } from "../../types/userTypes";
import { setCredentials } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const router = useIonRouter();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    const user: UserLogin = {
      email,
      password,
    };
    login(user).then((response) => {
      if (response.ok) {
        alert("Login successful");
        console.log(response.data);
        dispatch(
          setCredentials({
            user: {
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              email: response.data.email,
              hobbies: response.data.hobbies,
            },
            token: response.data.token,
          }),
        );
        if (response.data.hobbies.length > 0) {
          router.push("/home");
        } else {
          router.push("/onboarding");
        }
      } else {
        alert(`Error: ${response.error}`);
      }
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <IonPage>
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
        <IonRouterLink routerLink="/register" routerDirection="forward">
          Don't have an account? Register here.
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Login;
