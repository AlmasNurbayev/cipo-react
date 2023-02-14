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

  export async function getOnce(id) {
    const config = {
      method: "get",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      timeout: 5000,
    };
        console.log('loading data ', config.url);
        const response = await axios(config);
        return response; 
  }

  export async function getComments(id) {
    const config = {
      method: "get",
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      timeout: 5000,
    };
        console.log('loading data ', config.url);
        const response = await axios(config);
        return response; 
  }