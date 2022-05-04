import axios from "axios";

const axiosBaseURL = "https://fakestoreapi.com"
export default axios.create({
    baseURL:axiosBaseURL
});

