let ageChild = parseFloat(prompt("Enter the year of your child", 1));
const ageKinderGarten = 3;
const ageSchool = 7;
const ageEndOfSchool = 16;
const ageUniversity = 17;
const ageEndOfUniversity = 22;
const goToKinderGarten = ageKinderGarten - ageChild;
const goToSchool = ageSchool - ageChild;
const endSchool = ageEndOfSchool - ageChild;
const goToUniversity = ageUniversity - ageChild;
const endUniversity = ageEndOfUniversity - ageChild;

alert(" The child will go to kindergarten " + goToKinderGarten + " year");
alert(" The child will go to School " + goToSchool + " year");
alert(" The child will finish school in " + endSchool + " year");
alert(" The child will go to University " + goToUniversity+ " year");
alert(" The child will finish University in " + endUniversity + " year");