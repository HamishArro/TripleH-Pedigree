const referee = (actual) => ({

  toEqual: (expected) => {
    if (actual === expected){ return true };
    return false;
  }

  ,toThrowError: (expectedError) => {
    try { actual()}
    catch(error) {
       if (expectedError === (error.message)) { return true };
      return error;
    }
  return false;
  }

  ,not: function(matcher) {
    this.f = new Function(`return this.${matcher}`)
    returnValue = this.f()
    if(typeof returnValue === 'boolean') {
      return !returnValue
    } else { return returnValue }
  }

})
