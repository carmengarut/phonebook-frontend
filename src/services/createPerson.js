import axios from 'axios';

export const createPerson = ({name, number}) => {
  
  return axios
    .post("https://warm-chamber-94978.herokuapp.com/persons", {name, number})
    .then(response => {
      console.log({response})
      const { data } = response;
      return data;
    });
}

