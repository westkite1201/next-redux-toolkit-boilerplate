import {} from 'types';
import axios from '.';

export const getDatas = () => {
  return axios.get('/api/datas');
};
