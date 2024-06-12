import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('lereu.db');

const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT NOT NULL, color TEXT NOT NULL);',
                [],
                () => {},
                (_, err) => {
                    reject(err);
                }
            );
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, amount REAL NOT NULL, date TEXT, categoryId INTEGER, FOREIGN KEY(categoryId) REFERENCES category(id));',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

const reset = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE IF EXISTS expense;',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
            tx.executeSql(
                'DROP TABLE IF EXISTS category;',
                [],
                () => {},
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

const getTableFields = (tableName) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `PRAGMA table_info(${tableName})`,
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


export { db, init, reset, getTableFields };
