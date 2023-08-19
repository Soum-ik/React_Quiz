import "./styles/app.css";
import Layout from "../src/components/Layout";
import Home from "./components/pages/Home";
import SignUP from "./components/pages/SingUP";
import Quiz from "./components/pages/quzi";
import Login from "./components/pages/Login";
import Result from "./components/pages/Result";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingUp_page" element={<SignUP />} />
        <Route path="/login_page" element={<Login />} />
        <Route path="/Quiz_page" element={<Quiz />} />
        <Route path="/result_page" element={<Result />} />
      </Routes>
    </Layout>
  );
}
