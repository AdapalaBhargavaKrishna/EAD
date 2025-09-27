import React, { useState } from "react";
import { Shield } from "lucide-react";

const App = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [score, setScore] = useState(0);

  const checkStrength = (pass) => {
    let tempScore = 0;

    if (pass.length >= 8) tempScore++;
    if (/[A-Z]/.test(pass)) tempScore++;
    if (/[a-z]/.test(pass)) tempScore++;
    if (/[0-9]/.test(pass)) tempScore++;
    if (/[^A-Za-z0-9]/.test(pass)) tempScore++;

    setScore(tempScore);

    switch (tempScore) {
      case 0:
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Moderate";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "";
    }
  };

  const getColor = () => {
    switch (score) {
      case 0:
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-orange-400";
      case 3:
        return "bg-yellow-400";
      case 4:
        return "bg-green-500";
      case 5:
        return "bg-green-700";
      default:
        return "bg-gray-200";
    }
  };

  const handleChange = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setStrength(checkStrength(newPass));
    console.log(strength);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen justify-center px-4">
      <div className="shadow-xl p-8 bg-white rounded-2xl w-full max-w-md space-y-6">
        <div className="w-full flex items-center justify-center">
          <span className="rounded-full p-5 bg-blue-100">
            <Shield color="#3b82f6" />
          </span>
        </div>
        <h1 className="font-bold text-3xl text-center text-gray-800">
          Password Strength Checker
        </h1>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Enter Password</label>
          <input
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Type your password..."
          />
        </div>

        {password && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm font-medium">
              <span className="text-gray-600">Password Strength</span>
              <span
                className={`${
                  strength.includes("Weak")
                    ? "text-red-500"
                    : strength.includes("Moderate")
                    ? "text-yellow-500"
                    : "text-green-600"
                }`}
              >
                {strength}
              </span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className={`h-3 transition-all duration-500 ${getColor()}`}
                style={{ width: `${(score / 5) * 100}%` }}
              ></div>
            </div>

            <ul className="text-xs text-gray-600 mt-2 space-y-1">
              <li className={password.length >= 8 ? "text-green-600" : ""}>
                At least 8 characters
              </li>
              <li className={/[A-Z]/.test(password) ? "text-green-600" : ""}>
                Contains uppercase letter
              </li>
              <li className={/[a-z]/.test(password) ? "text-green-600" : ""}>
                Contains lowercase letter
              </li>
              <li className={/[0-9]/.test(password) ? "text-green-600" : ""}>
                Contains number
              </li>
              <li
                className={
                  /[^A-Za-z0-9]/.test(password) ? "text-green-600" : ""
                }
              >
                Contains special character
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
