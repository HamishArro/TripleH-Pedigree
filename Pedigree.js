const referee = (actual) => ({

  toEqual: (expected) => {
    if (actual === expected){ return "PASS" };
    return "FAIL";
  }

  ,notToEqual: (expected) =>  {
    if (actual === expected){ return "FAIL" };
    return "PASS";
  }

  ,toThrowError: (expectedError) => {
    try { actual()}
    catch(error) { if (expectedError === (error.message)) { return "PASS" };
      return "FAILED WRONG ERROR";
    }
  return "FAIL";
  }

  ,not: (matcher) => {
    // console.log(this)
    // console.log(referee.matcher)
    // if(matcher === "PASS") {
    //   return "FAIL"
    // } else {
    //   return "PASS"
    // }
  }

})
