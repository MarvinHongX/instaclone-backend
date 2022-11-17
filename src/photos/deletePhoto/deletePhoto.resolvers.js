import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deletePhoto: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const oldPhoto = await client.photo.findUnique({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (!oldPhoto) {
        return {
          ok: false,
          error: "Photo not found.",
        };
      } else if (oldPhoto.userId !== loggedInUser.id) {
        return {
          ok: false,
          error: "Not authorized.",
        };
      } else {
        await client.photo.delete({
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