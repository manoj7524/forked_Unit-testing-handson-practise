import { html, fixture, expect } from '@open-wc/testing';
import Sinon,{ stub } from 'sinon';
import {Header} from '../src/header/Header.js';

describe('loan-header', async(done) => {
  // Write test cases inside this block
  const comp=await fixture(`<loan-header></loan-header>`);
  const hobj=new Header();

  it('Test the en and nl-localeChanged Method call',()=>{
    const enbtn=comp.shadowRoot.querySelector('#en-GB');
    enbtn.click();
    const spy=Sinon.spy(hobj,'localeChanged')

    const nlbtn=comp.shadowRoot.querySelector('#nl-NL');
    nlbtn.click();
   setTimeout(()=>{
    expect(spy.called).to.be.true;
    spy.restore();
    done();

   },1000);
   
  })

  
});
