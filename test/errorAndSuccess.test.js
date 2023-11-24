import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { localize } from '@lion/localize';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('errorAndSucess - success screen ', async() => {
  const comp=await fixture(html`<loan-success></loan-success>`);
 
  it('Accesibility test - to check for the accesibility of the component',()=>{
    expect(comp).to.be.accessible;
   })

   it('p Accesibility test - to check for the accessibility of paragragh and its content',()=>{
    const pTag=comp.shadowRoot.querySelector('p');
    expect(pTag).to.be.accessible;
    expect(pTag.innerText).to.be.equal(localize.msg('change-language:scsDesc'));
   })

  it('test the _toHome function call',()=>{
    const loanSuccessBtn=comp.shadowRoot.querySelector('.home-btn')
    const toHomeSpy=Sinon.spy(comp,'_toHome');
    loanSuccessBtn.click();
    expect(toHomeSpy.called).to.be.true;
   }) 
});

describe('errorAndSuccess - error screen', async() => {
  const compError=await fixture(html`<loan-error></loan-error>`);

  it('Accesibility test - to check for the accesibility of the component',()=>{
    expect(compError).to.be.accessible;
   })

   it('p Accesibility test - to check for the accessibility of paragragh and its content',()=>{
    const pTag=compError.shadowRoot.querySelector('p');
    expect(pTag).to.be.accessible;
    expect(pTag.innerText).to.be.equal(localize.msg('change-language:errDesc'));
   })

  it('loan error test case',()=>{
    const loanErrorBtn=compError.shadowRoot.querySelector('.home-btn')
    const spy=Sinon.spy(compError,'_toHome');
    loanErrorBtn.click();
    expect(spy.called).to.be.true;
   })
});
