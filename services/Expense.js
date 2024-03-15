import { db } from '@database';
import { getCurrentMonth } from 'utils/DateUtil';
import { getCurrentYear } from 'utils/DateUtil';

const getExpensesForCurrentMonth = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM expense WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ?`,
        [getCurrentYear().toString(), getCurrentMonth().toString().padStart(2, '0')],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export {
  getExpensesForCurrentMonth
}