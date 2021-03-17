import axios from "axios";

const BASEURL =
  "https://randomuser.me/api/?results=50&inc=picture,name,email,location,dob";
function getPeople() {
  return axios.get(BASEURL);
}
export default getPeople;
