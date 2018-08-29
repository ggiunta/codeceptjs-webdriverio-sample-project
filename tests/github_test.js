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