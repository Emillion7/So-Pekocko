module.exports = {
    isGoodPassword: function (input) {
        let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return regex.test(input);
    }
}