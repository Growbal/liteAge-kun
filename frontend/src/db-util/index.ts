import * as axios from "axios";

const host = "http://localhost:3000";
const headers = {
  "Content-Type": "application/json",
};

export async function destroyScore(userId: number) {
  try {
    const response = await axios.delete(
      host + "/api/users/" + userId + "/destroy_score",
      { headers: headers }
    );
    if (response.data.success) {
      console.log("destroyScore 成功");
    } else {
      console.log("destroyScore エラー: " + response.data.message);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function postScore(
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

  try {
    const response = await axios.post(
      host + "/api/users/" + userId + "/create_score",
      data,
      {
        headers: headers,
      }
    );
    if (response.data.success) {
      console.log("postScore 成功");
    } else {
      console.log("postScore エラー: " + response.data.message);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getWaypointScore(
  userId: number,
  questionId: number,
  waypointStatus: number
) {
  try {
    const response = await axios.get(
      host + "/api/users/" + userId + "/waypoint_score",
      {
        params: {
          question_id: questionId,
          waypoint_status: waypointStatus,
        },
      }
    );

    if (response.data.success) {
      return response.data.waypoint_score;
    } else {
      console.log("getWaypointScore エラー: " + response.data.message);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getTotalScore(userId: number) {
  try {
    const response = await axios.get(
      host + "/api/users/" + userId + "/total_score",
      {
        params: {
          user_id: userId,
        },
      }
    );

    if (response.data.success) {
      return response.data.total_score;
    } else {
      console.log("getTotalScore エラー: " + response.data.message);
    }
  } catch (err) {
    console.log(err);
  }
}
