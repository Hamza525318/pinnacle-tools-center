import { checkRole } from "../../../utils/roles";

export default function AdminDashboard() {
  const isAdmin = checkRole("admin");
  console.log("IS ADMIN", isAdmin);
  return (
    <p>
      This is the protected admin dashboard restricted to users with the `admin`
      role.
    </p>
  );
}
