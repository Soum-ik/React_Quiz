import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "./context/Auth_contexts";
import Form from "./form";
import TextInput from "./textInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function hadndelSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <Form style={{ height: " 330px" }} onSubmit={hadndelSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon="alternate_email"
      />
      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={loading}>
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account?
        <Link to="/SingUp_page"> Sing UP </Link>
        instead.
      </div>
    </Form>
  );
}
