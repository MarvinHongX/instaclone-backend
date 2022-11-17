import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
//import { protectedResolver } from "../../src/users/users.utils";

export default {
  Mutation: {
    deleteLike: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const oldLike = await client.like.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (!oldLike) {
        return {
          ok: false,
          error: "Like not found.",
        };
      } else if (oldLike.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "Not authorized.",
        };
      } else {
        await client.like.delete({
          where: {
            id,
          },
        });
        return {
          ok: true,
        };
      }
    }),
  },
};
