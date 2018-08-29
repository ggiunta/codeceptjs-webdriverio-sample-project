const I = actor();

module.exports = {
    path: '/login',
    fields: {
        user: '#login_field',
        password: '#password'
    },
    buttons: {
        submit: 'commit'
    },
    labels: {
        signIn: '//h1[text()="Sign in to GitHub"]'
    },

    submitCredentials(user, password) {
        I.fillField(this.fields.user, user)
        I.fillField(this.fields.password, password)
        I.click(this.buttons.submit)
    }
}