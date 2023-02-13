import axios from "axios";

export async function getAll(limit, page) {
    const config = {
      method: "get",
      url: `https://jsonplaceholder.typicode.com/posts`,
      timeout: 5000,
      params: {
        _limit: limit,
        _page: page
      }
    };
        console.log('loading data');
        const response = await axios(config);
        return response; 
  }
