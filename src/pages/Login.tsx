import React, { useEffect, useState } from "react";
import { GitHub } from '@material-ui/icons';
import styled from "styled-components";
import Form from "../components/core/form/Form";
import Button from "../components/core/button";
import { useRedux } from "../hooks/useRedux";
import { loginUser } from "../redux/auth/login/action";
import * as yup from "yup";
import { useNavigate } from "react-router";

//--------------------------------------------------------------------

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
export default () => {

  const { dispatch, useAppSelector } = useRedux();
  const navigate: any = useNavigate();

  const {loginLoading , isUserLogin,isUserLogout }= useAppSelector(state => ({
    isUserLogin: state.Login.isUserLogin,
    error: state.Login.error,
    loginLoading: state.Login.loading,
    isUserLogout: state.Login.isUserLogout,
  }));

  const [redirectUrl, setRedirectUrl] = useState("/");
 
  useEffect(() => {
    if (isUserLogin && !loginLoading && !isUserLogout) {
      navigate(redirectUrl);
    }
  }, [isUserLogin, navigate, loginLoading, isUserLogout, redirectUrl]);
  function onSubmitForm(values: object) {
    dispatch(loginUser(values))
  }

  const initialValues:any ={
    username: "admin",
    password:"admin"
  }

  const formId='loginForm';

  return (
    <LoginContentWrapper>
      <div className="row">
        <div className="col-lg-8">
        </div>
        <div className="col-lg-4 content">
          <div className="login-content">
            <div className="header d-flex f-col">
              <h2>Welcome to Mi/Data 👋</h2>
              <p>Please sign-in to your account and start the adventure</p>
              <div className="info">
                <p><small>Admin:</small> admin@demo.com | admin</p>
                <p><small>Client:</small> client@demo.com | client</p>
              </div>
            </div>
            <div className="form-content d-flex f-col">
              <Form {...{validationSchema,onSubmitForm,initialValues,formId}}>
                <label>Username</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <Button loading={loginLoading} type="submit" className="primary" >Sign in</Button>
              </Form>
              <div className="new-user">
                <p>New on our platform? <a href="#">Create an account</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginContentWrapper>
  )
}

const LoginContentWrapper = styled.div`
height: 100%;
background-color: #F8F8F8;
.row,.col-lg-8,.col-lg-4 {
  height: 100%;
}

.row > .content {
  background-color : #FFF;
  padding: 64px;

}

.form-content {
  width: 100%;
  max-width : 400px;
}

.form-content .new-user {
  text-align: center ;
  margin-top:32px;
  margin-bottom:16px;
}

.form-content > form {
  display:flex ;
  flex-direction:column ;
  margin-top: 16px ;
}

.form-content > form > input {
  margin-bottom:12px ;
}

.login-content > .header > .info {
  background-color: rgba(115,103,240,.12);
  color : #7367f0;
  border-radius: 4px ;
  padding : 8px 14px;
}

.login-content > .header > .info > p {
  margin-bottom : 6px;
  font-size: 0.6em ;
}
`