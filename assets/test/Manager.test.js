// using Manager constructor 
const Manager = require('../lib/Manager');

const manager = new Manager('kabir', 10, 'kabir.faisal@gmail.com', 14);
// creating manager object  
describe('verify Manager', ()=>{
it('creates an Manager object', () => {
    console.log(`officeNumber = ${manager.officeNumber}`);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
it('gets role of employee', () => {
    console.log(`role = ${manager.getRole()}`);
    expect(manager.getRole()).toEqual("Manager");
}); 
})