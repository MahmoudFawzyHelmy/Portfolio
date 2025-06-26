import { Link, useNavigate } from "react-router-dom";
import {
  FolderGit,
  History,
  Home,
  LayoutGrid,
  LogOut,
  MessageSquareMore,
  Package2,
  PanelLeft,
  PencilRuler,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Dashboard from "./sub-components/Dashboard";
import AddSkill from "./sub-components/AddSkill";
import AddProject from "./sub-components/AddProject";
import AddSoftwareApplications from "./sub-components/AddSoftwareApplications";
import Account from "./sub-components/Account";
import { useDispatch, useSelector } from "react-redux";
import { logout, clearAllUserErrors } from "@/store/slices/userSlice";
import { toast } from "react-toastify";
import Messages from "./sub-components/Messages";
import AddTimeline from "./sub-components/AddTimeline";

const HomePage = () => {
  const [active, setActive] = useState("");
  const { isAuthenticated, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out!");
  };
  const navigateTo = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigateTo("/login");
    }
  }, [isAuthenticated, error, dispatch, navigateTo]);
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-16 flex-col border-r border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 sm:flex z-50 shadow-lg">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-6">
          <Link className="group flex h-12 w-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-10 md:w-10 md:text-base">
            <Package2 className="h-5 w-5 transition-all group-hover:rotate-12" />
            <span className="sr-only">Portfolio Dashboard</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 md:h-9 md:w-9 ${
                    active === "Dashboard"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActive("Dashboard")}
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-900 text-white">Dashboard</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 md:h-9 md:w-9 ${
                    active === "Add Project"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActive("Add Project")}
                >
                  <FolderGit className="h-5 w-5" />
                  <span className="sr-only">Add Project</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-900 text-white">Add Project</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 md:h-9 md:w-9 ${
                    active === "Add Skill"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActive("Add Skill")}
                >
                  <PencilRuler className="h-5 w-5" />
                  <span className="sr-only">Add Skill</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-900 text-white">Add Skill</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 md:h-9 md:w-9 ${
                    active === "Add Uses"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActive("Add Uses")}
                >
                  <LayoutGrid className="h-5 w-5" />
                  <span className="sr-only">Add Uses</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-900 text-white">Add Uses</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 md:h-9 md:w-9 ${
                    active === "Add Timeline"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActive("Add Timeline")}
                >
                  <History className="h-5 w-5" />
                  <span className="sr-only">Add Timeline</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-900 text-white">Add Timeline</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 md:h-9 md:w-9 ${
                    active === "Messages"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActive("Messages")}
                >
                  <MessageSquareMore className="h-5 w-5" />
                  <span className="sr-only">Messages</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-900 text-white">Messages</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 md:h-9 md:w-9 ${
                    active === "Account"
                      ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActive("Account")}
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-slate-900 text-white">Account</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all duration-300 hover:scale-105 hover:bg-red-100 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-900/20 md:h-9 md:w-9"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-red-600 text-white">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/80 backdrop-blur-xl px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 max-[900px]:h-[100px] shadow-sm">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden border-slate-200 hover:bg-slate-100">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs bg-white/95 backdrop-blur-xl">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className={`group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-semibold text-white shadow-lg`}
              >
                <Package2 className="h-5 w-5 transition-all group-hover:rotate-12" />
                <span className="sr-only">Portfolio Dashboard</span>
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg transition-colors ${
                  active === "Dashboard"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
                onClick={() => setActive("Dashboard")}
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg transition-colors ${
                  active === "Add Project"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
                onClick={() => setActive("Add Project")}
              >
                <FolderGit className="h-5 w-5" />
                Add Project
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg transition-colors ${
                  active === "Add Skill"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
                onClick={() => setActive("Add Skill")}
              >
                <PencilRuler className="h-5 w-5" />
                Add Skill
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg transition-colors ${
                  active === "Add Uses"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
                onClick={() => setActive("Add Uses")}
              >
                <LayoutGrid className="h-5 w-5" />
                Add Uses
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg transition-colors ${
                  active === "Account"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
                onClick={() => setActive("Account")}
              >
                <User className="h-5 w-5" />
                Account
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg transition-colors ${
                  active === "Timeline"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
                onClick={() => setActive("Timeline")}
              >
                <History className="h-5 w-5" />
                Timeline
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 py-2 rounded-lg transition-colors ${
                  active === "Messages"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
                onClick={() => setActive("Messages")}
              >
                <MessageSquareMore className="h-5 w-5" />
                Messages
              </Link>
              <Link
                className="flex items-center gap-4 px-2.5 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* User Info */}
        <div className="flex items-center gap-4 md:grow-0 sm:ml-16 sm:mt-5">
          <div className="relative">
            <img
              src={user && user.avatar && user.avatar.url}
              alt="avatar"
              className="w-16 h-16 rounded-full max-[900px]:hidden border-4 border-white shadow-lg object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent max-[900px]:text-xl">
              Welcome back, {user?.fullName}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Ready to manage your portfolio?</p>
          </div>
        </div>
      </header>

      <div className="flex-1 sm:pl-16">
        {(() => {
          switch (active) {
            case "Dashboard":
              return <Dashboard />;
            case "Add Project":
              return <AddProject />;
            case "Add Skill":
              return <AddSkill />;
            case "Add Uses":
              return <AddSoftwareApplications />;
            case "Add Timeline":
              return <AddTimeline />;
            case "Messages":
              return <Messages />;
            case "Account":
              return <Account />;
            default:
              return <Dashboard />;
          }
        })()}
      </div>
    </div>
  );
};

export default HomePage;
