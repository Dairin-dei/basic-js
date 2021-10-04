import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
   let regexp = /@([\w|-])+\.\w+$/;

   let result = email.match(regexp);
  
   if (result === null){
    return false
   };
  
 return result[0].slice(1)
}
