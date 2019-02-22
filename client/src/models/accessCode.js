
const json = require('./cancerObj');

const AccessCode = function () {
    this.json = json
};

AccessCode.prototype.quickAccess = function (code) {
    parsed = code.split('_');

    if (parsed.length != 2) {
        // Incorrect access code format
        return ({
            success: false,
            message: "Quick access code incorrect, please check and try again"
        })
    } else {
        // Filter the cancers
        let cancerFilter = json.filter((item) => {
            return item.id === parsed[0]
        })[0];

        let treatment = cancerFilter.treatments[parsed[1]];

        return ({
            success: true,
            cancer: cancerFilter,
            treatment: treatment
        });
    }
};

module.exports = AccessCode;

