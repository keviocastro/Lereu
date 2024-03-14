const findSpendByCategory = async (month) => {
    const data = await global.storage.load({ key: 'spend-by-month', id: month });
    return data;
};

/**
 * 
 * @param {string} month - The string month in the format 'YYYY-MM' 
 * @param {*} data - the spend data
 * @param {number} data.amount - The amount spent
 * @param {string} data.category - The category of the spend
 * @returns {Promise<void>}
 */
const addSpendByCategory = async (month, data) => {
    await global.storage.save({ key: 'spend-by-month', id: month, data });
};

export {
    findSpendByCategory
}