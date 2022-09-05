import * as axios from "axios";

const host = "http://localhost:3000";

export function getScore() {
  axios.get(host + "/api/tests").then(function (response) {
    if (response.status == 200) {
      console.log("OK");
    } else {
      console.log("NG");
    }
  });
}
