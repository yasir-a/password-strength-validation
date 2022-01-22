import { useState } from "react";
import "./App.css";
import PWDRequisite from "./PWDRequisite";

function App() {
  const [password, setPassword] = useState("");
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnFocus = () => {
    setPWDRquisite(true);
  };

  const handleOnBlur = () => {
    setPWDRquisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Password Strength Validator</h2>
      </div>
      <div className="card">
        <div className="password">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            className="input-field"
            id="password"
            type="password"
            value={password}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
          />
        </div>
        {pwdRequiste ? (
          <PWDRequisite
            capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
            numberFlag={checks.numberCheck ? "valid" : "invalid"}
            pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
            specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
