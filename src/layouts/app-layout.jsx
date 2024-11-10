import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen max-w-7xl mx-auto">
        <Header />
        <Outlet />
      </main>
      <div className="p-6 text-center bg-gray-800 mt-10 text-white font-semibold rounded-t-lg shadow-lg">
        <span className="text-red-500 text-2xl">Made with 🖤</span> by <span className="text-yellow-300 text-2xl">अगस्त</span>
      </div>
    </div>
  );
};

export default AppLayout;
