import "./styles/app.css";
import { AuthProvider } from "../src/components/context/Auth_contexts";
import Layout from "../src/components/Layout";
import Home from "./components/pages/Home";
import SignUP from "./components/pages/SingUP";
import Quiz from "./components/pages/quzi";
import Login from "./components/pages/Login";
import Result from "./components/pages/Result";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./components/priveteRouter";
import PublicRouter from "./components/publiroute";

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PublicRouter />}>
            <Route path="SingUp_page" element={<SignUP />} />
            <Route path="login_page" element={<Login />} />
          </Route>
          <Route path="/*" element={<PrivateRouter />}>
            <Route path="Quiz_page/:id" element={<Quiz />} />
            <Route path="result_page" element={<Result />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
