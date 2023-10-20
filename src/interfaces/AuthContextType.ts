import { User } from "./User";
export interface AuthContextType {
    user: User | null;
    signed: boolean;
    signin: (email: string, password: string) => string | void;
    signup: (email: string, password: string) => string | void;
    signout: () => void;
  }