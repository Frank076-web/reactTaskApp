import { User } from "../../entities/user.entity";
import { userRegisterService } from "../../services/auth/register.service";

export async function userRegisterController(user: User): Promise<Response> {
      const path = process.env.REACT_APP_AUTH_REGISTER_PATH || "";

      return await userRegisterService(user, path);
}
