### React elements of Trust

UI library of react components for PoT. 

#### Install

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

### Flow.js

It is important to run flow. js, while developing components. Webpack runs flow on each code update, however it might be easier for somebody to run it manually: 

```
yarn flow
```

If you want to disable flow check on each build, check `./storybook/webpack.config.js:12`.

Also it is recommended to configure your IDE to run flow while you are writing code. 
