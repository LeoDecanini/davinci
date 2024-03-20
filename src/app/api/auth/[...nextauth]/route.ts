import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongoose";
import User from "@/models/users";
import bcrypt from "bcryptjs";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        dni: {
          label: "DNI",
          type: "text",
          placeholder: "Ingresa tu dni",
        },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();

        console.log(credentials);

        const userFound = await User.findOne({ dni: credentials?.dni }).select(
          "+password",
        );
        if (!userFound) throw Error("Credenciales inválidas");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound?.password,
        );

        if (!passwordMatch) throw Error("Credenciales inválidas");

        userFound.password = undefined;
        console.log("userFound", userFound);

        return userFound;
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
