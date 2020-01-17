import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:9080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    axios.get(API_URL + 'cache?key=user', {headers: authHeader()});
    axios.get(API_URL + 'session', {headers: authHeader()});
    return axios.get(API_URL + 'user', {headers: authHeader()});
  }

  getModeratorBoard() {
    axios.get(API_URL + 'cache?key=mod', {headers: authHeader()});
    axios.get(API_URL + 'session', {headers: authHeader()});
    return axios.get(API_URL + 'mod', {headers: authHeader()});
  }

  getAdminBoard() {
    axios.get(API_URL + 'cache?key=admin', {headers: authHeader()});
    axios.get(API_URL + 'session', {headers: authHeader()});
    return axios.get(API_URL + 'admin', {headers: authHeader()});
  }
}

export default new UserService();
