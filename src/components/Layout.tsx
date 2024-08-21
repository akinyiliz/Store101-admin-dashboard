import Sidebar from "./Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="ml-28 flex-1 p-2 mt-20 md:p-6 md:ml-56 lg:ml-64">
        {children}
      </div>
    </div>
  );
}
