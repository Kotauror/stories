import axios from 'axios';

class Api {

  makeRequest(method, path) {
    return axios({
      method: method,
      url: path
    })
    .then((response) => { return response.data })
    .catch((error) => { alert("Error in adding contact") })
  }
}

export default new Api;