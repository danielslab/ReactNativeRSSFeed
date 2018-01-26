import axios from 'axios';

export const feedUri = 'https://dl.dropboxusercontent.com/s/cpl8uh9mloelmz2/invision-blog.json?dl=0';

export const getFeedFromCloud = () => {
  return axios.get(feedUri).then(({ data }) => data);
};
