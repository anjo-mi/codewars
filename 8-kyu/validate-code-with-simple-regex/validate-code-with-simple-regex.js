 
function validateCode (code) {
  code = code.toString();
  return code.startsWith('1') ? true : 
         code.startsWith('2') ? true : 
         code.startsWith('3') ? true : false;
}