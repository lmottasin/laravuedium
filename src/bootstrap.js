import axios from 'axios'
import { useAuth } from '@/stores/auth'

window.axios = axios
/* We set X-Requested-With header to tell the server it is an XHR request,
 and it serves an additional purpose so the server must consent to CORS policies */
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
/*tells the axios library to send the cookies along the request. */
window.axios.defaults.withCredentials = true
/* so we can omit full URLs in our requests and just type in 
the relative path of the server's API endpoint. */
window.axios.defaults.baseURL = 'http://localhost:8000/api/v1'

/* If unauthorized response occured */
window.axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const auth = useAuth()
      auth.destroyTokenAndRedirectTo()
    }

    return Promise.reject(error)
  }
)

// every time refresh the page
if (localStorage.getItem('access_token')) {
  window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
    'access_token'
  )}`
}
