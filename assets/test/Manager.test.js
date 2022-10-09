// using Manager constructor 
const Manager = require('../lib/Manager');

const manager = new Employee('kabir', 10, 'kabir.faisal@gmail.com');
// creating manager object  
describe('it employee', ()=>{
it('creates an Manager object', () => {
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
it('gets role of employee', () => {
 

    expect(manager.getRole()).toEqual("Manager");
}); 
})