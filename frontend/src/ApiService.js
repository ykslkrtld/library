import axios from 'axios';

const ApiService = {
  getData: async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/books");
      return response.data.result.rows;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  delData: async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/books/${id}`);
    } catch (error) {
      console.error(error);
    }
  },

  postData: async (data) => {
    try {
      await axios.post("http://127.0.0.1:8000/books/", data);
    } catch (error) {
      console.error(error);
    }
  },

  putData: async (id, data) => {
    try {
      await axios.put(`http://127.0.0.1:8000/books/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  }
};

export default ApiService;
