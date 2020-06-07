# Vue in Atomic Design

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) ![npm](https://img.shields.io/npm/v/npm) ![platform](https://img.shields.io/powershellgallery/p/DNS.1.1.1.1) 

## Atomic Design
![atomic-design](https://user-images.githubusercontent.com/54832071/81474000-a5c47f00-923d-11ea-8ef7-ff089ecf49e2.png)


### Usage

```sh
> git clone git@github.com:spilebull/corrida.git
> cd corrida/app
> yarn
> yarn serve
```

### Usage with Docker

```sh
> git clone git@github.com:spilebull/corrida.git
> cd corrida
> docker-compose up -d
> docker-compose exec app sh

----- in Continar -----

# cd app
# yarn
# yarn serve
```

### Directory structure
```tree
├── Dockerfile
├── .vscode
│   ├── settings.json ---> Visual studio code Setting File.
├── app
│   ├── .eslintignore
│   ├── .eslintrc.js
│   ├── .prettierignore
│   ├── .prettierrc.js
│   ├── babel.config.js
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   │   ├── App.vue
│   │   ├── assets
│   │   │   ├── font
│   │   │   ├── image
│   │   │   │   └── logos
│   │   │   │       └── logo.svg
│   │   │   └── scss
│   │   ├── components
│   │   │   ├── atoms
│   │   │   ├── molecules
│   │   │   ├── organisms
│   │   │   │   └── BaseHeader.vue
│   │   │   ├── pages
│   │   │   │   ├── About.vue
│   │   │   │   ├── IndexPage.vue
│   │   │   │   └── SamplePage.vue
│   │   │   └── templates
│   │   ├── main.ts
│   │   ├── plugins
│   │   │   └── vuetify.ts
│   │   ├── router
│   │   │   └── index.ts
│   │   ├── shims-tsx.d.ts
│   │   ├── shims-vue.d.ts
│   │   └── store
│   │       └── index.ts
│   ├── tests
│   │   └── unit
│   │       └── example.spec.ts
│   ├── tsconfig.json
│   ├── vue.config.js
│   └── yarn.lock
├── docker-compose.yml
└── docs
    └── SAMPLE.md
```

### Visual studio code Setting
![vscode](https://user-images.githubusercontent.com/54832071/81412727-3ee09080-917f-11ea-9f29-d9a1fe5cf557.png)
```json
{
  "editor.fontSize": 14,
  "editor.acceptSuggestionOnCommitCharacter": true,
  "editor.formatOnSave": false,
  "editor.cursorBlinking": "phase",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.fixAll": true
  },
  "editor.dragAndDrop": false,
  "editor.find.autoFindInSelection": "always",
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.lineNumbers": "interval",
  "editor.minimap.maxColumn": 40,
  "editor.minimap.showSlider": "always",
  "editor.renderControlCharacters": true,
  "editor.renderLineHighlight": "all",
  "editor.renderWhitespace": "boundary",
  "editor.showFoldingControls": "always",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "files.autoGuessEncoding": true,
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "[git-commit]": {
    "editor.rulers": [
      100
    ]
  },
  "[javascript]": {
    "editor.tabSize": 2
  },
  "[javascriptreact]": {
    "editor.tabSize": 2
  },
  "[json]": {
    "editor.tabSize": 2
  },
  "[markdown]": {
    "editor.wordWrap": "off",
    "files.trimTrailingWhitespace": false
  },
  "[typescript]": {
    "editor.tabSize": 2
  },
  "[typescriptreact]": {
    "editor.tabSize": 2
  }
}
```

### Sample Pages
- [TOP](http://localhost:8080/) `http://localhost:8080/`
- [SAMPLE](http://localhost:8080/sample) `http://localhost:8080/sample`
- [ABOUT](http://localhost:8080/about) `http://localhost:8080/about`
