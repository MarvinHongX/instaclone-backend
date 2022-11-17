import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteComment: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const oldComment = await client.comment.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (!oldComment) {
        return {
          ok: false,
          error: "Comment not found.",
        };
      } else if (oldComment.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "Not authorized.",
        };
      } else {
        await client.comment.delete({
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
