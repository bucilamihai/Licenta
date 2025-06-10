import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { clearCredentials } from "../../slices/authSlice";
import ProfileBadge from "../../components/profile-badge/ProfileBadge";
import User from "../../components/user/User";
import { UserWithSimilarity } from "../../types/userTypes";
import { getSimilarUsers } from "../../services/api";
import "./Home.css";

const Home: React.FC = () => {
  const router = useIonRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);

  const [users, setUsers] = useState<UserWithSimilarity[]>([]);
  const [loading, setLoading] = useState(false);

  if (!user || !token) {
    router.push("/login");
    return null;
  }

  const handleLogout = () => {
    dispatch(clearCredentials());
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  const handleUserSearch = async () => {
    console.log("User search initiated.");
    setLoading(true);
    getSimilarUsers(user, token).then((response) => {
      if (response.ok) {
        setUsers(response.data);
        console.log("Users found:", response.data);
      } else {
        alert(`Error: ${response.error}`);
      }
      setLoading(false);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="home-toolbar">
          <IonTitle className="home-title">Home</IonTitle>
          <ProfileBadge
            name={user?.firstName + " " + user?.lastName}
            onLogout={handleLogout}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent className="home-content">
        <IonButton className="home-button" onClick={handleUserSearch}>
          <IonText>Search similar users based on hobbies</IonText>
        </IonButton>
        {loading && <p>Loading users...</p>}

        {!loading && users.length > 0 && (
          <div className="users-grid ion-margin-top">
            {users.map((user, index) => (
              <div key={index} className="user-item">
                <User
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  hobbies={user.hobbies}
                  similarityScore={user.similarityScore}
                />
              </div>
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
