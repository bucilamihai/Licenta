import { User } from "./userTypes";

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface RootState {
  auth: AuthState;
}
