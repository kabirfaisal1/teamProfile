// using Intern constructor 
const Intern = require('../lib/Intern');
const intern = new Intern('kabir', 10, 'kabir.faisal@gmail.com','CUNY');

describe('verify Intern', ()=>{
    // creating intern object  
it('creates an Intern object', () => {
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
it('gets employee school', () => {
    console.log(`school = ${intern.getSchool()}`);
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
it('gets role of intern', () => {
    console.log(`role = ${intern.getRole()}`);
    expect(intern.getRole()).toEqual("Intern");
}); 
})