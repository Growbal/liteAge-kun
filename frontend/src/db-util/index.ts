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

export function postScore(
  userId: number,
  questioNumber: number,
  score: number
) {
  axios
    .post(host + "/api/scores", {
      userId: userId,
      questioNumber: questioNumber,
      score: score,
    })
    .then(function (response) {
      if (response.status == 200) {
        console.log("OK");
      } else {
        console.log("NG");
      }
    });
}
