
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

 

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

 

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

 

      credentials: {
        email: {},
        password: {},
      },

 

      async authorize(credentials) {
        await connectDB();

 

        const user = await User.findOne({
          email: credentials?.email,
          password: credentials?.password,
        });

 

        if (!user) return null;

 

        return {
          id: user._id.toString(),
          email: user.email,
          type: user.type, // custom field
        };
      },
    }),
  ],

 

  pages: {
    signIn: "/login",
  },

 

  session: {
    strategy: "jwt",
  },

 

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.type = (user as any).type;
      }

 

      return token;
    },

 

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).type = token.type;
      }

 

      return session;
    },
  },

 

  secret: process.env.NEXTAUTH_SECRET,
});

 

export { handler as GET, handler as POST };

