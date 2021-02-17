const testUnpacker = (log) => {

  let testDetails = document.getElementById("test-details");
  let failedNumber = 0, testNumber = 0;
  let testString = '';

  Object.keys(log).forEach(function (key) {
      console.log(log[key])
      pass = true;
      test = log[key];
      tempString = '';
      Object.keys(test).forEach(function (key) {
          console.log(test[key])
          if (test[key] !== true ) { pass = false; failedNumber += 1; tempString += `<p style="font-size:14px;">${key}</p>`}
      })
      if (pass === false) {
        testString += `<hr><p style="font-size:20px; font-weight:bold; color:#DC143C;">${key}</p>`;
        testString += tempString;
      }
      else { testString += `<hr><p style="font-size:20px; color:#66CD00;">${key}</p>`};
      testNumber += 1;
  })

  if (failedNumber > 0) {
    result = `<p style="font-size:24px; color:#DC143C;">${failedNumber} tests failed out of ${testNumber} test(s)</p>`
  }
  else {
    result = `<p style="font-size:24px; color:#66CD00;">All tests passed!</p>`
  }

  testDetails.innerHTML = result + testString
}
