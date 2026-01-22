import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierConfig,
  {
    // Ignore built files and node_modules
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
        MutationObserver: 'readonly',
        Element: 'readonly',
        SVGElement: 'readonly',
        MathMLElement: 'readonly',
        self: 'readonly',
        history: 'readonly',
        location: 'readonly',
        // Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    rules: {
      // Disable conflicting indent rules
      'indent': 'off',
      'vue/script-indent': 'off',
      // Keep only HTML indent rule
      'vue/html-indent': ['error', 4],
      // Other rules
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
      'no-cond-assign': 'warn',
      'no-prototype-builtins': 'warn',
      'no-setter-return': 'warn',
      'no-useless-escape': 'warn'
    }
  }
];
