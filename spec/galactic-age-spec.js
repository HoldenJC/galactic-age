import { Human } from './../src/galactic-age.js';

describe('Human', function() {

  var testHuman;

  beforeEach(function() {
    testHuman = new Human("Billy", 24);

  });

  it('should test that a Human can be made and assigned an ageEarth', function() {

    expect(testHuman.name).toEqual("Billy");
    console.log(testHuman.name + " compare " + "Billy");

    expect(testHuman.ageEarth).toEqual(24);
    console.log(testHuman.ageEarth + " compare " + 24);

    // expect(testRole.intelligence).toEqual(1);
    console.log(testHuman.ageMercury + " compare " + 0);

    // expect(testRole.intelligence).toEqual(1);
    console.log(testHuman.ageVenus + " compare " + 0);

    // expect(testRole.intelligence).toEqual(1);
    console.log(testHuman.ageMars + " compare " + 0);

    // expect(testRole.intelligence).toEqual(1);
    console.log(testHuman.ageJupiter + " compare " + 0);


  });


});
