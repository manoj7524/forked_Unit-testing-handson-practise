import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import Sinon,{ stub } from 'sinon';
import {CustomerDetails} from '../src/Customer/Customer-details.js';



describe('customer details', async() => {
  const elem=await fixture(`<customer-details></customer-details>`);
  const sub=new CustomerDetails()
  // Write test cases inside this block
  it('Monthly Salary label test case',()=>{
   // console.log("log ",elem.shadowRoot.getElementById)
    const sal=elem.shadowRoot.getElementById('monthly_salary')
    sal.value=100000;
    //console.log("Monthly salary ",sal);
    expect(sal.label).to.equal(localize.msg('change-language:monthlysalary'))
  })

  it('Test next btn text',()=>{
    
     const btntext=elem.shadowRoot.getElementById('nextbtn').textContent;
     expect(btntext).to.equal(localize.msg('change-language:next'));
    

  })

  it('Test next btn for not null',()=>{
   const btnnext= elem.shadowRoot.getElementById('nextbtn').textContent;
   expect(btnnext).to.not.be.null;
  })

  it('checks for emi details method call', async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('.backbg-btn-color').click();

    const spy=Sinon.spy(sub,'_toEmidetails');
    setTimeout(()=>{
      expect(spy.called).to.be.true;
    },1000)
  });


  it('Check for back btn text ',async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    const backtext=await el.shadowRoot.querySelector('.backbg-btn-color').textContent;
    expect(backtext).to.not.be.null;
   

  })

});
