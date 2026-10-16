const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({
  name: 'mf-departments',
  filename: 'remoteEntry.js',
  exposes: { './DepartmentsPage': './src/app/pages/departments/departments.page.ts' },
  shared: { ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }) },
});
