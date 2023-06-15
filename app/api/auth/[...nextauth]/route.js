import NextAuth from "next-auth"

//what providers do I want to use?

  /// create .env.local file and add the following
  // NEXTAUTH_SECRET=your_secret   (This is the secret used to sign JSON Web Tokens.)
  //NEXTAUTH_URL=http://localhost:3000 (In production this would be your domain name)
  //GOOGLE_CLIENT_ID=your_client_id (You can get this from the Google Developer Console - open up a new project, get the client ID and secret, and enable the Google+ API)
  //GOOGLE_CLIENT_SECRET=your_client_secret


const handler = NextAuth({

providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })],

//    
   // passing in pages option to nextauth options; for the sign in page I want to use this /path
   // if you don't pass in this option, nextauth will use its default sign in page (next auth is built in with signIn, signOut, and error pages)
   // if you wish to customize any of those pages you can include the path to those pages here so nextauth will use these pages for the specific routes, 
   // and it will default to the built in options if you haven't specified for it here
  // pages: {
    // signIn: '/signin'
  // },





    ...
})

export { handler as GET, handler as POST }