// 23	Створити підпрограми для знаходження n-го члена та суми суми перших n членів геометричної прогресії, за відомими першим членом та знаменником

export const getNmember = (progressionDenominator, firstMember, searchedMember) => 
  firstMember * Math.pow(progressionDenominator,(searchedMember-1));
export const getMembersSummary = (progressionDenominator, firstMember, searchedMember) =>
  firstMember*(Math.pow(progressionDenominator,searchedMember)-1) / (progressionDenominator-1);

// 23	Створити підпрограми для знаходження n-го члена та суми суми перших n членів геометричної прогресії, за відомими першим членом та знаменником

import { getMembersSummary, getNmember } from "./mathFormulas.mjs";

const progressionDenominator = 2;
const memberOne = 2;
const searchedMember = 5;

const memberFive = getNmember(progressionDenominator, memberOne, searchedMember);
console.log(memberFive);

const membersSumm = getMembersSummary(progressionDenominator, memberOne, searchedMember);
console.log(membersSumm);