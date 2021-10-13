import axios from 'axios';

export const createPerson = ({name, number}) => {
  
  return axios
    .post("http://localhost:3001/persons", {name, number})
    .then(response => {
      console.log({response})
      // const { data } = response;
      // return data;
    });
}

