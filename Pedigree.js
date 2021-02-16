var allTestLog = [];
var testLog = [];

const expect = (actual) => ({

  toEqual: (expected) => {
    if (actual === expected) { testLog[`expect(${actual}).toEqual(${expected})`] = true }
    else { testLog[`expect(${actual}).toEqual(${expected})`] = false };
  },

  notToEqual: (expected) => {
    if (actual === expected) { testLog[`expect(${actual}).toEqual(${expected})`] = false }
    else { testLog[`expect(${actual}).toEqual(${expected})`] = true };
  },

  toThrowError: (expectedError) => {
    testLog[`expect(${actual}).toThrowError(${expectedError})`] = false ;
    try { actual() }
    catch(error) {
       if (expectedError === (error.message)) { testLog[`expect(${actual}).toThrowError(${expectedError})`] = true  }
       else {testLog[`expect(${actual}).toThrowError(${expectedError})`] = error ;};
    }
  }

})

const it = (description, test) => {

  testLog = [];
  test();
  allTestLog[description] = testLog;

}
