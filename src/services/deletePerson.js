import axios from 'axios';

export const deletePerson = (id) => {
    return axios
      .delete("https://warm-chamber-94978.herokuapp.com/persons/" + id)
      .then(response => {
        const {data} = response;
        return data;
      })
}