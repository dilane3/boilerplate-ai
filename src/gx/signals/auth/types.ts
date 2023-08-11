import User from "../../../entities/user/User";

export type AuthState = {
  user: User | null;
  loading: boolean;
}

export type AuthActions = {
  login: (user: User) => void;
  logout: () => void;
}

export type AuthOperations = {}