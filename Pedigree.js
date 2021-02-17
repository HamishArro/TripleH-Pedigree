var allTestLog = [];
var testLog = [];

const expect = (actual) => ({

  toEqual: (expected) => {
    if (actual === expected) { return testLog[`expect(${actual}).toEqual(${expected})`] = true }
    else { return testLog[`expect(${actual}).toEqual(${expected})`] = false };
  },

  notToEqual: (expected) => {
    if (actual === expected) { testLog[`expect(${actual}).toEqual(${expected})`] = false }
    else { testLog[`expect(${actual}).toEqual(${expected})`] = true };
  },

  toThrowError: (expectedError) => {
    try { actual() }
    catch(error) {
       if (expectedError === (error.message)) { return testLog[`expect(${actual}).toThrowError(${expectedError})`] = true  };
       {return testLog[`expect(${actual}).toThrowError(${expectedError})`] = error ;};
    }
    return testLog[`expect(${actual}).toThrowError(${expectedError})`] = false;
  },

  not: function(matcher) {
    this.f = new Function(`return this.${matcher}`);
    // console.log('the functions returns');
    // console.log(this.f());
    // console.log('end this.f()');
    // console.log(this.f() ? (this.f() === false ? 'truely false true' : 'truely false false') : 'false' );
    // return (this.f() ? false : ( this.f() === false ? true : this.f() ) );
    return testLog[`expect(${actual}).${matcher}`] = (this.f() ? false : ( this.f() === false ? true : this.f() ) );


    // if(typeof returnValue === 'boolean') { tribute to hugh
    //   return !returnValue;
    // } else { return returnValue }
  }

})

const it = (description, test) => {

  // grab befores.
  testLog = [];
  test();
  allTestLog[description] = testLog;
  clear();

}
