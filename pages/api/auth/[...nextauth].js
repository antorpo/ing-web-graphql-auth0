import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@config/prisma';
import { UserService } from '../../../services/server';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        const tokenGraph = await UserService.generarTokenGraph({
          id: user.id,
          email: user.email,
          isNewUser,
        });

        token.tokenGraph = tokenGraph.data.token;
        token.userId = tokenGraph.data.userId;
        token.roleId = tokenGraph.data.roleId;
      }

      return token;
    },
    async session({ session, user, token }) {
      session.tokenGraph = token.tokenGraph;
      session.userId = token.userId;
      session.roleId = token.roleId;

      return session;
    },
  },
};

export default NextAuth(authOptions);
