const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@application': path.resolve(__dirname, 'src/application/'),
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@infra': path.resolve(__dirname, 'src/infra/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
    },
  },
};
