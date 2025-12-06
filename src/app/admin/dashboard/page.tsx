"use client";

import { useEffect, useState } from "react";
import { FolderKanban, Wrench, Newspaper, Users } from "lucide-react";

interface Stats {
  projects: number;
  services: number;
  news: number;
  team: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ projects: 0, services: 0, news: 0, team: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("bearer_token");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const [projectsRes, servicesRes, newsRes, teamRes] = await Promise.all([
          fetch("/api/projects?limit=1", { headers }),
          fetch("/api/services?limit=1", { headers }),
          fetch("/api/news?limit=1", { headers }),
          fetch("/api/team?limit=1", { headers }),
        ]);

        const [projects, services, news, team] = await Promise.all([
          projectsRes.json(),
          servicesRes.json(),
          newsRes.json(),
          teamRes.json(),
        ]);

        setStats({
          projects: Array.isArray(projects) ? projects.length : 0,
          services: Array.isArray(services) ? services.length : 0,
          news: Array.isArray(news) ? news.length : 0,
          team: Array.isArray(team) ? team.length : 0,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Projects",
      value: stats.projects,
      icon: FolderKanban,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Services",
      value: stats.services,
      icon: Wrench,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "News Articles",
      value: stats.news,
      icon: Newspaper,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Team Members",
      value: stats.team,
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-display font-medium text-foreground mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome to the GreenBuild admin panel
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 animate-pulse">
              <div className="h-12 w-12 bg-accent rounded-lg mb-4"></div>
              <div className="h-4 bg-accent rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-accent rounded w-1/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat) => (
            <div
              key={stat.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg inline-block mb-4`}>
                <stat.icon size={24} />
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-display font-medium mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/projects"
              className="block p-4 border border-border rounded-md hover:bg-accent transition-colors"
            >
              <h3 className="font-medium mb-1">Manage Projects</h3>
              <p className="text-sm text-muted-foreground">
                Add, edit, or delete project entries
              </p>
            </a>
            <a
              href="/admin/services"
              className="block p-4 border border-border rounded-md hover:bg-accent transition-colors"
            >
              <h3 className="font-medium mb-1">Manage Services</h3>
              <p className="text-sm text-muted-foreground">
                Update service offerings and descriptions
              </p>
            </a>
            <a
              href="/admin/news"
              className="block p-4 border border-border rounded-md hover:bg-accent transition-colors"
            >
              <h3 className="font-medium mb-1">Manage News</h3>
              <p className="text-sm text-muted-foreground">
                Publish and manage news articles
              </p>
            </a>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-display font-medium mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-md">
              <span className="text-sm font-medium text-green-800">API Status</span>
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-md">
              <span className="text-sm font-medium text-green-800">Database</span>
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Connected</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-md">
              <span className="text-sm font-medium text-blue-800">Security</span>
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
