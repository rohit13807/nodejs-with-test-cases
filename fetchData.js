//fetchData.js
const axios = require('axios');

async function fetchData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
}

module.exports = {
    fetchData
}