import { protectedResolver } from "../users/users.utils";

export default {
    Comment: {
        isMine: protectedResolver(
            async ({ userId }, _, { loggedInUser }) => {
                if (!loggedInUser) {
                    return false;
                }
                return userId === loggedInUser.id
            }
        )
    }
}