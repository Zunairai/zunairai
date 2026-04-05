import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// ✅ ADD THESE IMPORTS (STEP 6)
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
        // ✅ CONNECT DATABASE
        await connectDB();

        console.log("LOGIN DATA:", credentials);

        // ✅ FIND USER IN DATABASE
        const user = await User.findOne({
          email: credentials?.email,
          password: credentials?.password,
        });

        // ✅ IF USER EXISTS → LOGIN SUCCESS
        if (user) {
          return {
            id: user._id.toString(),
            email: user.email,
          };
        }

        // ❌ INVALID USER
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