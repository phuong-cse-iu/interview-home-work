import axios from 'axios';

export const request = async (endpoint, options, responseCb, errorCb) => {
    try {
      return await axios({
        url: endpoint,
        ...options
      });
    } catch (error) {
      return error.response;
    }
};

export const multipleRequest = async (enpoints, options) => {
  try {
    const promiseRequestArr = enpoints.map((enpoint, index) => request(enpoint, options[index]));
    return axios.all(promiseRequestArr.map(p => p.catch(() => null))).then(responses => responses);
  } catch (error) {
    return error.response;
  }
}

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};