// Libraries
const fs = require('fs');
const jsdom = require('jsdom');
const { assert } = require('chai');

// HTML
const srcHtml = fs.readFileSync('./src/index.html');
const doc = jsdom.jsdom(srcHtml);

// Tests
describe('The webpage', () => {

  /**
   * HEADER
   */
  describe('header', () => {
    it('should exist @header', () => {
      const header = doc.querySelector('header');
      assert.isOk(header, 'We need a `header` element.');
    });

    it('should not exist @header', () => {
      const header = doc.querySelector('.header');
      assert.isOk(!header, 'Make sure to remove the `.header` class -- we no longer need it.');
    });
  });


  /**
   * NAV
   */
  describe('nav', () => {
    it('should exist @nav', () => {
      const nav = doc.querySelector('header nav');
      assert.isOk(nav, 'We need a `nav` element inside `header`.');
    });

    it('should remove the existing class @nav', () => {
      const nav = doc.querySelector('.nav');
      assert.isOk(!nav, 'We no longer need an element with a class of `.nav`. Go ahead and remove it.');
    });

    it('should still contain a ul @nav', () => {
      const nav = doc.querySelector('nav ul');
      assert.isOk(nav, 'We still need a `ul` element within our `nav`.');
    });
  });


  /**
   * SECTION
   */
  describe('section', () => {
    it('should convert the tagline @section', () => {
      const el = doc.querySelector('.tagline');
      assert.isOk(el, 'Looks like you removed the element with a class of `.tagline`. You will still need that, but will need to change it\'s element.');
      assert.equal(el.tagName.toLowerCase(), 'section', 'Make sure to change the element with a class of `tagline` to a `section` element.');
    });

    it('should convert the skills @section', () => {
      const el = doc.querySelector('.skills');
      assert.isOk(el, 'Looks like you removed the element with a class of `.skills`. You will still need that, but will need to change it\'s element.');
      assert.equal(el.tagName.toLowerCase(), 'section', 'Make sure to change the element with a class of `skills` to a `section` element.');
    });

    it('should convert the contact @section', () => {
      const el = doc.querySelector('.contact');
      assert.isOk(el, 'Looks like you removed the element with a class of `.contact`. You will still need that, but will need to change it\'s element.');
      assert.equal(el.tagName.toLowerCase(), 'section', 'Make sure to change the element with a class of `contact` to a `section` element.');
    });
  });


  /**
   * MAIN
   */
  describe('main', () => {
    it('should exist @main', () => {
      const header = doc.querySelector('main');
      assert.isOk(header, 'We need a `main` element.');
    });

    it('should not exist @main', () => {
      const sections = doc.querySelectorAll('main section');
      assert.isOk(sections.length >= 3, 'Make sure to move all of the `section` elements into our new `main` element.');
    });
  });

  /**
   * FOOTER
   */
  describe('footer', () => {
    it('should exist @footer', () => {
      const footer = doc.querySelector('footer');
      assert.isOk(footer, 'We need a `footer` element.');
    });

    it('should not exist @footer', () => {
      const footer = doc.querySelector('.footer');
      assert.isOk(!footer, 'Remove the `footer` class. Since we\'re using semantic HTML, we no longer need that one.');
    });
  });

});
