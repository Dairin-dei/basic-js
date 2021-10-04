import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
if (!Array.isArray(members)){return false}
  let va = members.filter(function(item) {
    return (typeof item == "string")
    }).map(item => item.trim()).map(item => item[0]).join('').toUpperCase().split('').sort().join('');
  if (!va.length) {return false}else{return va}
}
