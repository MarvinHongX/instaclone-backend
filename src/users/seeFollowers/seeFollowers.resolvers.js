import client from "../../client"

export default {
    Query: {
        seeFollowers: async(_, { username, page }) => {
            const ok = await client.user.findUnique({
                where: { username },
                select: { id: true },
            });
            if (!ok) {
                return {
                    ok: false,
                    error: "That user doesn't exist.",
                };
            }
            const followers = await client.user
                .findUnique({ where: { username } })
                .followers({
                    take: 3,
                    skip: (page - 1) * 3,
                });
            const totalFollowers = await client.user.count({
                where: { following: { some: { username } } },
            });
            return {
                ok: true,
                followers,
                totalPages: Math.ceil(totalFollowers / 5),
            }
        }
    }
}