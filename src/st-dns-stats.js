import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {

  
  let regexp = /\..+/;

  let temp = [];
    for (let i = 0; i<domains.length; i++){
      let word = domains[i];
       temp.push(word);
      while (true){
        let found = word.match(regexp);
        if (found!=null){
          temp.push(found[0]);
          word = word.slice(found.index+1);
        }else{
          break
        };
      };
    };
  regexp = /\..+$/;


  let temp2 = [];

  for (let i = 0; i<temp.length; i++){
    let arrWord = temp[i].split('.');
    arrWord.reverse();
    let gather = '';
    for (let j = 0; j<arrWord.length;j++){
      if (arrWord[j].length != 0){
      gather+='.'+arrWord[j]
      }
    }
    temp2.push(gather);
  }
temp2.sort((a,b)=>{return a.length - b.length;})

let set = Array.from(new Set(temp2));
let result = {};
for (let res of set){
  result[res] = temp2.filter(function(n){return n== res}).length
}
return result
}
