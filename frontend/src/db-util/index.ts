import * as axios from "axios";
import type { UserAuthentication } from "@/types/user_authentication";
import {
  getAuthDataFromStorage,
  removeAuthDataFromStorage,
  setAuthDataFromResponse,
} from "@/db-util/auth-data";

const host = "http://localhost:3000";
const headers = {
  "Content-Type": "application/json",
};

export async function getUsers() {
  try {
    const response = await axios.get(host + "/api/users/users_info");

    if (response.data.success) {
      return response.data.users;
    } else {
      console.log("getUsers エラー: " + response.data.message);
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getUser(userId: number) {
  try {
    const response = await axios.get(
      host + "/api/users/" + userId + "/user_info"
    );

    if (response.data.success) {
      return response.data.user;
    } else {
      console.log("getUser エラー: " + response.data.message);
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function refleshScore(userId: number) {
  try {
    const response = await axios.delete(
      host + "/api/users/" + userId + "/destroy_score",
      { headers: headers }
    );
    if (response.data.success) {
      console.log("refleshScore 成功");
    } else {
      console.log("refleshScore エラー: " + response.data.message);
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
      return 0;
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
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function signup(name: string, email: string, password: string) {
  const data = {
    users: {
      name: name,
    },
    user_authentications: {
      email: email,
      password: password,
    },
  };

  try {
    const response = await axios.post<UserAuthentication>(
      host + "/api/users",
      data,
      {
        headers: headers,
      }
    );

    if (response.data.success) {
      console.log("signup 成功");
      setAuthDataFromResponse(response.headers);
    } else {
      console.log("signup エラー: ");
    }
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function login(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post<UserAuthentication>(
      host + "/auth/sign_in",
      data,
      {
        headers: headers,
      }
    );

    if (response.status == 200) {
      console.log("login 成功");
      setAuthDataFromResponse(response.headers);
    } else {
      console.log("login エラー: ");
    }
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  try {
    const response = await axios.delete(host + "/auth/sign_out", {
      headers: getAuthDataFromStorage(),
    });

    if (response.status == 200) {
      console.log("logout 成功");
      removeAuthDataFromStorage();
      return response;
    } else {
      console.log("logout エラー: ");
    }
  } catch (err) {
    console.log(err);
  }
}
