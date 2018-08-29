Feature('Github tests');

Scenario('Login', (I, loginPage, dashboardPage) => {
    I.amOnPage(loginPage.path);
    I.waitForElement(loginPage.signInlabel);
    loginPage.submitCredentials('ggiunta', 'D4rkM4tt3r')
    I.waitForElement(dashboardPage.exploreGithubLabel)
});

Scenario('Logout', (I, loginPage, dashboardPage, homePage) => {
    I.amOnPage(loginPage.path);
    I.waitForElement(loginPage.signInlabel);
    loginPage.submitCredentials('ggiunta', 'D4rkM4tt3r')
    I.waitForElement(dashboardPage.exploreGithubLabel)
    I.click(dashboardPage.avatar)
    I.click(dashboardPage.avatarMenu.signOut)
    I.waitForElement(homePage.signUpForGithubLabel);
});