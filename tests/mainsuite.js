
describe('#AwesomeJobs App Testing Suite', function() {

/*
TODO : Separate test for different pages so , we vist each page only once
  beforeEach(function () {
    browser.get('/#/login');
  });
*/
describe('#Page Title Check', function() {
  it('should have a title', function() {
    browser.get('http://127.0.0.1:8080/');
    expect(browser.getTitle()).toEqual('Learn Angular App');
  });
});



describe('#Nav Element Check', function() {

  it('should have three menu items and menu must match what we have here',function(){

    browser.get('http://127.0.0.1:8080/#/');

    element.all(by.css('.navbar-nav li a')).then(function(items) {
      expect(items.length).toBe(3);
      expect(items[0].getText()).toBe('Register');
      expect(items[1].getText()).toBe('Login');
      expect(items[2].getText()).toBe('Logout');
    });

  });

});


describe('#Login Page Inputs Check', function() {

  it('should visit login page and verify existence of inputs and submit button',function(){
    browser.get('http://localhost:8080/#/login');
    element.all(by.css('.wrapper input')).then(function(inputs) {
      expect(inputs.length).toBe(2);
      expect(inputs[0].getTagName()).toBe('input');
      expect(inputs[1].getTagName()).toBe('input');

      // here the tags have names and hence we verify with the attribute names
      expect(inputs[0].getAttribute('name')).toBe('email');
      expect(inputs[1].getAttribute('name')).toBe('password');
      //console.log(inputs)
      //expect(inputs[0].email).toBeDefined();
    //  expect(element(by.css('person.name')).isPresent()).toBe(true);
    });

  });

  it('should find a submit button on the login page',function(){
    browser.get('http://localhost:8080/#/login');
    element.all(by.css('.wrapper button')).then(function(button) {
      expect(button.length).toBe(1);
      expect(button[0].getTagName()).toBe('button');
      expect(button[0].getText()).toBe('Login');
      });
  });

});



describe('#Register  Page Inputs Check', function() {



  it('should visit register page and verify existence of inputs and submit button',function(){
      browser.get('http://localhost:8080/#/register');
    element.all(by.css('.wrapper input')).then(function(inputs) {
      expect(inputs.length).toBe(3);
      expect(inputs[0].getTagName()).toBe('input');
      expect(inputs[1].getTagName()).toBe('input');
      expect(inputs[2].getTagName()).toBe('input');

      // Here we verify the type
      expect(inputs[0].getAttribute('type')).toBe('email');
      expect(inputs[1].getAttribute('type')).toBe('password');
      expect(inputs[2].getAttribute('type')).toBe('password');
    });

  });


  it('should find a submit button on the register page',function(){
    browser.get('http://localhost:8080/#/register');
    element.all(by.css('.wrapper button')).then(function(button) {
      expect(button.length).toBe(1);
      expect(button[0].getTagName()).toBe('button');
      expect(button[0].getText()).toBe('Register');
      });
  });

});

});
