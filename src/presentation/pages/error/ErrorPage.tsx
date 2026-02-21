import { FC } from "react";

const ErrorPage: FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Page not found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
