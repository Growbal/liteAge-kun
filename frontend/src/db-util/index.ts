import * as axios from "axios";

const host = "http://localhost:3000";
const headers = {
  "Content-Type": "application/json",
};

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
  questioId: number,
  waypointStatus: number,
  score: number
) {
  const data = {
    user_scores: {
      question_id: questioId,
      waypoint_status: waypointStatus,
      score: score,
    },
  };

  axios
    .post(host + "/api/users/" + userId + "/create_score", data, {
      headers: headers,
    })
    .then(function (response) {
      if (response.status == 200) {
        console.log("OK");
      } else {
        console.log("NG");
      }
    });
}

export function getTotalScore(userId: number) {
  axios
    .get(host + "/api/users/" + userId + "/total_score")
    .then(function (response) {
      if (response.status == 200) {
        console.log(response.data.total_score);
      } else {
        console.log("だめです");
      }
    });
}
