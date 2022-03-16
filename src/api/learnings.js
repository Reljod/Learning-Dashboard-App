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

  const mostRecentUpdate = new Date(data.mostRecentUpdate).toString();
  const createdDate = new Date(data.createdDate).toString();

  data = {...data, mostRecentUpdate: mostRecentUpdate, createdDate: createdDate};

  const promise = new Promise( (resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(true);
        console.log(response);
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
