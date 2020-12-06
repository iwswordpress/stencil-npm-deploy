## StencilJS creating Web Components deployed as NPM packages.

This repo uses StencilJS to create a number of Web Components, which are then compiled for publishing on NPM.

Repo is stencil-npm using npm branch - also use in main and master.

These are used in the stencil-npm-deploy-react, https://github.com/iwswordpress/stencil-npm-deploy-react/, repo to use NPM Web Components in a React project.

current version is "iwswordpress-ionic": "^0.1.1",

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
