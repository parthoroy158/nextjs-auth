import dbConnect from "@/lib/dbConnect"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const AuthOptions = {

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const { username, password } = credentials
                console.log("This is the credentials",credentials)
                const user = await dbConnect('test_user').findOne({ username })
                const isPasswordOk = password == user.password
                // const res = await fetch("http://localhost:3000/", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()

                // If no error and we have user data, return it
                if (isPasswordOk) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ]
}
const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }