import axios from 'axios';

const uri = `https://dl.dropboxusercontent.com/s/cpl8uh9mloelmz2/invision-blog.json?dl=0`;

export const getFeedFromCloud = () => {
  return axios.get(uri).then(({ data }) => data);
}
