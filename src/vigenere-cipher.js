import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
constructor(direction = true){
     this.direction = direction
   }
   encrypt(message = '',key = '') {
    if (message == ''|key == ''){
      throw Error('Incorrect arguments!')
    }; 
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (message.length > key.length){
      key = key.repeat(Math.ceil(message.length/key.length));
    }  
     let result = '';
    let codeA = 'A'.charCodeAt(0);  
    let count = 0;
    for (let i = 0;i<message.length;i++){
      if ((message[i] >='A' && message[i] <='Z')|(message[i] >='a' && message[i] <='z')){
        let basicPosition = message.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(count)-codeA;

        let newPosition = basicPosition+shift;
        let newSymbol = String.fromCharCode(codeA +(basicPosition+shift)%26);
        result+=newSymbol; 
        count+=1;
      }else{
        result+=message[i];
      }
    }
   return (this.direction?result:result.split('').reverse().join(''));
  }
  decrypt(encryptedMessage = '',key = '') {
  if (encryptedMessage == ''|key == ''){
      throw Error('Incorrect arguments!')
    }; 
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    if (encryptedMessage.length > key.length){
      key = key.repeat(Math.ceil(encryptedMessage.length/key.length));
    }  
     let result = '';
    let codeA = 'A'.charCodeAt(0);  
    let count = 0;
    for (let i = 0;i<encryptedMessage.length;i++){
      if ((encryptedMessage[i] >='A' && encryptedMessage[i] <='Z')|(encryptedMessage[i] >='a' && encryptedMessage[i] <='z')){
        let basicPosition = encryptedMessage.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(count)-codeA;

        let newPosition = basicPosition+shift;
        let newSymbol = String.fromCharCode(codeA + (basicPosition- shift + 26)%26);
        result+=newSymbol; 
        count+=1;
      }else{
        result+=encryptedMessage[i];
      }
    }
   return (this.direction?result:result.split('').reverse().join(''));
  }
}
