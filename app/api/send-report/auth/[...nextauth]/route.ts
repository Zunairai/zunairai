import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        console.log("LOGIN DATA:", credentials); // 👈 DEBUG

        if (
          credentials?.email === "admin@zunairai.com" &&
          credentials?.password === "admin123"
        ) {
          return {
            id: "1",
            email: "admin@zunairai.com",
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };