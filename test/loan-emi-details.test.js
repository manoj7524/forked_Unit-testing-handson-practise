import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { localize } from '@lion/localize';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('loan-emi-details', async() => {
  const comp=await fixture(html`<loanemi-details></loanemi-details>`);
  const lionButtons=comp.shadowRoot.querySelector('lion-button');
  const pTags=comp.shadowRoot.querySelector('p');

  it('Accesibility test - to check for the accesibility of the component',()=>{
    expect(comp).to.be.accessible;
   })

   it('test lion-button click functionality - should call _toBasicDetails method',()=>{
    lionButtons[0].click();
    const toBasicDetailslionBtnSpy=Sinon.spy(comp,'_toBasicDetails');
    expect(toBasicDetailslionBtnSpy.called).to.be.true;
   })

   it('test lion-button click functionality - should call _toCustomer method',()=>{
    lionButtons[1].click();
    const toCustomerSpy=Sinon.spy(comp,'_toCustomer');
    expect(toCustomerSpy.called).to.be.true;
   })

   it('test p tags content on the component',()=>{
    expect(pTags[0].textContent).to.equal(localize.msg('change-language:intRate'));
    expect(pTags[1].textContent).to.equal(localize.msg('change-language:mnthlyEmi'));
    expect(pTags[2].textContent).to.equal(localize.msg('change-language:pricipal'));
    expect(pTags[3].textContent).to.equal(localize.msg('change-language:interest'));
    expect(pTags[4].textContent).to.equal(localize.msg('change-language:TotalAmt')); 
   })
});
