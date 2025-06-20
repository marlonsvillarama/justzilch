const randomValue = () => {
    const MIN = 250;
    const MAX = 400;

    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

const getTransactionData = () => {
    let output = [];

    for (let i = 1; i <= 31; i++) {
        let dt = new Date(2024, 6, i);
        output.push({
            dt: `${dt.getFullYear()}${(dt.getMonth() + 1).toString().padStart(2, '0')}${dt.getDate().toString().padStart(2, '0')}`,
            value: randomValue()
        });
    }

    return output;
};

export const createTestData = () => {
    return {
        get transactions () {
            return getTransactionData()
        }
    };
}