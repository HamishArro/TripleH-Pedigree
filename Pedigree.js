// - to Equal /

// function equalTo(a,b){
//   if (a === b){
//     return "PASS"
//   }
//   return "FAIL"
// };

//  assert(actual) => {
//   toEqual: function(expected) {
//     if (actual === expected){
//       return "PASS";
//     };
//     return "FAIL";
//   }
// }

const referee = (actual) => ({
  toEqual: (expected) => {
    if (actual === expected){
      return "PASS";
    };
    return "FAIL";
  }


  ,toThrowError: (expectedError) => {
    try {
      actual()
    } catch(error) {
      if (expectedError === (error.message)){
        return "PASS";
      };
      return "FAILED WRONG ERROR";
  }
  return "FAILED";
  }
})
