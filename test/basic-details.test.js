import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import { localize } from '@lion/localize';
import {BasicDetails} from '../src/LoanBasicDetails/BasicDetails.js';
import '../src/LoanBasicDetails/BasicDetails.js';

describe.skip('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
 
   describe("Amount Field Test Cases",async()=>{
    const comp=await fixture(`<basic-details></basic-details>`);
    const bas=new BasicDetails();
    let amtfield
    beforeEach(()=>{
     amtfield=comp.shadowRoot.getElementById('amount');
    })

    // it("Amount-Required Test case",()=>{
     
    //   expect(amtfield.hasAttribute('required')).to.be.true;
    // })

    // it("Amount - Min value ",()=>{
    //   amtfield.value=5000
    //   const cevent=new Event('input',{bubbles:true});
    //   amtfield.dispatchEvent(cevent)
    //   // expect(amtfield.classList.contains("e-handle")).to.be.true;
     
    // })

    // it("Amount - Max value ",()=>{
    //   amtfield.value=20000
    //   const cevent=new Event('input',{bubbles:true});
    //   amtfield.dispatchEvent(cevent)
    //   expect(amtfield.classList.contains("e-handle")).to.be.false;
    // })
    it('Amount field test case',()=>{
      // console.log("log ",elem.shadowRoot.getElementById)
       const amt=comp.shadowRoot.getElementById('amount')
       
       expect(amt.label).to.equal(localize.msg('change-language:monthlysalary'))
     })

     xit('Test range field label value',()=>{
      const range=comp.shadowRoot.getElementById('period')
       
      expect(range.label).to.equal(localize.msg('change-language:loanPeriod'));
     })

     it('Test numtoword function call',()=>{
      const amt=comp.shadowRoot.getElementById('amount')
      const spy=Sinon.spy(bas,'_numToWord');
        const event = new Event('keyup', { bubbles: true });
       amt.dispatchEvent(event);
      //amt.keyup();
     
      setTimeout(()=>{
        expect(spy.called).to.be.true;
        
      },1000)
     
     })


     it('check form submission ',()=>{
      const spy=Sinon.spy(bas,'_captureDetails');
      const f=comp.shadowRoot.querySelector('.basic-web-form')
      const ev = new Event('submit', { bubbles: true });
      f.dispatchEvent(ev);

      

      setTimeout(()=>{
        expect(spy.called).to.be.true;
      },1000)
      


     })

     it('Back btn to dashboard',()=>{
      const spy=Sinon.spy(bas,'_toDashboard');
      const btn=comp.shadowRoot.querySelector('.btn-previous');
      const ev = new Event('click', { bubbles: true });
      btn.dispatchEvent(ev);

      
      setTimeout(()=>{
        expect(spy.called).to.be.true;
      },1000)


     })
    
   })


});
