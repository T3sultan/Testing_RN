import { BASE_URL, API_KEY } from "../config"

export const GET = async (url) => {
      const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`
      const response = await fetch(API_URL, { method: 'GET' });
      return response;
}