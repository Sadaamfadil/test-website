const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

require('./scriptdocument.js');

describe('Login Popup Functionality', () => {

});
