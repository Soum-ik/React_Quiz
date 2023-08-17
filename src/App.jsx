import Layout from "../src/components/Layout";
import "./styles/app.css";
// import Home from "./components/pages/Home";
// import SignUP from "./components/pages/SingUP";
// import Login from "./components/pages/Login";
// import MiniPlayer from "./components/miniPlayer";
// import Quiz from "./components/pages/quzi";
import Result from "./components/pages/Result";

export default function App() {
  return (
    <Layout>
      <Result />
    </Layout>
  );
}
