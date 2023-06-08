import React from "react";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p className="text-center text-red-400">{error}</p>;
};

export default ErrorMessage;
