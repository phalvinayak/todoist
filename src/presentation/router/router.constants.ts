import { generateAbsoluteRoutes } from "@shared/util/routes.utils";

export const ROOT_ROUTE_ID = "root";

export const CommonRoutes = {
  BaseUrl: "",
  NotFound: "/404",
};

export const TodoRoutes = {
  BaseUrl: "/todo",
  Create: "create",
  Edit: "edit/:id",
  List: "list",
  View: "view/:id",
};

export const AbsoluteMockRoutes = generateAbsoluteRoutes(TodoRoutes);
