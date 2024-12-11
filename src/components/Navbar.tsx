import { FiArrowLeft } from "react-icons/fi";
import { Settings2, CircleUser, LayoutDashboard } from "lucide-react";

export const Navbar = () => (
  <div className="flex flex-col justify-between h-full p-4 border-r">
    <div>
      <button className="mb-8">
        <FiArrowLeft className="text-xl" />
      </button>
      <div className="flex flex-col space-y-4 mt-4">
        <button className="flex-col items-center text-blue-500">
          <LayoutDashboard />
          <span>Content</span>
        </button>
        <button className="flex-col items-center">
          <Settings2 />
          <span>Settings</span>
        </button>
      </div>
    </div>
    <button>
      <CircleUser className="text-xl" />
    </button>
  </div>
);
