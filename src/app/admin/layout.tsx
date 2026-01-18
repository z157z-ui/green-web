import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const session = cookieStore.get("session"); // adjust name if needed

  // 🔒 Block all admin pages if not logged in
  if (!session) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
