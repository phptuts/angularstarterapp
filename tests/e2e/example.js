describe('starter app homepage', function() {
  
    it('should have title tag for home page that says Home Page', function() {
        browser.get('http://angularstarterapp.dev/src/');
        expect(browser.getTitle()).toBe('Home Page');
    });

  
});