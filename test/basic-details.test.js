import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import { localize } from '@lion/localize';
import '../src/LoanBasicDetails/BasicDetails.js';

   describe("Basic Details",async()=>{
    const comp=await fixture(html`<basic-details></basic-details>`);
    const amtField=comp.shadowRoot.getElementById('amount');

    const lionBtns=comp.shadowRoot.querySelectorAll('lion-button');
    
    it('Accesibility test - to check for the accesibility of the component',()=>{
      expect(comp).to.be.accessible;
     })

     it('h2 Accesibility test - to check for the accessibility of heading',()=>{
      const header2=comp.shadowRoot.querySelector('h2');
      expect(header2).to.be.accessible;
      expect(header2.innerText).to.be.equal(localize.msg('change-language:loandetails'));
     })

     it('input type test existance of lion-input',()=>{
      const inputField=comp.shadowRoot.getElementById('type');
      expect(inputField).to.exist;
     })

     it('test numtoword function call returns the Float value',()=>{
        const a =200;
        amtField.modelValue=a;
        comp._numToWord();
        expect(a).to.equal(200.00);
       })
     
       it('should check for the label of amount field',()=>{
           expect(amtField.label).to.equal(localize.msg('change-language:monthlysalary'))
         })

      it('test lion input range label',()=>{
        const inputRange=comp.shadowRoot.querySelector('lion-input-range');
        expect(inputRange.label).to.be.equal(localize.msg('change-language:loanPeriod'));
      })

      it('test lionButton function call -  _toDashboard',()=>{
        const toDashboardSpy=Sinon.spy(comp,'_toDashboard');
        lionBtns[0].click();
        expect(toDashboardSpy.called).to.be.true;
      })

      it('test lionButton function call -  _captureDetails',()=>{
        const captureDetailsSpy=Sinon.spy(comp,'_captureDetails');
        lionBtns[1].click();
        expect(captureDetailsSpy.called).to.be.true;
      })
    
   })



