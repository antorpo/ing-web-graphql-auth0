import { Resolver } from "types";
import { UserService } from "../../../services/server";

export const UserResolvers: Resolver = {
  Mutation: {
    updateUser: async (parent, args, ctx) => {
      return await UserService.updateUser(args.input, ctx.auth);
    },
  },
  Query: {
    getUsers: async () => {
      return await UserService.getUsers();
    },
  },
};
