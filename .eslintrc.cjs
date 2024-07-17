module.exports = {
	env: {
	  browser: true,
	  commonjs: true,
	  es2021: true,
	  node: true,
	},
	plugins: ["prettier"],
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	parserOptions: {
	  ecmaVersion: 13,
	},
	rules: {
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': 'off'
	  semi: ["error", "always"],
	  quotes: ["error", "double"],
	  "no-unused-vars": ["off"],
	  "prettier/prettier": [
		"error",
		{
		  endOfLine: "auto",
		},
	  ],
	},
  };