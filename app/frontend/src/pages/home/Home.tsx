import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
	useIonRouter
} from "@ionic/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { clearCredentials } from "../../slices/authSlice";
import ProfileBadge from "../../components/ProfileBadge";

const Home: React.FC = () => {
	const router = useIonRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearCredentials());
    setTimeout(() => {
			router.push("/login");
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <ProfileBadge
            name={user?.firstName + " " + user?.lastName}
            onLogout={handleLogout}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>Welcome to the Home Page!</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
