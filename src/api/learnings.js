import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const learningsAPI = (resolve, reject) => {

  const url = `${BACKEND_URL}/learnings`;

  const promise = new Promise( (resolve, reject) => {
    axios.get(url).then(
      response => {
        resolve(response.data);
      }
    ).catch(
      error => {
        console.log(error.toJSON());
        reject()
      }
    );
  });
  
  return promise; 
}

export default learningsAPI;
