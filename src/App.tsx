import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./route/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ColorProvider } from "./hook/ColorContext";

let persistor = persistStore(store);

let client = new QueryClient();
const App = () => {
  return (
    <div>
      <ColorProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={client}>
              <RouterProvider router={mainRoute} />

              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ColorProvider>
    </div>
  );
};

export default App;
