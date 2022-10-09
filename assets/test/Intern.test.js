// using Intern constructor 
const Intern = require('../lib/Intern');
const intern = new Employee('kabir', 10, 'kabir.faisal@gmail.com','SFSU');
// creating intern object  
describe('it employee', ()=>{
it('creates an Intern object', () => {

    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
it('gets employee school', () => {

    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
it('gets role of employee', () => {

    expect(intern.getRole()).toEqual("Intern");
}); 
})