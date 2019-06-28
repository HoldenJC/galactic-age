import { Human } from './../src/galactic-age.js';

describe('Human', function() {

  let testHuman;

  beforeEach(function() {
    testHuman = new Human("Billy", 24);

    /* line 13 contains secondary Human object used to test output when age was over average lifespan
    uncomment line 13 testHuman, comment out above testHuman object (line 8), and follow directions
    in comments at end of this page (start @ line 77) to test over average age output */
    // testHuman = new Human("Billy", 75);

  });

  it('should test that a Human can be made and assigned an ageEarth', function() {

    testHuman.extraterrestrialAge();

    expect(testHuman.name).toEqual("Billy");
    console.log(testHuman.name + " compare " + "Billy");

    expect(testHuman.ageEarth).toEqual(24);
    console.log(testHuman.ageEarth + " compare " + 24);

    expect(testHuman.ageMercury).toEqual(100);
    console.log(testHuman.ageMercury + " compare " + 100);

    expect(testHuman.ageVenus).toEqual(38.71);
    console.log(testHuman.ageVenus + " compare " + 38.71);

    expect(testHuman.ageMars).toEqual(12.77);
    console.log(testHuman.ageMars + " compare " + 12.77);

    expect(testHuman.ageJupiter).toEqual(2.02);
    console.log(testHuman.ageJupiter + " compare " + 2.02);

  });

  it('should test that extraterrestrial life expectancies are being calculated and stored correctly', function() {

    testHuman.extraterrestrialAge();
    testHuman.extraterrestrialExpectancy();

    expect(testHuman.mercuryLife).toEqual(200);
    console.log(testHuman.mercuryLife + " compare " + 200);

    expect(testHuman.venusLife).toEqual(77.42);
    console.log(testHuman.venusLife + " compare " + 77.42);

    expect(testHuman.marsLife).toEqual(25.53);
    console.log(testHuman.marsLife + " compare " + 25.53);

    expect(testHuman.jupiterLife).toEqual(4.05);
    console.log(testHuman.jupiterLife + " compare " + 4.05);

  });

  it('should test that correct user output will be selected depending on if input age has already surpassed average life expectancy or if it has not', function() {

    testHuman.extraterrestrialAge();
    testHuman.extraterrestrialExpectancy();

    expect(testHuman.displayExpectancy(testHuman.mercuryLife)).toEqual(`you'd have roughly <span class="solarLife">200</span> solar years left to live`);
    console.log(testHuman.displayExpectancy(testHuman.mercuryLife) + " compare " + `you'd have roughly <span class="solarLife">200</span> solar years left to live`);

    expect(testHuman.displayExpectancy(testHuman.venusLife)).toEqual(`you'd have roughly <span class="solarLife">77.42</span> solar years left to live`);
    console.log(testHuman.displayExpectancy(testHuman.venusLife) + " compare " + `you'd have roughly <span class="solarLife">77.42</span> solar years left to live`);

    expect(testHuman.displayExpectancy(testHuman.marsLife)).toEqual(`you'd have roughly <span class="solarLife">25.53</span> solar years left to live`);
    console.log(testHuman.displayExpectancy(testHuman.marsLife) + " compare " + `you'd have roughly <span class="solarLife">25.53</span> solar years left to live`);

    expect(testHuman.displayExpectancy(testHuman.jupiterLife)).toEqual(`you'd have roughly <span class="solarLife">4.05</span> solar years left to live`);
    console.log(testHuman.displayExpectancy(testHuman.jupiterLife) + " compare " + `you'd have roughly <span class="solarLife">4.05</span> solar years left to live`);

    /* Below is used to test output when input age was over global average lifespan;
    comment out other "expect" statements and their following console statements, then
    uncomment the expect statement below and the secondary Human object above to test. */

    // expect(testHuman.displayExpectancy(testHuman.mercuryLife)).toEqual(`you would be <span class="solarLife">12.5</span> solar years over the average lifespan`);
    // console.log(testHuman.displayExpectancy(testHuman.mercuryLife) + " compare " + `you would be <span class="solarLife">12.5</span> solar years over the average lifespan`);

  });

});
