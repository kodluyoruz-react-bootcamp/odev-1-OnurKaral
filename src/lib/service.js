import axios from "axios";
const ENDPOINT = "https://jsonplaceholder.typicode.com";
async function getData(Number) {
    const { data: users } = await axios.get(`${ENDPOINT}/users/${Number}`);
    console.log(users);
    const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${Number}`);
    console.log(posts);
    return `${users}${posts}`

}
module.exports={
    getData
};
//getData(1);