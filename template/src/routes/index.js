import LandingPage from "../pages/LandingPage/LandingPage";

const routes = [
  {
    path: "/",
    components: [<LandingPage />],
    exact: true,
  },
];

export default routes;
