Testing Framework - PEDIGREE
-----

Include:
- to Equal
- to throw errors
- doubles
- empty/not_empty / nil/not_nil
- contain/ not_contain
- not function


// not: function(matcher) {
//   this.f = new Function(`return this.${matcher}`)
//   returnValue = this.f();
//   if(typeof returnValue === 'boolean') { tribute to hugh
//     return !returnValue;
//   } else { return returnValue }
// }
