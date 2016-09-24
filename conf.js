exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  /*
      It appeared that I had misconfigured the protractor config file.
       When the ng-app directive is not defined on the BODY-element, but on a descendant,
       you have to adjust the rootElement property in your protractor config file to the
       selector that defines your angular root element, for example:
       http://stackoverflow.com/questions/20059943/running-into-error-while-waiting-for-protractor-to-sync-with-the-page-with-basic
  */
  rootElement: '.main-app',
  specs: ['tests/mainsuite.js']
};
