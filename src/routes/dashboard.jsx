// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import UsersRM from "views/usersrm/UsersRM.jsx";
import UsersAdmin from "views/usersadmin/UsersAdmin.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Ver Empleado",
    navbarName: "Empleado",
    icon: "contacts",
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Lista de Empleados",
    navbarName: "Empleados",
    icon: "group",
    component: TableList
  },
  {
    path: "/notifications",
    sidebarName: "Notifications & Doc",
    navbarName: "Notifications & Doc",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/calendar",
    sidebarName: "Calendar",
    navbarName: "Calendar",
    icon: "calendar_today",
    component: Calendar
  },
  {
    path: "/usersadmin",
    sidebarName: "Users Admin",
    navbarName: "Users Admin",
    icon: "group",
    component: UsersAdmin
  },
  {
    path: "/usersrm",
    sidebarName: "Users RM",
    navbarName: "Users RM",
    icon: "group",
    component: UsersRM
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
