import axios from 'axios';

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
    } catch (error) {
      console.error(error);
    }
  },

  postData: async (data) => {
    try {
      await axios.post("https://library-yksl-backend.vercel.app/api/books/", data);
    } catch (error) {
      console.error(error);
    }
  },

  putData: async (id, data) => {
    try {
      await axios.put(`https://library-yksl-backend.vercel.app/api/books/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  }
};

export default ApiService;
