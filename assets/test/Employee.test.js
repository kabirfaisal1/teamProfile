// using Employee constructor 
const Employee = require('../lib/Employee');
const employee = new Employee('kabir', 10, 'kabir.faisal@gmail.com', 'employee');

// creates employee object 
describe('verify employee', ()=>{
it('creates an employee object', () => {
   
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
 
   
});

// gets id from getId() 
it('gets employee name', () => {
    console.log(`email = ${employee.getName()}`);
    expect(employee.getName()).toEqual(expect.any(String));
});


// gets emails from getEmail()
it('gets employee email', () => {
    console.log(`email = ${employee.getEmail()}`);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
it('gets role of employee', () => {
 
    console.log(`role = ${employee.getRole()}`);
    expect(employee.getRole()).toEqual(expect.any(String));
}); 
})

