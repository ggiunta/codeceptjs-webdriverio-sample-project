const I = actor();

module.exports = {
    buttons: {
        editBio: '//button[contains(text(), "Edit bio")]',
        saveBio: '//button[text()="Save"]'
    },
    fields: {
        bio: '//textarea[@aria-label="Add a bio"]'
    }
}