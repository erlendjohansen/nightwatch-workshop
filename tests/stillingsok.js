module.exports = {
    'Søk etter stilling': function(browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('#search-form-fritekst-input')
            .setValue('#search-form-fritekst-input', 'Butikkmedarbeider' + browser.Keys.ENTER)
            .expect.element('.SearchResults').text.to.contain('Butikkmedarbeider');
    },

    'Åpne færste treff': function(browser) {
        browser
            .click('.SearchResultItem__link')
            .waitForElementVisible('.EmploymentDetails')
            .expect.element('.EmploymentDetails').text.to.contain('Stillingstittel:\nButikkmedarbeider')
    },

    After(browser) {
        browser.end();
    }
};
