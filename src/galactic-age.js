export class Human {
  constructor(name, ageEarth){
    this.name = name;
    this.ageEarth = ageEarth;
    this.ageMercury = 0;
    this.ageVenus = 0;
    this.ageMars = 0;
    this.ageJupiter = 0;
  }

  extraterrestrialAge(){
    this.ageMercury = ((this.ageEarth * 0.24).toFixed(2)) * 1;
    this.ageVenus = ((this.ageEarth * 0.62).toFixed(2)) * 1;
    this.ageMars = ((this.ageEarth * 1.88).toFixed(2)) * 1;
    this.ageJupiter = ((this.ageEarth * 11.86)).toFixed(2)) * 1;
  }


}
