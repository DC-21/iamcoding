import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import Layout from "./components/Layout";
import SignUp from "./components/signup/SignUp";
import Activate from "./components/activate/Activate";
import Challenges from "./pages/Authorised/Challenges/Challenges";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/code-challenges"
          element={
            <Layout>
              <Challenges />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activate" element={<Activate />} />
      </Routes>
    </>
  );
}

export default App;
