import { Human } from './../src/galactic-age.js';

describe('Human', function() {

  let testHuman;

  beforeEach(function() {
    testHuman = new Human("Billy", 24);
    // testHuman = new Human("Billy", 75); //Human object used to test output when age was over average lifespan

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

  it('should test that extraterrestrial life expectancies are being calculated and stored correctly', function() {

    testHuman.extraterrestrialAge();
    testHuman.extraterrestrialExpectancy();

    expect(testHuman.mercuryLife).toEqual(11.52);
    console.log(testHuman.mercuryLife + " compare " + 11.52);

    expect(testHuman.venusLife).toEqual(29.76);
    console.log(testHuman.venusLife + " compare " + 29.76);

    expect(testHuman.marsLife).toEqual(90.24);
    console.log(testHuman.marsLife + " compare " + 90.24);

    expect(testHuman.jupiterLife).toEqual(569.28);
    console.log(testHuman.jupiterLife + " compare " + 569.28);

  });

  it('should test that correct user output will be selected depending on if input age has already surpassed average life expectancy or if it has not', function() {

    testHuman.extraterrestrialAge();
    testHuman.extraterrestrialExpectancy();

    expect(testHuman.displayExpectancy(testHuman.mercuryLife)).toEqual("11.52 years left to live");
    console.log(testHuman.displayExpectancy(testHuman.mercuryLife) + " compare " + "11.52 years left to live");

    expect(testHuman.displayExpectancy(testHuman.venusLife)).toEqual("29.76 years left to live");
    console.log(testHuman.displayExpectancy(testHuman.venusLife) + " compare " + "29.76 years left to live");

    expect(testHuman.displayExpectancy(testHuman.marsLife)).toEqual("90.24 years left to live");
    console.log(testHuman.displayExpectancy(testHuman.marsLife) + " compare " + "90.24 years left to live");

    expect(testHuman.displayExpectancy(testHuman.jupiterLife)).toEqual("569.28 years left to live");
    console.log(testHuman.displayExpectancy(testHuman.jupiterLife) + " compare " + "569.28 years left to live");

  });

});
