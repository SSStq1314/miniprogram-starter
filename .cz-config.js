// .cz-config.js
module.exports = {
  types: [
    { value: ':sparkles: feat', name: '🚀feat: 一项新功能、新需求' },
    { value: ':bug: fix', name: '🐛 fix: 修复一个Bug/缺陷' },
    { value: ':memo: docs', name: '📝 docs: 文档变更修改' },
    { value: ':lipstick: style', name: '💄 style: UI样式调整优化' },
    { value: ':recycle: refactor', name: '♻️ refactor: 代码重构，注意和feat、fix区分开' },
    { value: ':zap: perf', name: '⚡️ perf: 代码优化,改善性能' },
    { value: ':white_check_mark: test', name: '✅ test: 测试用例新增、修改' },
    { value: ':rocket: chore', name: '✨ chore: 构建/工程依赖/工具等修改' },
    { value: ':rewind: revert', name: ':rewind: revert: 代码回退，恢复上一次提交' },
    { value: ':tada: init', name: '🎉 init: 项目初始化' },
    { value: ':construction_worker: ci', name: '👷 对CI配置文件和脚本的更改' },
    { value: ':package: build', name: '📦️ build: 项目构建或外部依赖变更' },
    { value: ':construction: wip', name: '🚧 wip: 进行中的开发任务' }
  ],
  scopes: [
    { name: 'component', description: '组件相关' },
    { name: 'config', description: '配置相关' },
    { name: 'docs', description: '文档相关' },
    { name: 'utils', description: 'utils相关' },
    { name: 'styles', description: '样式相关' },
    { name: 'custom', description: '以上都不是？我要自定义' }
  ],
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',
  // it needs to match the value for field type. Eg.: 'fix'
  // scopeOverrides: {
  //   feat: [
  //     { name: 'element' }
  //   ],
  //   fix: [
  //     { name: 'element' },
  //     { name: 'style' },
  //   ]
  // },
  // override the messages, defaults are as follows
  messages: {
    type: '确保本次提交遵循本项目的提交规范，\n请选择提交类型(必填):',
    scope: '请选择一个文件修改范围选项 (可选):',
    customScope: '请输入自定义的文件修改范围 (可选):',
    subject: '请输入本次提交的简要描述(必填):\n',
    body: '请输入详细描述，使用"|"换行(可选):\n',
    breaking: '列出任务非兼容性说明 (可选):\n',
    footer: '请输入要关闭的需求编号或缺陷编号，例如：#12, #34(可选):\n',
    confirmCommit: '确定提交此说明吗？'
  },
  // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // 限制 subject 长度
  subjectLimit: 72
  // 跳过问题 skip any questions you want
  // skipQuestions: ['body', 'footer'],
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
