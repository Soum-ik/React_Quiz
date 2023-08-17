import "./styles/app.css";
import Layout from "../src/components/Layout";
// import Home from "./components/Home";
import SignUP from "./components/SingUP";

export default function App() {
  return (
    <Layout>
      <SignUP/>
      {/* <Home />   */}
    </Layout>
  );
}
