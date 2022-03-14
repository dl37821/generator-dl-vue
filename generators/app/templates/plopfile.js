const pageGenerator = require('./plop-template/generate-rules/pageGenerator')
const componentGenerator = require('./plop-template/generate-rules/componentGenerator')

module.exports = function (plop) {
    plop.setGenerator('page', pageGenerator)
    plop.setGenerator('component', componentGenerator)
}
