Feature('Github tests');

Scenario('Login', (I, config, loginPage, dashboardPage) => {
    I.amOnPage(loginPage.path);
    I.waitForElement(loginPage.signInlabel);
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.exploreGithubLabel)
});

Scenario('Logout', (I, config, loginPage, dashboardPage, homePage) => {
    I.amOnPage(loginPage.path);
    I.waitForElement(loginPage.signInlabel);
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.exploreGithubLabel)
    I.click(dashboardPage.avatar)
    I.click(dashboardPage.avatarMenu.signOut)
    I.waitForElement(homePage.signUpForGithubLabel);
});

Scenario('Update profile', (I, config, loginPage, dashboardPage, profilePage) => {
    I.amOnPage(loginPage.path);
    I.waitForElement(loginPage.signInlabel);
    loginPage.submitCredentials(config.validUser.user, config.validUser.password)
    I.waitForElement(dashboardPage.exploreGithubLabel)
    I.click(dashboardPage.avatar)
    I.click(dashboardPage.avatarMenu.yourProfile)
    I.waitForElement(profilePage.buttons.editBio)
    I.click(profilePage.buttons.editBio)
    var randomBio = Math.random().toString(36).substring(7)
    I.fillField(profilePage.fields.bio, randomBio)
    I.click(profilePage.buttons.saveBio)
    I.waitForElement(profilePage.buttons.editBio)
});