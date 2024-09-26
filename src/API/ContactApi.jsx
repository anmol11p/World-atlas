import axios from 'axios';

const api = axios.create({
    baseURL: "https://contact-backend-2-qxs8.onrender.com"
});

// POST request to send contact data
export const getContactData = async (formData) => {
    try {
        const response = await api.post("/contact", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data; // Return the response data for further handling
    } catch (error) {
        throw error; // Rethrow the error to be caught in the component
    }
}
