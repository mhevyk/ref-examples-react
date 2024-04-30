import { FormEvent, useState } from "react";

export default function FormControlled() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = {
      email,
      password,
    };

    console.log(values);
  };

  console.log("Render");

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
