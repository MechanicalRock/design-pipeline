import "next-auth";

declare module "next-auth" {
  interface Profile {
    sub: string;
    name: string;
    email: string;
  }
  interface User {
    email: string;
  }
  interface Session {
    user: User;
    sub: string;
    expires: Date;
  }
}
