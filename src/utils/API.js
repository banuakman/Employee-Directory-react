import axios from "axios";

const BASEURL =
  "https://randomuser.me/api/?results=50&inc=picture,name,email,location,dob";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  data: function () {
    return axios.get(BASEURL);
  },
};
