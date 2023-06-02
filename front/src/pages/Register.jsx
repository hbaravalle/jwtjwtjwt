import { useState } from "react";

export default function Login() {
  const [nameValue, setNameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div id="login">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={nameValue}
            onChange={(event) => setNameValue(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={lastnameValue}
            onChange={(event) => setLastnameValue(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
