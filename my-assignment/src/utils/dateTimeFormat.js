import moment from 'moment';

export const formatDate = timestamp => moment(timestamp).format('LL');