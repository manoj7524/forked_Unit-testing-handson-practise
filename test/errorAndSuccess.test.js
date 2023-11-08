import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import Sinon from 'sinon';
import {LoanSuccess} from'../src/SuccessAndError/Success.js';
import {LoanError} from '../src/SuccessAndError/Error.js';

describe('Success screen ', async() => {
  // Write test cases inside this block
  const comp=await fixture(`<loan-success></loan-success>`);
  const lsuccess=new LoanSuccess();

  it('loan success test case',()=>{
    const loan_s=comp.shadowRoot.querySelector('.home-btn')
    const ev = new Event('click', { bubbles: true });
    loan_s.dispatchEvent(ev);

    const spy=Sinon.spy(lsuccess,'_toHome');
    setTimeout(()=>{
      expect(spy.called).to.be.true;


    },1000)


   })

  
});

describe('error screen', async() => {
  // Write test cases inside this block
  const comp=await fixture(`<loan-error></loan-error>`);
  const lerror=new LoanError();
  it('loan error test case',()=>{
    const loan_e=comp.shadowRoot.querySelector('.home-btn')
    const ev = new Event('click', { bubbles: true });
    loan_e.dispatchEvent(ev);

    const spy=Sinon.spy(lerror,'_toHome');

    setTimeout(()=>{
      expect(spy.called).to.be.true;


    },1000)
    


   })
});
