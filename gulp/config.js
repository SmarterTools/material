var args = require('minimist')(process.argv.slice(2));
var VERSION = args.version || require('../package.json').version;

module.exports = {
  banner:
  '/*!\n' +
  ' * AngularJS Material Design\n' +
  ' * https://github.com/angular/material\n' +
  ' * @license MIT\n' +
  ' * v' + VERSION + '\n' +
  ' */\n',
  jsBaseFiles: [
	'src/core/**/*.js',
	'!src/components/bottomSheet/**',
	'!src/components/colors/**',
	'!src/components/datepicker/**',
	'!src/components/fabActions/**',
	'!src/components/fabSpeedDial/**',
	'!src/components/fabToolbar/**',
	'!src/components/gridList/**',
	'!src/components/list/**',
	'!src/components/menuBar/**',
	'!src/components/navBar/**',
	'!src/components/slider/**',
	'!src/components/sticky/**',
	'!src/components/subheader/**',
	'!src/components/toast/**',
	'!src/components/truncate/**'
  ],
  jsFiles: [
    'src/**/*.js',
    '!src/**/*.spec.js'
  ],
  mockFiles : [
    'test/angular-material-mocks.js'
  ],
  themeBaseFiles: [
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss'
  ],
  scssBaseFiles: [
    'src/core/style/color-palette.scss',
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss',
    'src/core/style/structure.scss',
    'src/core/style/typography.scss',
    'src/core/style/layout.scss',

    // TODO(crisbeto): can be removed once mdPanel is in the core.
    'src/components/panel/*.scss'
  ],
  scssLayoutFiles: [
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss',
    'src/core/style/layout.scss',
    'src/core/services/layout/layout.scss'
  ],
  scssLayoutAttributeFiles: [
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss',
    'src/core/services/layout/layout-attributes.scss'
  ],
  scssPaths : [
    'src/components/**/*.scss',
    'src/core/services/**/*.scss'
  ],
  cssIEPaths : ['src/**/ie_fixes.css'],
  paths: 'src/+(components|core)/**',
  outputDir: 'dist/',
  demoFolder: 'demo-partials'
};


