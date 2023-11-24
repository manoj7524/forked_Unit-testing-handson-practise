import { html, fixture, expect } from '@open-wc/testing';
import { localize } from '@lion/localize';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', async() => {
  const elem=await fixture(html`<customer-details></customer-details>`);
  const inputFieldfirstName=elem.shadowRoot.getElementById('first_name');
  const inputFieldlastName=elem.shadowRoot.getElementById('last_name');
  const inputFieldDob=elem.shadowRoot.getElementById('dateof_birth');
  const sal=elem.shadowRoot.getElementById('monthly_salary')
  const btntext=elem.shadowRoot.getElementById('nextbtn');
  const backtext=await elem.shadowRoot.querySelector('.backbg-btn-color');
  
  it('Accesibility test - to check for the accesibility of the component',()=>{
    expect(elem).to.be.accessible;
   })

   it('h2 Accesibility test - to check for the accessibility of heading',()=>{
    const header2=elem.shadowRoot.querySelector('h2');
    expect(header2).to.be.accessible;
    expect(header2.innerText).to.be.equal(localize.msg('change-language:customer'));
   })

   it('input type test existance of lion-input',()=>{
    expect(inputFieldfirstName).to.exist;
   })

   it('test the input field label - first_name',()=>{
     expect(inputFieldfirstName.label).to.equal(localize.msg('change-language:firstname'));
   })

   it('test the input field label - last_name',()=>{
    expect(inputFieldlastName.label).to.equal( localize.msg('change-language:lastname'));
  })

  it('test the input field label - date_of_birth',()=>{
    expect(inputFieldDob.label).to.equal(localize.msg('change-language:dateofbirth'));
  })

  it('monthly Salary label test case',()=>{
    expect(sal.label).to.equal(localize.msg('change-language:monthlysalary'))
  })

  it('test next btn text',()=>{
     expect(btntext.innerText).to.equal(localize.msg('change-language:next'));
  })

  it('test next btn for not null use case',()=>{
   expect(btntext.innerText).to.not.be.null;
  })

  it('checks for emi details method call', ()=>{
    const toEmidetailsSpy=Sinon.spy(elem,'_toEmidetails');
     elem.shadowRoot.querySelector('.backbg-btn-color').click();
    expect(toEmidetailsSpy.called).to.be.true;
  });

  it('Check for back btn text existance ',async()=>{
    expect(backtext.innerText).to.not.be.null;
  })

});
