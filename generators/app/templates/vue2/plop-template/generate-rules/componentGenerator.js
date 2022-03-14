//  Plop 入口文件 需要导出一个函数
// 此函数接收一个 plop 对象，用于创建生成器任务

module.exports = {
  // 指定一个生成器
  // 第一个参数是指定生成器名称
  // 第二个参数是用来定义生成的具体可选项
  description: 'create a component',
  // 定义终端的询问方式
  prompts: [
    {
      type: 'input',
      name: 'name', // 作为接收用户输入结果的键
      message: 'component name',
      default: 'MyComponent'
    }
  ],
  // 定义生成器在收集完用户的回答后需要进行的任务
  actions: function (answer) {
    const actions = []
    actions.push(
      {
        type: 'add', // 代表添加文件
        path: 'src/components/{{name}}/{{name}}.vue', // 这里的name就是上面定义的键
        templateFile: 'plop-template/templates/component.hbs'
      }
    )
    return actions
  }
}

// module.exports = {
//     description: 'generate a controller', //描述这个generate的作用
//     prompts: [{
//         type: 'input', // 问题的类型
//         name: 'pathName', // 问题对应得到答案的变量名，可以在acitons中使用该变量
//         message: '文件名称', // 在命令行中的问题
//         validate: 'pathName'
//     }],
//     actions: (data) => {// 这里可以通过data获取输入的pathname
//         let name = data.pathName.split('/');
//         name = name[name.length - 1];
//         name[0] = name[0].toLocaleUpperCase();
//         const actions = [
//             {
//                 type: 'add', // 操作类型 添加文件
//                 path: `app/controller/${data.pathName}.ts`, //添加的文件的路径
//                 templateFile: 'dev-scripts/plop-templates/router/index.hbs', //模版文件的路径
//                 data: {
//                     name
//                 }
//             }
//         ];

//         return actions;
//     }
// };
