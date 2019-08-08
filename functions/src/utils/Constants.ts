import { HealthInfo } from '../interface/Products';

const GENERAL = {
  API_FAILURE: 'Received error response from API',
  API_SUCCESS: 'Received valid response from API',
  AUTH_FAILURE: 'Error received from AuthenticateAPI',
  AUTH_SUCCESS: 'Token received from AuthenticateAPI',
  HEALTH_URL: '/health',
  HOST: 'http://localhost:3001',
  NAME: 'Workforce Contractor',
  PORT: 5000,
  VERSION: '1.0.0',
}

const HTTP_ERROR = {
  500: 'Something failed internally at our end',
  401: 'Please provide valid client credentials',
  403: 'You are not authorized to access this resource',
  404: 'Page not found',
}

const HEALTH_INFO: HealthInfo = {
  app : GENERAL.NAME,
  version: GENERAL.VERSION,
  timeStamp: Date.now(),
  message: "Health is Good !"
}

export {
  GENERAL,
  HEALTH_INFO,
  HTTP_ERROR
}