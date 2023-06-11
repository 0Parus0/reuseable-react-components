**_ React doesn't render booleans, nulls, undefined _**
'hi there' ---> hi there
40 ----> 40
true ---->
false ---->
null ---->
undefined ---->

**_ JS Boolean EXpressions _**

|| gives back the first truthy value and if both are falsy value then last falsy value

'hi' || 'there ==> 'hi' first truthy value
false || 'there' ==> 'there' first truthy value
0 || true ==> true first truthy value
50 || null ==> 50 first truthy value
false || null ==> null last falsy value if both the values are false

---

&& gives back the first falsy value or if all the values are truthy then the last truthy value

'hi' && 'there ==> there last truthy value
false && 'there' ==> false first falsy value
40 && 0 ==> 0 first falsy value
0 && true ==> 0 first falsy value
50 && null ==> null first falsy value
100 && 200 ==> last truthy value
