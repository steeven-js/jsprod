import Axios from 'axios'

const axios = Axios.create({
    baseURL: import.meta.env.VITE_CONTACT_MAIL_API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
})

export default axios
