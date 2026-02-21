export const generateAbsoluteRoutes = <T extends Record<string, string>>(
  routesObj: T
): { [K in keyof T]: string } => {
  const baseUrl = routesObj["BaseUrl"];
  if (!routesObj["BaseUrl"]) {
    return routesObj;
  }
  return Object.entries(routesObj).reduce((acc, [key, value]) => {
    if (key === "BaseUrl") {
      return {
        ...acc,
        [key]: `${baseUrl}`,
      };
    }
    return {
      ...acc,
      [key]: `${baseUrl}/${value}`,
    };
  }, {} as T);
};
