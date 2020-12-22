import axios from "axios";
const ENDPOINT = "https://jsonplaceholder.typicode.com";
async function getData(Number) {
    //Number = userid
    const { data: users } = await axios.get(`${ENDPOINT}/users/${Number}`);
    //console.log(users);
    const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${Number}`);
    //console.log(posts);
    
    return(console.log({users,posts}));
}

export default getData;
//getData(1);