# React elements of Trust

UI library of react components for PoT. 


## Install
  
```
npm install --save https://github.com/PlatformOfTrust/react-elements-of-trust react-bootstrap react   
```

### Usage

Import scss

```
@import '~bootstrap/scss/bootstrap.scss';
@import '~react-elements-of-trust/dist/scss/main.scss';
```

Use React components:

```
import {Button} from 'react-elements-of-trust';
```


## Development

For those who want to help with developing of PoT components.

### Install

!NOTE: Recommended `node` version is `10.16.0`. Use `nvm` to manage versions. 

```
npm install yarn -g
yarn install
```

### Development

Start [Storybook](https://storybook.js.org/) for UI development

```
npm start
```


### Build

Build with rollup

```
npm run build
```


### Integrating to existing app while developing

There are 2 things to be done:

1) Install local version of `react-elements-of-trust`

Go to your project root folder (with package.json). `cd <YOUR_PROJECT_ROOT>`

```
npm install /absolute/path/to/react-elements-of-trust --save 
```

_(relative path works as well)_

2) Alias react dependency of `react-elements-of-trust` to your app's react dependency


Go to `/absolute/path/to/react-elements-of-trust` folder with `package.json`

```
npm link /absolute/path/to/<YOUR_PROJECT_ROOT>/node_modules/react 
```

Done!

Now each ime you build your local `react-elements-of-trust` with `npm run build`. New `bundle.js` and all `scss` files will be used within your app.

### Flow.js

It is important to run flow. js, while developing components. Webpack runs flow on each code update, however it might be easier for somebody to run it manually: 

```
yarn flow
```

If you want to disable flow check on each build, check `./storybook/webpack.config.js:12`.

Also it is recommended to configure your IDE to run flow while you are writing code. 
