// using Engineer constructor 
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('kabir', 10, 'kabir.faisal@gmail.com', 'kabirfaisal1');
// creating engineer object  
describe('verify Engineer', ()=>{
it('creates an Engineer object', () => {

    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
it('gets engineer github value', () => {

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
it('gets role of employee', () => {

    expect(engineer.getRole()).toEqual("Engineer");
});
})