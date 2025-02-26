import axios from "axios";

const API_BASE_URL = "https://api.recursivepareto.in/api"; // Replace with your actual Firebase function URL
const CONTACT_FORM_API = 'https://us-central1-recursivepareto-47a4d.cloudfunctions.net/sendContactFormNotification';
const JOB_APPLICATION_API = 'https://us-central1-recursivepareto-47a4d.cloudfunctions.net/sendContactFormNotification';
const apiService = {
  // Get all documents from a collection
  getAll: async (collection: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${collection}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${collection}:`, error);
      throw error;
    }
  },

  // Get a single document by ID
  getById: async (collection: string, id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${collection}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${collection} by ID:`, error);
      throw error;
    }
  },

  // Create a new document
  create: async (collection: string, data: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/${collection}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${collection}:`, error);
      throw error;
    }
  },

  // Update an existing document
  update: async (collection: string, id: string, data: any) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${collection}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating ${collection}:`, error);
      throw error;
    }
  },

  // Delete a document
  delete: async (collection: string, id: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/${collection}/${id}`);
    } catch (error) {
      console.error(`Error deleting ${collection}:`, error);
      throw error;
    }
  }
};

const sendContact=async (data:any) =>{
    try {
       const res =  await axios.post(CONTACT_FORM_API,data);
        return res;
    } catch (error) {
        console.error(`Error sending notification : `, error);
        
    }
}

const jobApplication=async (data:any) =>{
    try {
        const res = await axios.post(JOB_APPLICATION_API,data);
        return res;
    } catch (error) {
        console.error(`Error applying for job ${error}`);
        
    }
}
export {sendContact,jobApplication};
export default apiService;
