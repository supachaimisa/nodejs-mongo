const chai = require("chai");
const { after, before, describe, it } = require("mocha");
const { functionDataFormatFail, functionDataFormatSuccess, functionIsNotThrowErr, functionIsThrowErr } = require('./functionaltest')
chai.should();
const expect = chai.expect;
describe("Testing unit functional test", () => {
//   before((done) => {
//     // Do something here before test

//     done();
//   });
  it('fail function data format',(done)=>{
    expect(functionDataFormatFail()).equal({ message: 'success' })
    done()
  })
  it('success function data format',(done)=>{
    expect(functionDataFormatSuccess()).eql({ message: 'success' })
    done()
  })
  it('is not throw error function',(done)=>{
    expect(functionIsNotThrowErr).to.not.throw()
    done()
  })
  it('is throw error function',(done)=>{
    expect(functionIsThrowErr).to.not.throw();
    done()
  })
//   after((done) => {
//     // Do something here after test
//     done();
//   });
});
