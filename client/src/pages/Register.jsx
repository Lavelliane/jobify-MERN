import React, { useState, useEffect } from "react";
import { FormRow, Logo, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState);
  //global state and useNavigate
  const { user, isLoading, showAlert, displayAlert, clearAlert, registerUser, loginUser } = useAppContext()
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values

    if(!email || !password || (!isMember && !name)){
      displayAlert();
      clearAlert();
      return;
    }

    const currentUser = {name, email, password}
    if(isMember){
      loginUser(currentUser)
    }else{
      registerUser(currentUser)
    }
    console.log(values)
  };

  useEffect(() => {
    setTimeout(() => {
      if(user){
        navigate('/')
      }
    }, 3000)
    
  }, [user, navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {values.isMember === false && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?' }
          <button type="button" onClick={toggleMember} className="member-btn" disabled={isLoading}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
