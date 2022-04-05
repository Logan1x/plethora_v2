import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFoundPage-wrapper">
      <h1>
        Go{" "}
        <span className="text-highlight">
          <Link to="/">home</Link>
        </span>
        , you're drunk.
      </h1>
    </div>
  );
}
