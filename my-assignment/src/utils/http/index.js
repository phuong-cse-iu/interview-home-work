import axios from 'axios';

export default async (endpoint, options) => {
    try {
      return await axios({
        url: endpoint,
        ...options
      });
    } catch (error) {
        console.log('error', error);
      return error.response;
    }
};
