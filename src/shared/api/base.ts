import axios from 'axios'

import { envVars } from '../config'

export const baseInstance = axios.create({
	baseURL: envVars.API_URL,
})
