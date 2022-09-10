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
      if (response.data.success) {
        console.log("OK");
      } else {
        console.log("postScore エラー: " + response.data.message);
      }
    })
    .catch(function (error) {
      console.dir(error);
    });
}

export async function getWaypointScore2(
  userId: number,
  questionId: number,
  waypointStatus: number
) {
  try {
    const res = await axios.get(
      host + "/api/users/" + userId + "/waypoint_score",
      {
        params: {
          question_id: questionId,
          waypoint_status: waypointStatus,
        },
      }
    );
    return res.data.waypoint_score;
  } catch (err) {
    console.log(err);
    return;
  }
}
export function getWaypointScore(
  userId: number,
  questionId: number,
  waypointStatus: number
) {
  return new Promise((resolve, _reject) => {
    axios
      .get(host + "/api/users/" + userId + "/waypoint_score", {
        params: {
          question_id: questionId,
          waypoint_status: waypointStatus,
        },
      })
      .then(function (response) {
        if (response.data.success) {
          resolve(response.data.waypoint_score);
        } else {
          console.log("getWaypointScore エラー: " + response.data.message);
        }
      })
      .catch(function (error) {
        console.dir(error);
      });
  });
}

export function getTotalScore(userId: number) {
  return new Promise((resolve, _reject) => {
    axios
      .get(host + "/api/users/" + userId + "/total_score")
      .then(function (response) {
        if (response.data.success) {
          resolve(response.data.total_score);
        } else {
          console.log("getTotalScore エラー: " + response.data.message);
        }
      })
      .catch(function (error) {
        console.dir(error);
      });
  });
}
