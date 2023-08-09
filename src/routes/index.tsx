import HomePage from "../components/pages/home";
import DashboardPage from "../components/pages/dashboard";
import AuthPage from "../components/pages/auth";
import TeamPage from "../components/pages/team";
import GeneratorPage from "../components/pages/generator";

const router = [
  {
    path: "/dashboard/writings/:id",
    element: <GeneratorPage />,
  },
  {
    path: "/dashboard/writings",
    element: <DashboardPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
];

export default router;
