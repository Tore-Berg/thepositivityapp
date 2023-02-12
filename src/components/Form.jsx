import useAxios from "../hooks/useAxios";
import axios from "../apis/recievers";

const Form = (response) => {
  const [reciever, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
      //data: {}
    },
  });
  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <h1>Loading recievers...</h1>;
  }
  return console.log(response.data);
};

export default Form;
