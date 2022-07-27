import axios from "axios";

const qs = require('querystring');

//Fucntion to make API request to user login endpoint.
function userLogin(userDetails){

    const token = getAccessTokenFromAPI();

    console.log(token);
}

function getAccessTokenFromAPI(){
    const instance = axios.create({
        baseURL: process.env.REACT_APP_URL,
        headers: { 'content-type' : 'application/x-www-form-urlencoded',
                    'grant_type' : 'password',
                    'client_id' : process.env.REACT_APP_CLIENT_ID,
                    'client_secret' : process.env.REACT_APP_CLIENT_SECRET,
                    'username' : process.env.REACT_APP_USERNAME,
                    'password' : process.env.REACT_APP_PASSWORD,
                    'scope' : process.env.REACT_APP_SCOPE
                 }
      });
      
      instance.get('/path')
      .then(response => {
          return response.data;
      })
      
}

//Function to process and pass data to register endpoint
function userRegister(userDetails){}

function getCategories(){
    axios.get('https://edeaf-api-staging.azurewebsites.net/v1/admin/categories').catch( (error) => {
        console.log(error);
    })
}

export {userLogin, userRegister, getCategories}
