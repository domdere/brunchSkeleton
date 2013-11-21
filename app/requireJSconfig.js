require.config({
  paths: {
    jquery:         'vendor/jQuery',
    jqueryui:       'vendor/jQuery-ui',
    jquerycookies:  'vendor/jQuery-Cookies',
    jqueryhotkeys:  'vendor/jQuery-hotkeys',
    jqueryjstree:   'vendor/jQuery-jsTree',
    underscore:     'vendor/underscore',
    backbone:       'vendor/backbone',
    handlebars:     'vendor/handlebars',
    chaplin:        'vendor/chaplin',
    text:           'vendor/require-text',
    bootstrap:      'vendor/bootstrap',
    ddd:            'vendor/d3',
    xtk:            'vendor/xtk',
    templates:      '../../templates',
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    chaplin: {
      deps: ['backbone']
    },
    bootstrap: {
      deps: ['jquery']
    },
    jqueryui: {
      deps: ['jquery']
    },
    jquerycookies: {
        deps: ['jquery']
    },
    jqueryhotkeys: {
        deps: ['jquery']
    },
    jqueryjstree: {
        deps: ['jquery', 'jqueryhotkeys', 'jquerycookies']}
  },
  deps: ["main"]
});
