import { auth } from "@clerk/nextjs/server";

export const checkRole = async (role) => {
  const { sessionClaims } = await auth();
  console.log("SESSIONS CLAIM", sessionClaims);
  return sessionClaims?.metadata.role === role;
};
