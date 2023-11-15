import Button from "./Button";
import CheckBox from "./checkbox";
import TextInput from "./textInput";
import { Link } from "react-router-dom";
import Form from "./form";
import { useState } from "react";
import { useAuth } from "./context/Auth_contexts";
import { useNavigate } from "react-router-dom";

export default function SingUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPass, setConfirmPass] = useState("");
  const [active, setActive] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const { singUP } = useAuth();
  const navigate = useNavigate();

  async function hadndelSubmit(e) {
    e.preventDefault();

    if (password !== confrimPass) {
      return setError("You'r password didn't match!");
    }

    try {
      setError("");
      setLoading(true);
      await singUP(email, password, username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an a account!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={hadndelSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        required
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        required
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        required
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confrimPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <CheckBox
        required
        text="I agree to the Terms & Conditions"
        value={active}
        onChange={(e) => setActive(e.target.value)}
      />
      <Button disabled={loading}  type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login_page">Login</Link> instead.
      </div>
    </Form>
  );
}
