// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true, //使用require就不会报错了
    commonjs: true
  },
  //配置解析器
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  extends: 'eslint:recommended',
  //全局变量
  globals: {
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getApp: true,
    getCurrentPages: true
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      'error',
      'single' // backtick、double、single
    ],
    // 要求或禁止使用分号代替 ASI
    semi: ['error', 'always'],
    'no-console': [
      'off',
      {
        allow: ['log', 'warn', 'error', 'info'] // "allow" 是个字符串数组，包含允许使用的console 对象的方法
      }
    ],
    //禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

    // 禁止或强制在单行代码块中使用空格(禁用)
    'block-spacing': [1, 'never'],

    'no-cond-assign': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止空语句块
    'no-empty': 2,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': 0,

    //强制所有控制语句使用一致的括号风格
    curly: [2, 'all'],
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 0,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁用特定的全局变量
    'no-restricted-globals': 2,
    // 禁止 var 声明 与外层作用域的变量同名
    'no-shadow': 0,
    // 禁止覆盖受限制的标识符
    'no-shadow-restricted-names': 2,
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止将 undefined 作为标识符
    'no-undefined': 0,
    // 不允许在变量定义之前使用它们
    'no-use-before-define': 0,
    //////////////
    // 风格指南 //
    //////////////
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // 控制逗号前后的空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    // http://eslint.org/docs/rules/comma-style
    'comma-style': [2, 'last'],
    //"SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进水平
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'computed-property-spacing': [2, 'never'],
    // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了
    // e.g [0,"self"] 指定只能 var that = this. self不能指向其他任何值，this也不能赋值给self以外的其他值
    'consistent-this': [2, 'self', 'that', '_self', '_that', 'me', '_this'],
    // 强制使用命名的 function 表达式
    'func-names': 0,
    // 文件末尾强制换行
    'eol-last': 0,
    //要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': 2,
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'func-style': 0,
    // 强制回调函数最大嵌套深度 5层
    'max-nested-callbacks': [2, 5],
    // 禁止使用指定的标识符
    'id-blacklist': 0,
    // 强制标识符的最新和最大长度
    'id-length': 0,
    // 要求标识符匹配一个指定的正则表达式
    'id-match': 0,
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': 0,
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    'keyword-spacing': 2,
    // 强制最大行数
    'max-lines': 0,
    // 强制 function 定义中最多允许的参数数量
    'max-params': [1, 5],
    // 强制 function 块最多允许的的语句数量
    'max-statements': [1, 200],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': 0,
    // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // 要求调用无参构造函数时有圆括号
    'new-parens': 2,
    // 要求或禁止 var 声明语句后有一行空行
    'newline-after-var': 0,
    // 禁止使用 Array 构造函数
    'no-array-constructor': 2,
    // 禁用按位运算符
    'no-bitwise': 0,
    // 要求 return 语句之前有一空行
    'newline-before-return': 0,
    // 禁用 continue 语句
    'no-continue': 0,
    // 禁止在代码行后使用内联注释
    'no-inline-comments': 0,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 0,
    // 禁止混合使用不同的操作符
    'no-mixed-operators': 0,
    // 不允许多个空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ],
    // 不允许否定的表达式
    'no-negated-condition': 0,
    // 不允许使用嵌套的三元表达式
    'no-nested-ternary': 0,
    // 禁止使用 Object 的构造函数
    'no-new-object': 2,
    // 禁止使用一元操作符 ++ 和 --
    'no-plusplus': 0,
    // 禁止使用特定的语法
    'no-restricted-syntax': 0,
    // 禁止 function 标识符和括号之间出现空格
    'no-spaced-func': 2,
    // 不允许使用三元操作符
    'no-ternary': 0,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 禁止标识符中有悬空下划线_bar
    'no-underscore-dangle': 0,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 2,
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 要求或禁止在 var 声明周围换行
    'one-var-declaration-per-line': 0,
    // 要求或禁止在可能的情况下要求使用简化的赋值操作符
    'operator-assignment': 0,
    // 强制操作符使用一致的换行符
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    // 要求或禁止块内填充
    'padded-blocks': 0,
    // 要求对象字面量属性名称用引号括起来
    'quote-props': 0,
    // 要求使用 JSDoc 注释
    'require-jsdoc': 0,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    // "semi": [2, "always"],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': 2,
    // 要求同一个声明块中的变量按顺序排列
    'sort-vars': 0,
    // 强制在块之前使用一致的空格
    'space-before-blocks': [2, 'always'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
      }
    ],
    // 要求或禁止 Unicode BOM
    'unicode-bom': 2,
    // 要求正则表达式被括号括起来
    'wrap-regex': 0,
    //禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中
    'no-case-declarations': ['warn'],

    //////////////
    // ES6.相关 //
    //////////////
    // 每个模块只能使用一个import
    'no-duplicate-imports': 2,
    // 要求箭头函数体使用大括号
    'arrow-body-style': 2,
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 不允许箭头功能，在那里他们可以混淆的比较
    'no-confusing-arrow': 0,
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 2,
    // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-symbol': 2,
    // 允许指定模块加载时的进口
    'no-restricted-imports': 0,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 禁止不必要的计算性能键对象的文字
    'no-useless-computed-key': 0,
    // 要求使用 let 或 const 而不是 var
    'no-var': 1,
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': 0,
    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 0,
    // 要求在合适的地方使用 Reflect 方法
    'prefer-reflect': 0,
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 0,
    // 要求使用模板字面量而非字符串连接
    'prefer-template': 0,
    // Suggest using the rest parameters instead of arguments
    'prefer-rest-params': 0,
    // 要求generator 函数内有 yield
    'require-yield': 2,
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': 1,
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': 2,
    // 要求或禁止使用拖尾逗号
    'comma-dangle': 2,
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 0,
    // 强制一行的最大长度
    'max-len': [0, 200, { ignoreUrls: true }],
    // 禁止出现未使用过的变量
    'no-unused-vars': [
      0,
      {
        vars: 'all', // all 检测所有变量，包括全局环境中的变量。这是默认值。
        args: 'none' // none - 不检查参数。
      }
    ]
  }
};
