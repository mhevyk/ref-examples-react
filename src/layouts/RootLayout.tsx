import { Link, Outlet } from "react-router-dom";

export default function UseCallbackAsRefLayout() {
  return (
    <>
      <ul>
        <li>
          <Link to="ref-vs-variable">Ref vs simple variable</Link>
        </li>
        <li>
          <Link to="controlled-form">Form (controlled)</Link>
        </li>
        <li>
          <Link to="uncontrolled-form">Form (uncontrolled)</Link>
        </li>
        <li>
          <Link to="">Problem (dynamic elements with useRef)</Link>
        </li>
        <li>
          <Link to="dynamic-input-height">Example 1 (input height)</Link>
        </li>
        <li>
          <Link to="dynamic-image-height">Example 2 (image height)</Link>
        </li>
        <li>
          <Link to="infinite-scrolling">Example 3 (infinite scrolling)</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
