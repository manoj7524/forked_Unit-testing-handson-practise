import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { LoanEMIDetails } from '../src/LoanEMIDetails/LoanEMIDetails.js';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', async() => {
  // Write test cases inside this block
  const comp=await fixture(`<loanemi-details></loanemi-details>`);
  const loanobj=new LoanEMIDetails();

  it('Back btn to dashboard',()=>{
    const btn=comp.shadowRoot.querySelector('.cancel-btn');
    const ev = new Event('click', { bubbles: true });
    btn.dispatchEvent(ev);

    const spy=Sinon.spy(loanobj,'_toBasicDetails');

    setTimeout(()=>{
      expect(spy.called).to.be.true;

    })
    


   })

   it('Continue btn to Customer',()=>{
    const btn=comp.shadowRoot.querySelector('.continue-btn');
    const ev = new Event('click', { bubbles: true });
    btn.dispatchEvent(ev);

    const spy=Sinon.spy(loanobj,'_toCustomer');
    setTimeout(()=>{
      expect(spy.called).to.be.true;

    })
    


   })


});
