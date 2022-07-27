import React from 'react'
import { Formik } from "formik";
import { userLogin } from "../Api/Api";
import { validateEmailFieldLogin } from "../FormValidation/FormValidation";

export default function RegisterPage() {
  return (
    <Formik
      initialValues={{ name: "", surname : "", email : "", role : "" }}
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
          className="bg-green-200 items-center p-5 w-3/4 h-3/4"
        >

        <label htmlFor="name" className="block text-sm my-8">
            {" "}
            Name :{" "}
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="bg-blue-400 "
          />

          {errors.name && touched.name && errors.name}

          <label htmlFor="surname" className="block text-sm my-8">
            {" "}
            Surname :{" "}
          </label>
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            className="bg-blue-400 "
          />

          {errors.surname && touched.surname && errors.surname}


          <label htmlFor="email" className="block text-sm my-8 ">
            Email :{" "}
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="bg-red-300"
          />

          {errors.email && touched.email && errors.email}

          <label htmlFor="role" className="block text-sm my-8">
            {" "}
            Role :{" "}
          </label>
          <input
            type="text"
            name="role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
            className="bg-blue-400 "
          />

          {errors.password && touched.password && errors.password}

          <button
            type="submit"
            disabled={isSubmitting}
            className="block bg-red-900 w-2/3 my-8"
          >
            <span className="text-md"> Submit </span>
          </button>
        </form>
      )}
    </Formik>    
  )
}
