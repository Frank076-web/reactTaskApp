import { User } from "../../entities/user.entity";
import { userLoginService } from "../../services/auth/login.service";

export async function userLoginController(user: User): Promise<Response> {
      const path = process.env.REACT_APP_AUTH_LOGIN_PATH || "";

      return await userLoginService(user, path);
}
