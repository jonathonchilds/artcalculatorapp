"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AdminPage() {
  // const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <p>You are not authorized to view this page. Please sign in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
  return (
    <div>
      <p>Admin Page</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
