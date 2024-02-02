export class User {
      id: number | null;
      name: string | null;
      email: string;
      password: string;
      token: string | null;

      constructor(email = "", password = "", token: string | null = null, id: number | null = null, name: string | null = null) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.password = password;
            this.token = token;
      }
}
