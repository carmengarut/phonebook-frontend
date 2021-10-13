import axios from 'axios';

export const updatePerson = ({name, number, id}) => {
  
  return axios
    .put("http://localhost:3001/persons/" + id, {name, number, id})
    .then(response => {
       const { data } = response;
       return data;
    });
}
