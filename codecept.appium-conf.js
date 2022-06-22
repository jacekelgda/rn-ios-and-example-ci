exports.config = {
  output: './output',
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      restart: false,
      platform: 'ios',
      desiredCapabilities: {
        app:
          '../ark-app/ios/build/ArkApp.app/Build/Products/Debug-iphonesimulator/ArkApp.app',
        automationName: 'XCUITest',
        deviceName: 'iPhone 13',
        platformVersion: '15.4',
        autoDismissAlerts: true,
        noReset: true,
        udid: 'C24CAAA4-11F9-46CC-BC84-CBD20653ACA7',
        xcodeOrgId: 'foo',
        xcodeSigningId: 'iPhone Developer',
      },
      // desiredCapabilities: {
      //   app: 'no.ark.app',
      //   automationName: 'XCUITest',
      //   deviceName: 'iPhone 13',
      //   platformVersion: '15.4',
      //   autoDismissAlerts: true,
      //   noReset: true,
      // },
    },
  },
  include: {
    I: './bdd/steps_file.ts',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './bdd/appium/features/*.feature',
    steps: ['./bdd/step_definitions/steps.ts'],
  },
  plugins: {
    screenshotOnFail: {
      enabled: false,
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0,
    },
    {
      pattern: 'amOnPage',
      timeout: 0,
    },
  ],
  tests: './*_test.ts',
  name: 'ark-premium-api',
  require: ['ts-node/register'],
};
