import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./App.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster position="top-center" />
        <App />
      </Router>
    </QueryClientProvider>
  </RecoilRoot>
);
