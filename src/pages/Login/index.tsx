import React, { useState } from "react";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { showError } from "helpers/toast";
import { useAuth } from "providers/AuthenticationProvider";
import { Navigate } from "react-router-dom";
import BaseUrl from "constants/baseUrl";
import Input from "components/CustomField/InputField";
import Button from "components/CustomButton";
import { ButtonHTMLTypes, ButtonType } from "interfaces/common";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const validationLoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required field!"),
  password: Yup.string().required("Password is required field!"),
});

const Login = () => {
  //! State
  const auth = useAuth();
  const { login } = useAuth();
  const [isLoginForm, setIsLoginForm] = useState(true);
  //! Function

  //! Render
  if (auth.isLogged) {
    return <Navigate to={BaseUrl.users} />;
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationLoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        try {
          const { username, password } = values;
          setSubmitting(true);
          login({ username, password });
          setSubmitting(false);
        } catch (error) {
          showError(error);
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="flex justify-center items-center h-screen bg-[#d6d6d6]">
            <div className="max-w-[580px] p-8 bg-white rounded-lg shadow-lg">
              <div style={{ marginBottom: 20 }}>
                {isLoginForm ? 'username xhuy/passcode xhuy' : 'Register your new account'}
              </div>

              {isLoginForm && (
                <>
                  <FastField
                    component={Input}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    name="username"
                    label="Username"
                    fullWidth
                  />
                  <FastField
                    component={Input}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                  <Button htmlType={ButtonHTMLTypes.Submit} title="Sign in" />
                </>
              )}

              {!isLoginForm && (
                <>
                  <FastField
                    component={Input}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    name="newUsername"
                    label="New Username"
                    fullWidth
                  />
                  <FastField
                    component={Input}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth
                  />
                  <Button htmlType={ButtonHTMLTypes.Submit} title="Register" />
                </>
              )}

              <div className="mt-4">
                {isLoginForm ? (
                  <a href="#" onClick={() => setIsLoginForm(false)} className="font-bold">
                    Or register now!
                  </a>
                ) : (
                  <a href="#" onClick={() => setIsLoginForm(true)} className="font-bold">
                    Back to sign in
                  </a>
                )}
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default React.memo(Login);
