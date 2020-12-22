import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import authOperations from "../../redux/auth/authOperations";
import authSelectors from "../../redux/auth/authSelectors";

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const getToken = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (!getToken) {
      return;
    }
    console.log("dispatch");
    dispatch(authOperations.getCurrentUser());
  }, [dispatch, getToken]);

  const handleSubmit = (value) => {
    console.log(value);
    dispatch(authOperations.login(value));
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
