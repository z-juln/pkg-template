const changeCase = require('@juln/change-case');
const { cfgHelper } = require('pull-ejs-tpl-help');

const cfg = ({ name }) =>
  cfgHelper()
    .defineTemplateMap([
      { dist: `/src/components/${changeCase(name, 'kebab')}`, source: '/**' },
    ])
    .insertDeps({
      use: 'yarn',
      deps: [
        { mode: 'dependencies', dep: 'recoil', version: 'auto' },
      ],
    })
    .cfg;

module.exports = cfg;
