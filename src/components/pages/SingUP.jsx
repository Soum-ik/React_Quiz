import SingUpForm from "../singUpForm";
import Illustration from "../illustration";

export default function SignUP() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration text="signUP" />
        <SingUpForm />
      </div>
    </>
  );
}
