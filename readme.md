## StencilJS creating Web Components deployed as NPM packages.

This repo uses StencilJS to create a number of Web Components, which are then compiled for publishing on NPM.

Repo is stencil-npm using npm branch - also use in main.

These are used in the stencil-npm-deploy-react, https://github.com/iwswordpress/stencil-npm-deploy-react/, repo to use NPM Web Components in a React project.

current version is "iwswordpress-ionic": "^0.1.1",

```
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'iwswordpress-ionic',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};

```

```
"name": "iwswordpress-ionic",
  "version": "0.1.1",
  "description": "IWS NPM Template from stencil-npm folder",
```
index.ts in ionic-events uses:
```
import {
  applyPolyfills,
  defineCustomElements as defineIWS
} from 'iwswordpress-ionic/loader'; // allows use of many npm web components
const { SplashScreen } = Plugins;
ReactDOM.render(<App />, document.getElementById('root'));
SplashScreen.hide();
applyPolyfills().then(() => {
  defineIWS();
});
```
src/index.html has custom css defined in head:

```
 <style>
      html {
        --color-primary: #2196f3;
        --color-primary-inverse: white;
        --color-primary-highlight: orange;
      }
    </style>
```

in ionic-react, this code is placed in public/index.html

this is how css customisation occurs.

### YouTube explanatory video and demo

- to be done
