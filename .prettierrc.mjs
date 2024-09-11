/** @type{import('prettier').Config} */

const prettierConfig = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  singleQuote: true,
  htmlWhitespaceSensitivity: 'css',
  quoteProps: 'preserve',
  proseWrap: 'preserve',
  singleAttributePerLine: false,
  embeddedLanguageFormatting: 'auto',
}

export default prettierConfig;
