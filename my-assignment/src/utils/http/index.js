import axios from 'axios';

export default ({method, url, params, cancelToken}) => axios({
    method,
    url,
    params,
    cancelToken,
}).then(res => res.data);
