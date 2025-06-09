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
import CustomAlert from "../../components/custom-alert/CustomAlert";
import { useAlert } from "../../hooks/useAlert";
import "./Login.css";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const router = useIonRouter();

  const { alert, showAlert, hideAlert } = useAlert();

  const handleLogin = () => {
    if (!email || !password) {
      showAlert("Please fill in all fields!", "warning");
      return;
    }
    const user: UserLogin = {
      email,
      password,
    };
    login(user).then((response) => {
      if (response.ok) {
        showAlert("Login successful!", "success");
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
        showAlert(response.error || "Login failed!", "error");
      }
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <IonPage>
      <CustomAlert
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={hideAlert}
      />
      <IonHeader>
        <IonToolbar className="login-toolbar">
          <IonTitle className="login-title">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-content">
        <IonCard className="login-card">
          <IonCardContent className="login-card-content">
            <IonItem className="login-item">
              <IonInput
                className="login-input"
                type="email"
                placeholder="Email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
            </IonItem>
            <IonItem className="login-item">
              <IonInput
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
            </IonItem>
            <IonButton className="login-button" onClick={handleLogin}>
              <IonLabel className="login-label">Login</IonLabel>
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonRouterLink
          className="login-link"
          routerLink="/register"
          routerDirection="forward"
        >
          Don't have an account? Register here.
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Login;
