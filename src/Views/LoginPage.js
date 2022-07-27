import React from "react";
import { Formik } from "formik";
import { userLogin } from "../Api/Api";
import { validateEmailFieldLogin } from "../FormValidation/FormValidation";
import { Link } from "react-router-dom";
import RegisterPage from "./RegisterPage";

export default function LoginPage() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        validateEmailFieldLogin(values);
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

            //JSON object to store field values on form submission for submission to
            //user login API endpoint.
        const userDetails = {
            userEmail : values.email,

           userPassword : values.password
        }
        //call to function to submit user details
        userLogin( userDetails );

          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,

        errors,

        touched,

        handleChange,

        handleBlur,

        handleSubmit,

        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="items-center p-5 w-3/4 h-3/4 rounded-md shadow-lg"
        >
          <label htmlFor="email" className="block text-sm my-8 ">
            Email :{" "}
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="outline outline-blue-200 rounded-md text-md text-center"
          />

          {errors.email && touched.email && errors.email}

          <label htmlFor="password" className="block text-sm my-8">
            {" "}
            Password :{" "}
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="outline outline-blue-200 rounded-md  text-center"
          />

          {errors.password && touched.password && errors.password}

          <button
            type="submit"
            disabled={isSubmitting}
            className="block rounded-md shadow-lg ml-28 w-2/3 my-16 bg-blue-400"
          >
            <span className="text-md"> Submit </span>
          </button>
        </form>
      )}
    </Formik>
  );
}
