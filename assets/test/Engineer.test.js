// using Engineer constructor 
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('kabir', 10, 'kabir.faisal@gmail.com', 'kabirfaisal1');

describe('verify Engineer', ()=>{
    // creating engineer object  
it('creates an Engineer object', () => {
    console.log(`github = ${engineer.github}`);
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
it('gets engineer github value', () => {
    console.log(`github = ${engineer.getGithub()}`);
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
it('gets role of employee', () => {

    expect(engineer.getRole()).toEqual("Engineer");
});
})