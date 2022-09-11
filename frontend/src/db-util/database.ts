import * as api from "./index";

export class Database {
  userId: number;
  questionId: number;

  constructor(userId: number, questionId: number) {
    this.userId = userId;
    this.questionId = questionId;
  }

  postWaypointScore(waypointStatus: number, score: number) {
    api.postScore(this.userId, this.questionId, waypointStatus, score);
  }
}
