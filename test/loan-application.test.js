import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import {DashboardMenu} from '../src/dashboard/Dashboard-menu.js';
import { DashboardOverview } from '../src/dashboard/Dashboard-overview.js';

import '../loan-application.js';

describe('LoanApplication', async() => {
  // Write test cases inside this block
  const comp=await fixture(`<dashboard-menu></dashboard-menu>`);
  const dashobj=new DashboardMenu();

  const overviewcomp=await fixture(`<dashboard-overview></dashboard-overview>`);
  const dashoverviewobj=new DashboardOverview();



  it('Test testTpeInnl  Method call',async()=>{
    const cbtn=comp.shadowRoot.querySelector('.card button');
    cbtn.click();
    const spy=Sinon.spy(dashobj,'_setTypeInLS')

    
   setTimeout(()=>{
    expect(spy.called).to.be.true;
    spy.restore();
    

   },1000);
   
  })

  

});
