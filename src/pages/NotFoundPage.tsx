import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>404 Not found</h1>
      <Link to="/">Go to home</Link>
    </>
  );
}
