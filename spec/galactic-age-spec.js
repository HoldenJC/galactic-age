import { Human } from './../src/galactic-age.js';

describe('Human', function() {

  let testHuman;

  beforeEach(function() {
    testHuman = new Human("Billy", 24);

  });

  it('should test that a Human can be made and assigned an ageEarth', function() {

    testHuman.extraterrestrialAge();

    expect(testHuman.name).toEqual("Billy");
    console.log(testHuman.name + " compare " + "Billy");

    expect(testHuman.ageEarth).toEqual(24);
    console.log(testHuman.ageEarth + " compare " + 24);

    expect(testHuman.ageMercury).toEqual(5.76);
    console.log(testHuman.ageMercury + " compare " + 5.76);

    expect(testHuman.ageVenus).toEqual(14.88);
    console.log(testHuman.ageVenus + " compare " + 14.88);

    expect(testHuman.ageMars).toEqual(45.12);
    console.log(testHuman.ageMars + " compare " + 45.12);

    expect(testHuman.ageJupiter).toEqual(284.64);
    console.log(testHuman.ageJupiter + " compare " + 284.64);

  });

});
