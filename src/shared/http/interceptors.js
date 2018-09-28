export default {
    logging: {
        request(request) {
            console.log(`${request.method.toUpperCase()} to ${request.url}`);
            return Promise.resolve(request);
        },
        requestError(error) {
            return Promise.reject(error);
        }
    },
    // ... more and more
}
