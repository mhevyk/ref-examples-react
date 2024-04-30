import { FormEvent, useRef } from "react";

export default function FormUncontrolled() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = {
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    };

    console.log(values);
  };

  console.log("Render");

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <br />
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <br />
      <label>
        Password:
        <br />
        <input type="password" ref={passwordRef} />
      </label>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
