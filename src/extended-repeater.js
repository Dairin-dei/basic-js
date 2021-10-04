import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
 
  let addStr = '';

  let addition = '';
  try{
    if (options.addition === null){
       addition = 'null';
    }else if (options.addition === false){
       addition = 'false';   
    }else if (options.addition != undefined){
      addition = options.addition;
    }
  }
  catch{
    if (options.addition != undefined){
      addition = options.addition;
    }
  }
   if (addition!=''){

      addition = String(options.addition);
    if (options.additionRepeatTimes != undefined){
      addStr = (addition+(options.additionSeparator != undefined ? options.additionSeparator : '|')).repeat(options.additionRepeatTimes);

    }else{
        addStr = addition+(options.additionSeparator != undefined ? options.additionSeparator : '|')
    }  
  };
  addStr = addStr.slice(0,addStr.length-(options.additionSeparator != undefined ? options.additionSeparator.length : 1));

  let result = '';
  if (options.repeatTimes != undefined){
    result = (str+addStr+(options.separator != undefined ? options.separator : '+' )).repeat(options.repeatTimes);

  }else{
    result = str+addStr+(options.separator != undefined ? options.separator : '+' )
  }  

  return result.slice(0,result.length - (options.separator != undefined ? options.separator.length : 1 ));
}
