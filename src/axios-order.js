import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-ba9c0.firebaseio.com/',
});

export default instance;
