/*
  Components from external libraries (ie. vue-mdc-adapter):
  - PARENT -> external, componegg, egglement
  - CHILDREN -> (none)
 */
const materialComponents = [
  // --- TOP APP BAR --- //
  {
    'displayName': 'TopAppBar',
    'iconName': 'mdcToolbar',
    'name': 'mdcTopAppBarComp',
    'type': 'mdc-top-app-bar',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
            ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 64,
    'width': '100%',
    'minHeight': 56,
    'minWidth': 120,
    'attrs': {
      'title': 'My App',
      'fixed': false,
      'short': false,
      'collapsed': false,
      'dense': false,
      'prominent': false,
      'event': 'toggledrawer'
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'mdc-top-app-bar-action',
        'attrs': {
          'icon': 'help'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'mdc-top-app-bar-action',
        'attrs': {
          'icon': 'file_download'
        },
        'styles': {},
        'classes': {},
        'children': []
      }
    ]
  },

  // --- CHECKBOX --- //
  {
    'displayName': 'Checkbox',
    'iconName': 'mdcCheckbox',
    'name': 'mdcCheckboxComp',
    'type': 'mdc-checkbox',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 40,
    'width': 155,
    'minHeight': 32,
    'minWidth': 32,
    'attrs': {
      'label': 'MDC Checkbox',
      'checked': true,
      'indeterminate': true,
      'align-end': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- CARD --- //
  {
    'displayName': 'Card',
    'iconName': 'mdcCard',
    'name': 'mdcCardComp',
    'type': 'mdc-card',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 310,
    'minHeight': 230,
    'width': 300,
    'minWidth': 150,
    'attrs': {},
    'styles': {
      'background-color': '#fff'
    },
    'classes': {},
    'children': [
      {
        'type': 'mdc-card-media',
        'attrs': {
          'height': 160,
          'src': 'https://material-components-web.appspot.com/images/16-9.jpg'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'mdc-card-header',
        'attrs': {
          'title': 'Title',
          'subtitle': 'Subtitle'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'mdc-card-actions',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': [
          {
            'type': 'mdc-card-action-button',
            'text': 'Action 1',
            'attrs': {},
            'styles': {},
            'classes': {}
          }, {
            'type': 'mdc-card-action-button',
            'text': 'Action 2',
            'attrs': {},
            'styles': {},
            'classes': {}
          }
        ]
      }
    ]
  },

  // --- LIST --- //
  {
    'displayName': 'List',
    'iconName': 'mdcList',
    'name': 'mdcListComp',
    'type': 'mdc-list',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 163,
    'width': 163,
    'minHeight': 63,
    'minWidth': 120,
    'attrs': {
      'dense': false,
      'bordered': true,
      'two-line': false,
      'avatar-list': false,
      'interactive': false
    },
    'styles': {
      'overflow': 'hidden'
    },
    'classes': {},
    'children': [
      {
        'type': 'mdc-list-item',
        'text': 'List item A',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'mdc-list-item',
        'text': 'List item B',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'mdc-list-item',
        'text': 'List item C',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': []
      }
    ]
  },

  // --- BUTTON --- //
  {
    'displayName': 'Button',
    'iconName': 'mdcButton',
    'name': 'mdcButtonComp',
    'type': 'mdc-button',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'text': 'mdcButton',
    'height': 36,
    'width': 120,
    'minHeight': 32,
    'minWidth': 64,
    'attrs': {
      'baseline': false,
      'raised': true,
      'unelevated': false,
      'outlined': false,
      'dense': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- RADIO --- //
  {
    'displayName': 'Radio',
    'iconName': 'mdcRadio',
    'name': 'mdcRadioComp',
    'type': 'mdc-radio',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 40,
    'width': 155,
    'minHeight': 32,
    'minWidth': 32,
    'attrs': {
      'label': 'MDC Radio',
      'name': 'default-mdc-group',
      'checked': false,
      'align-end': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- LINEAR PROGRESS --- //
  {
    'displayName': 'Progress',
    'iconName': 'mdcProgress',
    'name': 'mdcLinearProgressComp',
    'type': 'mdc-linear-progress',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 3,
    'width': '100%',
    'minHeight': 1,
    'minWidth': 100,
    'attrs': {
      'open': true,
      'accent': false,
      'reverse': false,
      'indeterminate': true,
      'progress': 0.25,
      'buffer': 0.5
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- SWITCH --- //
  {
    'displayName': 'Switch',
    'iconName': 'mdcSwitch',
    'name': 'mdcSwitchComp',
    'type': 'mdc-switch',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 46,
    'width': 130,
    'attrs': {
      'label': 'MDC Switch',
      'checked': true,
      'align-end': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },
]

export default materialComponents
