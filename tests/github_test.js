Feature('Github tests');

Scenario('Login', (I, config, loginPage, dashboardPage) => {
    I.amOnPage(loginPage.path)
    I.waitForElement(loginPage.labels.signIn)
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.labels.exploreGithub)
});

Scenario('Logout', (I, config, loginPage, dashboardPage, homePage) => {
    I.amOnPage(loginPage.path)
    I.waitForElement(loginPage.labels.signIn)
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.labels.exploreGithub)
    I.click(dashboardPage.avatar)
    I.click(dashboardPage.avatarMenu.signOut)
    I.waitForElement(homePage.labels.signUpForGithub)
});

Scenario('Update profile bio', (I, config, helpers, loginPage, dashboardPage, profilePage) => {
    I.amOnPage(loginPage.path)
    I.waitForElement(loginPage.labels.signIn)
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.labels.exploreGithub)
    I.click(dashboardPage.avatar)
    I.click(dashboardPage.avatarMenu.yourProfile)
    I.waitForElement(profilePage.buttons.editBio)
    I.click(profilePage.buttons.editBio)
    var randomBio = helpers.generateRandomString()
    I.fillField(profilePage.fields.bio, randomBio)
    I.click(profilePage.buttons.saveBio)
    I.waitForElement(profilePage.buttons.editBio)
});

Scenario('Issues section', (I, config, loginPage, dashboardPage, issuesPage) => {
    I.amOnPage(loginPage.path)
    I.waitForElement(loginPage.labels.signIn)
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.labels.exploreGithub)
    I.amOnPage(issuesPage.path)
    I.waitForElement(issuesPage.filters.created)
});

Scenario('Marketplace section', (I, config, loginPage, dashboardPage, marketplacePage) => {
    I.amOnPage(loginPage.path)
    I.waitForElement(loginPage.labels.signIn)
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.labels.exploreGithub)
    I.amOnPage(marketplacePage.path)
    I.waitForElement(marketplacePage.labels.main)
});