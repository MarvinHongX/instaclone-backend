import client from "../client"
import { protectedResolver } from "../users/users.utils";

export default {
    Photo: {
        user: ({ userId }) => 
            client.user.findUnique({
                where: {
                    id: userId,
                },
            }),
        hashtags: ({ id }) =>
            client.hashtag.findMany({
                where: {
                    photos: {
                        some: {
                            id,
                        },
                    },
                },
            }),
        likes: ({ id }) => client.like.count({
            where: {
                photoId: id,
            },
        }),
        comments: ({ id }) => client.comment.count({
            where: {
                photoId: id,
            },
        }),
        isMine: protectedResolver(
            async ({ userId }, _, { loggedInUser }) => {
                if (!loggedInUser) {
                    return false;
                }
                return userId === loggedInUser.id
            }
        ),
    },
    Hashtag: {
        photos: ({ hashtag }, { page }) => client.photo.findMany({
            where: {
                hashtags: {
                    some: {
                        hashtag,
                    },
                },
            },
            take: 5,
            skip: (page - 1) * 5,
        }),
        totalPhotos: ({ id }) =>
            client.photo.count({
                where: {
                    hashtags: {
                        some: {
                            id,
                        }
                    },
                },
            }),
    },
};