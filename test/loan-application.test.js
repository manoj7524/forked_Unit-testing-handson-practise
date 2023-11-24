import { html, fixture, expect } from '@open-wc/testing';
import '../loan-application.js';

describe('LoanApplication', async() => {
  const comp=await fixture(html`<dash-board></dash-board>`);

  it('check for the accessibility of the component',()=>{
    expect(comp).to.be.accessible;
  })

});
