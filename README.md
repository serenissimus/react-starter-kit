# react-template

Start next react project in seconds.

## Getting started

For easy way to get started is to clone the repository.

```shell
# clone repository
git clone https://github.com/serenissimus/react-template.git

# change directory
cd react-template/

# setup project
yarn

# for runtime development
yarn start

# make bundle
yarn build
```

## Running

For running some command from available list use `yarn`.

```shell
yarn <command>
```

Available command list.

| Command   | Description                             |
| -         | -                                       |
| start     | Run webpack dev server.                 |
| test      | Run unit tests.                         |
| flow      | Run project types check.                |
| lint      | Run project linter.                     |
| lint:fix  | Run project linter with `try-fix` mode. |
| build     | Build project with webpack.             |
| clean     | Clean output directory(dist).           |


## Project structure


```bash
├── .vscode/                     # Settings directory for VS Code
├── dist/                        # Compiled output directory
├── flow/                        # Flow modules definition directory
│   ├── CSSModule.js.flow        # CSS module flow definition file (for `css`, `less` files)
│   └── Asset.js.flow            # Asset flow definition file (for images and fonts)
├── node_modules/                # 3rd-party libraries and utilities
├── src/                         # Application source code directory
│   ├── components/              # React components directory
│   │   └── App.jsx              # Main app React component
│   ├── assets/                  # Directory with static assets (images, fonts and etc.)
│   │   └── alive.jpg            # Image file for example
│   ├── styles/                  # Directory with styles
│   │   ├── App.less             # App component less style file
│   │   └── MaterialColors.less  # Less style file with material colors
│   ├── index.html               # HTML template file
│   └── index.jsx                # Client-side entry point, e.g. ReactDOM.render(<App />, container)
├── test/                        # Unit tests directory
│   └── App.spec.jsx             # App component unit test
├── .babelrc.js                  # Configuration file for Babel
├── .commitlintrc.js             # Configuration file for Commit Lint
├── .editorconfig                # Editor configuration file
├── .eslintrc.js                 # Configuration file for ESLint
├── .flowconfig                  # Configuration file for FlowType
├── .gitignore                   # Git ignore files rules
├── .huskyrc.js                  # Configuration file for Husky
├── .lintstagedrc.js             # Configuration file for `lint-staged`
├── .prettierrc.js               # Configuration file for Prettier
├── jest.config.js               # Configuration file for Jest
├── webpack.config.js            # Configuration file for Webpack
└── package.json                 # The list of project dependencies + NPM scripts
```


## Dependencies


Dependencies are managed through `package.json`.


# Pre-commit scripts


There are few checkers on commit implemented through `husky`:

* Linter for JS files (eslint)
* Unit tests (jest)
* Commit message linter (commitlint)


Rules for commit message you can found [here](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)
