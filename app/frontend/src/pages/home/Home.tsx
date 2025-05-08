import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { clearCredentials } from "../../slices/authSlice"
import ProfileBadge from "../../components/ProfileBadge";

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearCredentials());
    setTimeout(() => {
			history.push("/login");
		}
		, 1000);
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
            <ProfileBadge name={user?.firstName + " " + user?.lastName} onLogout={handleLogout} />
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText>Welcome to the Home Page!</IonText>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;