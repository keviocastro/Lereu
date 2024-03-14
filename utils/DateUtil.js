const getCurrentMonth = () => {
    const date = new Date();
    return `${date.getFullYear()}- ${date.getMonth() + 1}`;
}

export { getCurrentMonth };