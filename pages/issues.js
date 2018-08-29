
const I = actor();

module.exports = {
    path: '/issues',
    filters: {
        created: '//a[@aria-label="Issues created by you"]'
    }
}
