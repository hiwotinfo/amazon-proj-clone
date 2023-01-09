import axios from 'axios';



const instance = axios.create({
//The API (cloud function) URL 
baseURL:'http://127.0.0.1:5001/clone-8a3ab/us-central1/api',

});

export default instance