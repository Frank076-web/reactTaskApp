import { create } from "zustand";
import { User } from "../entities/user.entity";
import { userRegisterController } from "../controllers/auth/register.controller";

interface RegisterStore {
      registering: boolean;
      setRegistering(value: boolean): void;
      register: (user: User) => Promise<boolean>;
}

export const useRegisterStore = create<RegisterStore>()(set => ({
      registering: false,
      ok: false,
      setRegistering: (value: boolean) => set({ registering: value }),
      register: async (user: User) => {
            const response = await userRegisterController(user);
            return response.ok;
      },
}));
