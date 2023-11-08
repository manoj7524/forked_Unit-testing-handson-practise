import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import { stub } from 'sinon';
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

  it('Test handler',()=>{
     elem.shadowRoot.getElementById('nextbtn').click();

  })

  it('checks for emi details', async()=>{
    const el=await fixture(html`<customer-details></customer-details>`);
    await el.shadowRoot.querySelector('.backbg-btn-color').click();
  });

});
