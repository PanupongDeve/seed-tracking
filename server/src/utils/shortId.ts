const shortid = require('shortid');

function generateShortId() {
    return shortid.generate()
}

export {
    generateShortId
}