import { embed } from '@nebula.js/stardust';

export const renderQlikChart = async (element, app) => {
  const nuked = embed(app, {
    types: [{ name: 'barchart', load: () => import('@nebula.js/sn-bar-chart') }],
  });

  nuked.render({
    element,
    type: 'barchart',  // Choose the visualization type
    fields: ['Region', '=Sum(Sales)'], // Example fields, replace with your own
  });
};
