import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'iwswordpress-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
};
