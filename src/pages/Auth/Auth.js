import React from "react";
import { useParams } from "react-router-dom";

const Auth = () => {
  const type = useParams().type;
  const [page, setPage] = React.useState("Loading");

  React.useEffect(() => {
    if (type === "login") {
      setPage("Login");
    } else if (type === "signup") {
      setPage("Sign Up");
    } else {
      window.location.href = "/404";
    }
  }, [type]);

  return (
    <div className="flex flex-col w-[100%] text-center mt-8">
      <span className="text-3xl font-black">{page}</span>
      <div className="mt-4 font-bold ">To be Updated..</div>
    </div>
  );
};

export default Auth;
