Planning for it and describe
----------

### it

`it('does something', function() { expect(...)... })`  
* `log`s 'does something'
* `log`s 'PASS'/'FAIL' (output of `expect`)

```javascript

new testLog hash
it ...
  new itExpectResults hash
  expect...
  itExpectResults[expect 1] = expect result 1 [PASS/FAIL] [TRUE/FALSE?]
  expect...
  itExpectResults[expect 2] = expect result 2
  ...

testLog[it description] = itExpectResults

it ...


```


### it

`context('context of the code you are testing', function() { it(...) })`  
-->
