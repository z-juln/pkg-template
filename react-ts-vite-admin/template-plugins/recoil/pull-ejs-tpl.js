const { cfgHelper } = require('pull-ejs-tpl-help');

const insertMain = ({ sourceCode }) => {
  const importRecoil = `import { RecoilRoot } from 'recoil';`;
  const useRecoil = `App.use((node) => <RecoilRoot>{node}</RecoilRoot>);`;
  let newCode = sourceCode;
  newCode = `${importRecoil}\n${newCode}`;
  newCode.replace(/\/\*\* pull-ejs-tpl-block: App\.use.*? \*\*\//, `${useRecoil}\n$1`);
  return newCode;
};

const cfg = cfgHelper()
  .defineTemplateMap([
    { dist: '/src/store', source: '/store/**' },
    { dist: '/src/main.tsx', insert: insertMain },
  ])
  .insertDeps({
    use: 'yarn',
    deps: [
      { mode: 'dependencies', dep: 'recoil', version: 'auto' },
    ],
  })
  .cfg;

module.exports = cfg;
