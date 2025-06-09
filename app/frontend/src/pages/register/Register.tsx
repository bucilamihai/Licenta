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
import CustomAlert from "../../components/custom-alert/CustomAlert";
import { useAlert } from "../../hooks/useAlert";
import "./Register.css";

const Register: React.FC = () => {
  const router = useIonRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      showAlert("Please fill in all fields!", "warning");
      return;
    }
    if (password !== confirmPassword) {
      showAlert("Passwords do not match!", "warning");
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
        showAlert("Registration successful", "success");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        showAlert(response.error || "Registration failed", "error");
      }
    });
  };

  return (
    <IonPage>
      <CustomAlert
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={hideAlert}
      />
      <IonHeader>
        <IonToolbar className="register-toolbar">
          <IonTitle className="register-title">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="register-content">
        <IonCard className="register-card">
          <IonCardContent className="register-card-content">
            <IonItem className="register-item">
              <IonInput
                className="register-input"
                type="text"
                placeholder="First name"
                value={firstName}
                onIonChange={(e) => setFirstName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem className="register-item">
              <IonInput
                className="register-input"
                type="text"
                placeholder="Last name"
                value={lastName}
                onIonChange={(e) => setLastName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem className="register-item">
              <IonInput
                className="register-input"
                type="email"
                placeholder="Email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem className="register-item">
              <IonInput
                className="register-input"
                type="password"
                placeholder="Password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem className="register-item">
              <IonInput
                className="register-input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonButton className="register-button" onClick={handleRegister}>
              <IonLabel className="register-label">Register</IonLabel>
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonRouterLink
          className="register-link"
          routerLink="/login"
          routerDirection="back"
        >
          Already have an account? Login here.
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Register;
