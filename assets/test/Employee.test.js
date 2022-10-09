// using Employee constructor 
const Employee = require('../lib/Employee');
const employee = new Employee('kabir', 10, 'kabir.faisal@gmail.com');

// creates employee object 
describe('verify employee', ()=>{
it('creates an employee object', () => {
   
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
   
});

// gets id from getId() 
it('gets employee name', () => {

    expect(employee.getName()).toEqual(expect.any(String));
});


// gets emails from getEmail()
it('gets employee email', () => {

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
it('gets role of employee', () => {
 

    expect(employee.getRole()).toEqual("Employee");
}); 
})

