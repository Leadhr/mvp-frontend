/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";

import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";

import Culture from "views/Culture.js";
import MyTeam from "views/MyTeam";
import Candidates from "views/Candidates";
import Reference from "views/Reference";
import WorkStyles from "views/WorkStyles";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/culture",
    name: "Culture",
    icon: "ni ni-compass-04 text-blue",
    component: Culture,
    layout: "/admin",
  },
  {
    path: "/workstyles",
    name: "Workstyles",
    icon: "ni ni-briefcase-24 text-blue",
    component: WorkStyles,
    layout: "/admin",
  },
  {
    path: "/myteam",
    name: "MyTeam",
    icon: "ni ni-circle-08 text-blue",
    component: MyTeam,
    layout: "/admin",
  },
  {
    path: "/candidates",
    name: "Candidates",
    icon: "ni ni-single-copy-04 text-blue",
    component: Candidates,
    layout: "/admin",
  },
  {
    path: "/reference",
    name: "Reference",
    icon: "ni ni-books text-blue",
    component: Reference,
    layout: "/admin",
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
