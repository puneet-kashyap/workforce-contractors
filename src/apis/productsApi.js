import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/workforce-contractors/us-central1/api'
})