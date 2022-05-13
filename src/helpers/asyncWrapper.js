const wrapper = async function(_promise) {
    return new Promise((resolve) => {
        _promise
        .then((value) => {
            resolve([null, value]);
        })
        .catch((err) => {
            resolve([err, null]);
        });
    })
};

export { wrapper };