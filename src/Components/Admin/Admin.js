import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useStateValue } from "../../StateProvider";
function Admin() {
  const navigate = useNavigate();
  const [email ,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{}, dispatch] = useStateValue();

  const adminslogin = (e) => {
    e.preventDefault();


     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Validate email
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and include at least one letter and one number.");
      return;
    }


  //   axios
  //     .post("/admins/adminslogin", { email, password })
  //     .then((res) => {
  //       if (!res.data.error) {
  //         dispatch({
  //           type: "SET_ADMIN",
  //           user: res.data,
  //         });

  //         localStorage.setItem("admins", JSON.stringify(res.data));

  //         navigate("/Main");
  //       } else if (res.data.error) {
  //         alert(res.data.error);
  //       }
  //     })
  //     .catch((err) => console.warn(err));

  axios
  .post("/admins/adminslogin", { email, password })
  .then((res) => {
    if (!res.data.error) {
      // Save token + admin info separately
     if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      if (res.data.admin) {
        localStorage.setItem("admin", JSON.stringify(res.data.admin));
      }

      // Update Redux state (if you’re using it)
      dispatch({
        type: "SET_ADMIN",
        user: res.data.admin,
      });

      navigate("/admin/Main"); // go to dashboard
    } else {
      alert(res.data.error);
    }
  })
  .catch((err) => console.warn(err));

   };
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src="./GRIN ENERGY.png" alt="Logo" />
      </Logo>

      <FormContainer>
        <h3>Sign-In</h3>

        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="Example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>

        <LoginButton onClick={adminslogin}>Admin Login</LoginButton>

        <InfoText>
          By continuing, you agree to <strong className="grin">GRIN ENERGY</strong> <span>Conditions of Use </span>
          and <span> Privacy Notice</span>
        </InfoText>
      </FormContainer>
      <SignUpButton onClick={() => navigate("/AdminSignup")}>
        Create Account in <strong className="grin">GRIN ENERGY</strong>
      </SignUpButton>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 300px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const LoginButton = styled.button`
  width: 70%;
  height: 35px;
  background-color: #1e3a8a;
  color:white;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

const InfoText = styled.p`
  font-size: 12px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;

  span {
    color: #426bc0;
  }
`;

const SignUpButton = styled.button`
  width: 55%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;
export default Admin;
