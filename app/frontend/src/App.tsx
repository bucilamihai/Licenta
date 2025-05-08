import { Route, Redirect } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Onboarding from "./pages/onboarding/Onboarding";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import OnboardingRoute from "./components/OnboardingRoute";
import { useSelector } from "react-redux";

setupIonicReact();

const App: React.FC = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            exact
            path="/"
            render={() =>
              user ? <Redirect to="/home" /> : <Redirect to="/login" />
            }
          />
          <PublicRoute path="/register" component={Register} exact={true} />
          <PublicRoute path="/login" component={Login} exact={true} />
          <OnboardingRoute path="/onboarding" component={Onboarding} exact />
          <ProtectedRoute path="/home" component={Home} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
