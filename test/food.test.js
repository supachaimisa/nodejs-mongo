const chai = require("chai");
const chaiHttp = require("chai-http");
const { after, before, describe, it } = require("mocha");

const app = require("../index");

chai.use(chaiHttp);
chai.should();
const expect = chai.expect;
var data = {};
const _DATA_TEST_ = {
  name: "กระเพราหมูกรอบ",
  nation: "THA",
  detail: "กระเพราะเป็นอาหารยอดฮิตของร้านตามสั่งทุกร้าน",
};
describe("Testing unit Food", () => {
  before((done) => {
    // Do something here before test

    done();
  });
  it("POST // it should no error and should have message ", (done) => {
    chai
      .request(app)
      .post("/food")
      .send(_DATA_TEST_)
      .end((e, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("Add a food");
        // res.body.data.to.have.lengthOf(1)
        data = res.body.data;
        expect(data).to.have.eql({
          _id: data._id,
          ..._DATA_TEST_,
        });
        done();
      });
  });
  it("GET // it should no error and should have data", (done) => {
    chai
      .request(app)
      .get("/food")
      .query({ id: data._id })
      .end((e, res) => {
        res.should.have.status(200);
        const tempData = res.body;
        delete tempData.__v;
        delete tempData.hidden;
        delete tempData.date;
        expect(data).to.have.eql(tempData);
        done();
      });
  });

  it("PUT // it should no error and should have message ", (done) => {

    const dataUpdate = { ..._DATA_TEST_, detail: "แก้ไข" }
    chai
      .request(app)
      .put("/food")
      .query({ id: data._id })
      .send(dataUpdate)
      .end((e, res) => {
        res.should.have.status(200);
        const tempData = res.body.data;
        delete tempData.__v;
        delete tempData.hidden;
        delete tempData.date;
        expect({...dataUpdate, _id: data._id }).to.have.eql(tempData);
        res.body.should.have.property("message").eql("Update the food");
        done();
      });
  });
  it("DELETE // it should no error and should have message ", (done) => {
    chai
      .request(app)
      .delete("/food")
      .query({
        id: data._id,
      })
      .end((e, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("delete the food");
        res.body.should.have.property("deletedCount").eql(1);
        done();
      });
  });

  after((done) => {
    // Do something here after test
    done();
  });
});
