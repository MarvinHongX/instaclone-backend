import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default {
    Mutation: {
        createAccount: async (
            _,
            { firstName, lastName, username, email, password }
        ) => {
            try {
                // check if username or email are already on DB
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                username,
                            },
                            {
                                email,
                            },
                        ],
                    },
                });
                if(existingUser){
                    return {
                        ok: false,
                        error: "This username/password is alrerady taken.",
                    };
                }
                // hash password
                const uglyPassword = await bcrypt.hash(password, 10);

                // save and return the user
                const user = await client.user.create({
                    data: {
                        username, 
                        email, 
                        firstName, 
                        lastName, 
                        password: uglyPassword
                    }
                });
                if (!user) {
                    return {
                        ok: false,
                        error: "Can't create account.",
                    }
                }
                const token = await jwt.sign({ id: user.id }, process.env.PRIVATE_KEY);
                return {
                    ok: true,
                    token,
                };
            } catch(e) {
                return e;
            } 
        },
    }
}