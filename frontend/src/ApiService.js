import axios from 'axios';
import { toastSuccessNotify, toastErrorNotify } from './ToastNotify';

const ApiService = {
  getData: async () => {
    try {
      const response = await axios.get("https://library-yksl-backend.vercel.app/api/books");
      return response.data.result.rows;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  delData: async (id) => {
    try {
      await axios.delete(`https://library-yksl-backend.vercel.app/api/books/${id}`);
      toastSuccessNotify("Data deleted successfully!");
    } catch (error) {
      toastErrorNotify("Failed to delete data!");
      console.error(error);
    }
  },

  postData: async (data) => {
    try {
      await axios.post("https://library-yksl-backend.vercel.app/api/books/", data);
      toastSuccessNotify("Data posted successfully!");
    } catch (error) {
      toastErrorNotify("Failed to post data!");
      console.error(error);
    }
  },

  putData: async (id, data) => {
    try {
      await axios.put(`https://library-yksl-backend.vercel.app/api/books/${id}`, data);
      toastSuccessNotify("Data updated successfully!");
    } catch (error) {
      toastErrorNotify("Failed to update data!");
      console.error(error);
    }
  }
};

export default ApiService;
