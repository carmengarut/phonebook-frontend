import axios from 'axios';

export const getAllPersons = () => {
    return axios
      .get("https://warm-chamber-94978.herokuapp.com/persons")
      .then(response => {
        const {data} = response;
        return data;
      })
}