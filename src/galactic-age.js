export class Human {
  constructor(name, ageEarth){
    this.name = name;
    this.ageEarth = ageEarth;
    this.earthLife = 72; //global average lifespan via https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy
    this.ageMercury = 0;
    this.mercuryLife = 0;
    this.ageVenus = 0;
    this.venusLife = 0;
    this.ageMars = 0;
    this.marsLife = 0;
    this.ageJupiter = 0;
    this.jupiterLife = 0;
  }

  extraterrestrialAge(){
    this.ageMercury = ((this.ageEarth * 0.24).toFixed(2)) * 1;
    this.ageVenus = ((this.ageEarth * 0.62).toFixed(2)) * 1;
    this.ageMars = ((this.ageEarth * 1.88).toFixed(2)) * 1;
    this.ageJupiter = ((this.ageEarth * 11.86).toFixed(2)) * 1;
  }

  extraterrestrialExpectancy(){
    this.mercuryLife = (this.earthLife * 0.24 - this.ageMercury).toFixed(2) * 1;
    this.venusLife = (this.earthLife * 0.62 - this.ageVenus).toFixed(2) * 1;
    this.marsLife = (this.earthLife * 1.88 - this.ageMars).toFixed(2) * 1;
    this.jupiterLife = (this.earthLife * 11.86 - this.ageJupiter).toFixed(2) * 1;
  }
}
