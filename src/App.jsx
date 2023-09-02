import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Layout";
import { AuthProvider } from "../src/components/context/Auth_contexts";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Result from "./components/pages/Result";
import SignUP from "./components/pages/SingUP";
import Quiz from "./components/pages/quzi";
import PrivateRouter from "./components/priveteRouter";
import PublicRouter from "./components/publiroute";
import "./styles/app.css";
import Auher from "./components/auther";

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
            <Route path="Result_page/:id" element={<Result />} />
          </Route>
        </Routes>
      </Layout>
      {/* <Auher /> */}
    </AuthProvider>
  );
}
