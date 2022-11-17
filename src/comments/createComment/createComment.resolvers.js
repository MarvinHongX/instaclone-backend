import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
//import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createComment: protectedResolver(
      async (_, { photoId, payload }, { loggedInUser }) => {
        const existingPhoto = await client.photo.findUnique({
          where: {
            id: photoId,
          },
          select: {
            id: true,
          },
        });
        if (!existingPhoto) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        }

        await client.comment.create({
          data: {
            payload,
            photoId,
            userId: loggedInUser.id,
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};