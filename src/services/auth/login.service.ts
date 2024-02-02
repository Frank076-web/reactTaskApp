import { User } from "../../entities/user.entity";

export async function userLoginService(user: User, path: string | undefined): Promise<Response> {
      const baseUrl = process.env.REACT_APP_BASE_PATH;

      try {
            const response = await fetch(`${baseUrl}/${path}`, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                        email: user.email,
                        password: user.password,
                  }),
            });

            return response;
      } catch (err) {}

      return new Response(null, { status: 400 });
}
