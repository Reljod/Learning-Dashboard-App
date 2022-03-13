import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL || "http://localhost:8000";

export const getLearnings = () => {
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

export const saveLearnings = (data) => {
  const url = `${BACKEND_URL}/learnings`;

  const promise = new Promise( (resolve, reject) => {
    // To be changed to server side call.
    setTimeout(() => console.log(`Auto saving..: ${data.title}: ${data.body}`, ), 200);
    resolve(true);
  });
  
  return promise; 
}
