const I = actor();

module.exports = {
    generateRandomString() {
        return Math.random().toString(36).substring(7)
    }
}