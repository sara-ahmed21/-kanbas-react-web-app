import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import Signup from "./Signup";


export default function Signin() {
  const [errorMessage, setErrorMessage] = useState("");

  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    }
    catch (error: any) {
      console.log(error);
      setErrorMessage("Account Not Found.  Please try again.")
    }
  }
  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })} />
      <input value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })} />
      <button onClick={signin}> Signin </button>
      {/* <Link to="/Kanbas/Account/Signup">Sign Up</Link> */}
    </div>


  );
}