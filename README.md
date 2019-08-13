# React elements of Trust

UI library of react components for *Platform Of Trust*.


## Install

```bash
npm install --save https://github.com/PlatformOfTrust/react-elements-of-trust react-bootstrap react   
```

### Usage

Import scss

```scss
@import '~bootstrap/scss/bootstrap.scss';
@import '~react-elements-of-trust/dist/scss/main.scss';
```

Use React components:

```js
import {Button} from 'react-elements-of-trust';
import {Tabs} from 'react-elements-of-trust';
import {Tab} from 'react-elements-of-trust';
import {Image} from 'react-elements-of-trust';
```


## Development

For those who want to help with developing of *Platform of Trust* components.

### Install

!NOTE: Recommended `node` version is `10.16.0`. Use `nvm` to manage versions.

```bash
npm install yarn -g
yarn install
```

### Development

Start [Storybook](https://storybook.js.org/) for UI development

```bash
npm start
```


### Build

Build with rollup

```bash
npm run build
```


### Integrating to existing app while developing

There are 2 things to be done:

1) Install local version of `react-elements-of-trust`

Go to your project root folder (with package.json). `cd <YOUR_PROJECT_ROOT>`

```bash
npm install /absolute/path/to/react-elements-of-trust --save
```

_(relative path works as well)_

2) Alias react dependency of `react-elements-of-trust` to your app's react dependency


Go to `/absolute/path/to/react-elements-of-trust` folder with `package.json`

```bash
npm link /absolute/path/to/<YOUR_PROJECT_ROOT>/node_modules/react
```

Done!

Now each ime you build your local `react-elements-of-trust` with `npm run build`. New `bundle.js` and all `scss` files will be used within your app.

## Linting

Run `npm run lint` and `npm run format` before committing.

### Flow.js

It is important to run flow. js, while developing components. Webpack runs flow on each code update, however it might be easier for somebody to run it manually:

```bash
yarn flow
```

If you want to disable flow check on each build, check `./storybook/webpack.config.js:12`.

Also it is recommended to configure your IDE to run flow while you are writing code.


## License

1. The usage of identity assets of *Platform of Trust Oy*, including *UI color schemes*, any *single color* or *any combination of colors* (under `/colors`);
*corporate images* and *logos* (`*.jpeg`, `*.jpg`, `*.png`, `*.svg`, etc.); *information* about the organization (`*.doc`, `*.docx`, `*.odt`, `*.pdf`, `*.ppt`, `*.pptx`, `*.pps`, `*.txt`, etc.); etc. is restricted and can be used only with express written consent from *Platform Of Trust Oy*.

2. The usage of assets of types `.js` and `.scss` in `src` folder is licensed under MIT.
