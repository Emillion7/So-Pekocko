module.exports = {
    isGoodPassword: function (input) {
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return regex.test(input);
    }
}