import axios from 'axios';

export const updatePerson = ({name, number, id}) => {
  
  return axios
    .put("https://warm-chamber-94978.herokuapp.com/persons/" + id, {name, number, id})
    .then(response => {
       const { data } = response;
       return data;
    });
}
