import client from "../client";

export default {
    User: {
        totalFollowers: ({ id }) => 
            client.user.count({
                where: {
                    following: {
                        some: {
                            id,
                        },
                    },
                },
            }),
        totalFollowing: ({ id }) => 
            client.user.count({
                where:{
                    followers: {
                        some: {
                            id,
                        },
                    },
                }
            }),
        isMe: ({ id }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false;
            }
            return id === loggedInUser.id;
        },
        isFollowing: async ({ id }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false;
            }
            const exists = await client.user.count({
                where: {
                    username: loggedInUser.username,
                    following: {
                        some: {
                            id,
                        },
                    },
                },
            });
            return Boolean(exists);
        },
        photos: ({ id }, { page }) => client.photo.findMany({ 
            where: {
                userId: {
                    some: {
                        id,
                    },
                },
            },
            take: 5,
            skip: (page - 1) * 5,
        }),

    },
};