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
    catch(error) {
       if (expectedError === (error.message)) { return "PASS" };
      return "FAILED WRONG ERROR";
    }
  return "FAIL";
  }

  ,not: function(matcher) {
    this.f = new Function(`return this.${matcher}`)
    switch(this.f()) {
    case "PASS":
      return "FAIL";
    case "FAIL":
      return "PASS";
    default:
      return this.f();
    }
  }

})
