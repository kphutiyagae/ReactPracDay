import axios from "axios";
//import { Jwt } from "jsonwebtoken";

const qs = require("querystring");

//Fucntion to make API request to user login endpoint.
function userLogin(userDetails) {
  const token = getAccessTokenFromAPI();
}

//Helper function to request new token provided one in cache has expired
function getAccessTokenFromAPI() {
  return axios
    .post(
      "https://edeaf-api-staging.azurewebsites.net/connect/token",
      {},
      {
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
      }
    )
    .then((response) => {
      console.log(response);
    });
}

//Function to process and pass data to register endpoint
function userRegister(userDetails) {}

//Function to call Categories endpoint on API
function getCategories() {
  axios
    .get("https://edeaf-api-staging.azurewebsites.net/v1/admin/categories")
    .then((response) => {
      if (response.status == 200 && response.data != null) {
        return response.data;
      } else {
        console.log(response.data);

        return {
          data: {
            message: "A server error has occured.",
          },
        };
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

//Helper function to check if current token is valid
function checkUserToken() {
  const token = localStorage.getItem("id_token");

  /*var decodedToken = Jwt.decode(token, {complete : true});

    var dateNow = new Date();

     if(decodedToken.exp < dateNow.getTime()){
        return false;
     }
     */
  return true;
}

export { userLogin, userRegister, getCategories };
