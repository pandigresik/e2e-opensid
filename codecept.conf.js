const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:8000',
      show: true,      
    },
    
  },
  plugins: {
    stepByStepReport: {
      enabled: true
    },
    debugErrors: {
      enabled: true,
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        admin: {
          login: (I) => {
            I.amOnPage('/siteman');
            I.fillField('username', 'admin');
            I.fillField('password', 'Admin100%');
            I.click('button[type=submit]');            
          },
          check: (I, session) => {            
            I.amOnPage('/beranda');
          },
          
        },
        kades: {
          login: (I) => {
            I.amOnPage('/siteman');
            I.fillField('username', 'kades');
            I.fillField('password', 'Admin100%');
            I.click('button[type=submit]');            
          },
          check: (I, session) => {
            I.amOnPage('/beranda');
          },
        },
      },
    },
  },
  name: 'e2e'
}
