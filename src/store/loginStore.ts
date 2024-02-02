import { create } from "zustand";
import { User } from "../entities/user.entity";
import { userLoginController } from "../controllers/auth/login.controller";
import { ResponseEntity } from "../entities/response.entity";

interface Login {
      isLoggedIn: boolean;
      logging: boolean;
      setLogging(value: boolean): void;
      logIn: (user: User) => Promise<ResponseEntity<User> | void>;
      logOut: () => void;
}

export const useLoginStore = create<Login>()(set => ({
      isLoggedIn: localStorage.getItem("token") !== null ? true : false,
      logging: false,
      setLogging: (value: boolean) => set({ logging: value }),
      logIn: async (user: User) => {
            let data: User;
            const response = await userLoginController(user);

            if (response.ok) {
                  data = await response.json();
                  localStorage.setItem("token", data.token!);
                  set(() => ({
                        isLoggedIn: true,
                  }));
            } else {
                  return new ResponseEntity<User>(response.ok, null, response.statusText);
            }
      },
      logOut: () => {
            localStorage.removeItem("token");
            set(() => ({
                  isLoggedIn: false,
            }));
      },
}));
