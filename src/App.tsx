
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const client = new QueryClient();

const App = () => {
  return (
    <div>
      {" "}
      <QueryClientProvider client={client}>
        <RecoilRoot>
          <RouterProvider router={mainRouter} />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
};

export default App;
