import { getSession, logout } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
    const session = await getSession();

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <form action={async () => {
                    "use server";
                    await logout();
                    redirect("/admin/login");
                }}>
                    <Button variant="destructive" type="submit">Logout</Button>
                </form>
            </div>

            <div className="bg-card p-6 rounded-lg shadow border border-border">
                <h2 className="text-xl font-semibold mb-4">Welcome, {session.email}</h2>
                <p>This is a protected admin area.</p>
            </div>
        </div>
    );
}
