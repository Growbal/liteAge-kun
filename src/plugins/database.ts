// import type { RunResult, sqlite3 as Sqlite3 } from "sqlite3";

import type { Database } from "sqlite3";

(async () => {
  try {
    const db = new Database("db.sqlite3");

    db.on("trace", (sql) => {
      console.log(sql);
    });

    await new Promise((resolve, reject) => {
      db.all(
        `INSERT INTO user_table VALUES(?, ?)`,
        [0, "TEST"],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    const rows: Array<any> = await new Promise((resolve, reject) => {
      db.all(`SELECT * FROM user_table`, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    rows.forEach((v: any) => console.log(v));

    await new Promise<void>((resolve, reject) => {
      db.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
})();

export function start() {
  console.log("start");
}
