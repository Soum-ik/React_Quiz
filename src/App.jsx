import Layout from "../src/components/Layout";
import "./styles/app.css";
// // import Home from "./components/pages/Home";
// import SignUP from "./components/pages/SingUP";
// // import Login from "./components/pages/Login";
// import MiniPlayer from "./components/miniPlayer";
import Quiz from "./components/pages/quzi";
export default function App() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}
