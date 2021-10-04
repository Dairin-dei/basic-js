import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    let arrSearch = {};
    let arrResult = [];
    for (let i = 0;i<names.length;i++){
      let found = false;
      for (let key of Object.keys(arrSearch)){
        if (names[i] === key){
          found = true;
          let newValue = arrSearch[key]+1;
          arrSearch[key] = newValue;
          let newName = names[i]+'('+arrSearch[key]+')';
          arrResult.push(newName);
          arrSearch[newName] = 0;
          break;
        }
      }
      if (!found){
        arrSearch[names[i]] = 0;
        arrResult.push(names[i]);

      }
    }

   return arrResult
}
