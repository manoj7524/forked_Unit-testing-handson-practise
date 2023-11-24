import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/header/Header.js';

describe('headers', async() => {
  const comp=await fixture(html`<loan-header></loan-header>`);
  const headerBtns=comp.shadowRoot.querySelectorAll('button');
 
  it('check accesibility of the component',()=>{
     expect(comp).to.be.accessible;
  })

 it('should contain two buttons',()=>{
  expect(headerBtns.length).to.equal(2);
 })

  it('Test the en and nl-localeChanged Method call',()=>{
    const enbtn=comp.shadowRoot.querySelector('#en-GB');
    const nlLocaleChangeSpy=Sinon.spy(comp,'localeChanged');
    enbtn.click();
    expect(nlLocaleChangeSpy.called).to.be.true;
  })

  
});
