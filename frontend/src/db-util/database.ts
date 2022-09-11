import * as api from "./index";

export class Database {
  userId: number;
  questionId: number;
  waypointList: number[];

  constructor(userId: number, questionId: number) {
    this.userId = userId;
    this.questionId = questionId;
    this.waypointList = {};
  }

  postWaypointScore(waypointStatus: number, score: number) {
    api.postScore(this.userId, this.questionId, waypointStatus, score);
  }

  pushWaypoint(id: number, score: number) {
    this.waypointList[id] = score;
  }

  postWaipointScore() {
    const keys = Object.keys(this.waypointList)
      .map((x) => parseInt(x))
      .sort();
    console.log(this.waypointList);
    console.log(this.userId);
    keys.forEach((key) => {
      api.postScore(this.userId, this.questionId, key, this.waypointList[key]);
    });
  }
}
