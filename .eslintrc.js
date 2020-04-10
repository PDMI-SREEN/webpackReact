module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      'standard',
      'plugin:react/recommended' // 添加react插件推荐规则
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'react',
      'babel',
      "react-hooks"
    ],
    rules: {
      "react/jsx-uses-react": 1, // 处理组件中React未被使用
      "react/jsx-uses-vars": 1, // 使用组件App未被使用
      "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
      "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
    },
    settings: {
      react: {
        // 修复警告：React version not specified in eslint-plugin-react settings
        version: require('./package.json').devDependencies.react
      }
    }
  }