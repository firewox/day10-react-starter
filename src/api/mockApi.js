import axios from "axios";
import {message} from "antd";

const api = axios.create({
    // baseURL: "https://68c7ac595d8d9f514732862a.mockapi.io/",
    baseURL: "http://localhost:8080/",
    headers: {"Content-Type": "application/json"},
    timeout: 10_000,
})
api.interceptors.response.use(
    (response) => {
        // handle response
        return response;
    },
    (error) => {
        // handle response error
        const {status, data} = error.response;
        console.log(status, data)
        if (status === 404) {
            console.log(error.response)
            // do something
            // alert(error.message)
            message.error(error.response.data, 1000);//.then(r => console.log(r));
        }
        return Promise.reject(error);
    }
);

export {api}