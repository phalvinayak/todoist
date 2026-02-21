import router from "@presentation/router/router";
import AuthInitializer from "@shared/components/AuthInitializer/AuthInitializer";
import { persistor, store } from "@src/redux/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthInitializer>
          <RouterProvider router={router} />
        </AuthInitializer>
      </PersistGate>
    </Provider>
  </StrictMode>
);
