const Generator = require('yeoman-generator')

module.exports = class extends Generator{
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'version',
        message: 'Choose a version of Vue.js that you want to start the project with (Use arrow keys)',
        default: '3.x'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ])
    .then(answers => {
      this.answers = answers
    })
  }

  writing () {
    console.log('答案==', this.answers)
    const { version } = this.answers
    let templates = []
    if (version.includes('3')) {
      templates = [
        'vue3/babel.config.js',
        'vue3/package.json',
        'vue3/README.md',
        'vue3/public/favicon.ico',
        'vue3/public/index.html',
        'vue3/src/App.vue',
        'vue3/src/main.ts',
        'vue3/src/assets/logo.png',
        'vue3/src/components/HelloWorld.vue',
      ]
    } else {
      templates = [
        'vue2/babel.config.js',
        'vue2/package.json',
        'vue2/README.md',
        'vue2/public/favicon.ico',
        'vue2/public/index.html',
        'vue2/src/App.vue',
        'vue2/src/main.js',
        'vue2/src/assets/logo.png',
        'vue2/src/components/HelloWorld.vue',
      ]
    }
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item.split(version.includes('3') ? 'vue3/' : 'vue2/')[1]),
        this.answers
      ) 
    })
  }
}