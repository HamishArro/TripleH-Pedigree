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

const expect = (actual) => ({
  toEqual: (expected) => {
    if (actual === expected){
      return "PASS";
    };
    return "FAIL";
  }
})
// - to throw errors
