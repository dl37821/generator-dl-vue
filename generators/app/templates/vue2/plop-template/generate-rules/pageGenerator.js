//  Plop 入口文件 需要导出一个函数
// 此函数接收一个 plop 对象，用于创建生成器任务
module.exports = {
  // 指定一个生成器
  // 第一个参数是指定生成器名称
  // 第二个参数是用来定义生成的具体可选项
  description: 'create a page',
  // 定义终端的询问方式
  prompts: [
    {
      type: 'input',
      name: 'name', // 作为接收用户输入结果的键
      message: 'page name',
      default: 'MyPage'
    },
    {
      type: 'comfirm',
      name: 'wantRouter',
      message: 'Do you want to generate router ? ',
      default: 'Y'
    }
  ],
  // 定义生成器在收集完用户的回答后需要进行的任务
  actions: function (answer) {
    const actions = []
    actions.push(
      {
        type: 'add', // 代表添加文件
        path: 'src/views/{{name}}/{{name}}.vue', // 这里的name就是上面定义的键
        templateFile: 'plop-template/templates/page.hbs'
      }
    )
    if (answer.wantRouter.toLowerCase() === 'y') {
      actions.push({
        type: 'add',
        path: 'src/router/routers/{{camelCase name}}Router.js',
        templateFile: 'plop-template/templates/router.js.hbs'
      })
      // 修改已存在文件的内容
      actions.push({
        type: 'modify',
        path: 'src/router/index.js',
        pattern: /(\/\/ append import)/gi,
        // camelCase 用来将输入的名称转化为驼峰
        template: "import {{camelCase name}}Router from './routers/{{camelCase name}}Router'\r\n$1"
      })
      actions.push({
        type: 'modify',
        path: 'src/router/index.js',
        pattern: /(\/\/ append new router)/gi,
        // camelCase 用来将输入的名称转化为驼峰
        // $1 用于在结束的时候添加匹配的占位，用于下次使用
        template: ',\r\n\  ...{{camelCase name}}Router$1'
      })
    }
    return actions
  }
}
