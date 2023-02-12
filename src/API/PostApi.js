import axios from "axios";

export async function getAll() {
    const config = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users/1/posts",
      timeout: 5000
    };
    try {
        const response = await axios(config);
        console.log('loading data');
        return response.data; 
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
