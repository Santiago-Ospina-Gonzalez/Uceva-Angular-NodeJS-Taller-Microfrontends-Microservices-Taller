const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({ name: 'mf-songs', filename: 'remoteEntry.js', exposes: { './SongsPage': './src/app/pages/songs/songs.page.ts' }, shared: { ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }) } });
