import { db, getTableFields } from '../database';

const getCategories = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM category',
                [],
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

export { getCategories };
