/* eslint-disable no-unreachable */
/**
 * 根据命令行运行参数，修改/config.js 里面的项目配置信息，
 */

const fs = require('fs');

// 源文件
const sourceFiles = {
  prefix: '/config/env/',
  dev: 'dev.json',
  tsl: 'tsl.json',
  prod: 'prod.json'
};
// 目标文件
const targetFiles = [
  {
    prefix: '/config/',
    filename: 'index.js'
  }
];
const preText = 'module.exports = ';
// 获取命令行参数
const cliArgs = process.argv.splice(2);
const env = cliArgs[0].replace(' ', '').replace('--', '');
// 根据不同环境选择不同的源文件
const sourceFile = sourceFiles[env];

// 根据不同环境处理数据
fs.readFile(__dirname + sourceFiles.prefix + sourceFile, (err, data) => {
  if (err) {
    throw new Error(`Error occurs when reading file ${sourceFile}.\nError detail: ${err}`);
    process.exit(1);
  }

  // 获取源文件中的内容
  const targetConfig = JSON.parse(data);
  targetConfig.envVersion = 'asdad';
  console.log(targetConfig);
  // 将获取的内容写入到目标文件中
  targetFiles.forEach((item, _index) => {
    let result = null;
    if (item.filename === 'index.js') {
      result = preText + JSON.stringify(targetConfig, null, 2);
    }
    console.log(result);

    // 写入文件(这里只做简单的强制替换整个文件的内容)
    fs.writeFile(__dirname + item.prefix + item.filename, result, 'utf8', (err) => {
      if (err) {
        throw new Error(`error occurs when reading file ${sourceFile}. Error detail: ${err}`);
        process.exit(1);
      }
    });
  });
});
