var allTestLog = [];
var testLog = [];

const expect = (actual) => ({

  toEqual: (expected) => {
    console.log("inside toEqual");
    if (actual === expected) { testLog.push(true) }
    else { testLog.push(false) };
  },

  toThrowError: (expectedError) => {
    try { actual()}
    catch(error) {
       if (expectedError === (error.message)) { return true };
      return error;
    }
  return false;
  },

  not: function(matcher) {
    this.f = new Function(`return this.${matcher}`)
    returnValue = this.f();
    if(typeof returnValue === 'boolean') {
      return !returnValue;
    } else { return returnValue }
  }

})

const it = (description, test) => {

  testLog = [];
  console.log(testLog);
  test();
  console.log(testLog);
  allTestLog[description] = testLog;

}
