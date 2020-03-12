# mini_ramda

[![N|Solid](https://cdn.iconscout.com/icon/free/png-256/npm-2-569450.png)](https://www.npmjs.com/package/mini_ramda)

mini_ramda is a small collection of functions which will be useful for projects and other builds

## Installation

mini_ramda requires [Node.js](https://nodejs.org/) v4+ to run.

Install using the command given below:

```sh
$ npm i mini_ramda
```

In index.js 

```sh
let miniRamda = require('miniRamda')
```

## Functions

**assocPath(array, number, Object)**
Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.

```sh
miniRamda.assocPath(['x', 'y', 'z'], 42, {x: {y: {z: 0}}});
>> {x: {y: {z: 42}}}

// Any missing or non-object keys in path will be overridden
R.assocPath(['a', 'b', 'c'], 42, {a: 5});
>> {a: {b: {c: 42}}}
```
**merge(Object, Object)**
Create a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects, the value from the second object will be used.

```sh
miniRamda.merge({ 'name': 'Rohith', 'age': 20 }, { 'age': 21 });
>> { 'name': 'Rohith', 'age': 21 }
```

**append (value<any>, value<any>)**
Returns a new list containing the contents of the given list, followed by the given element.

```sh
miniRamda.append('tests', ['write', 'more']);
>> ['write', 'more', 'tests']
miniRamda.append('tests', []); 
>> ['tests']
miniRamda.append(['tests'], ['write', 'more']); 
>> ['write', 'more', ['tests']]
```

**applyTo (value<any>)**
Takes a value and applies a function to it.
This function is also known as the ```thrush``` combinator.

```sh
const foo = miniRamda.applyTo(42);
foo(miniRamda.identity);
>> 42
foo(miniRamda.add(1));
>> 43
```
**identity (value<any>)**
A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.
```sh
const foo = miniRamda.applyTo("Gayathri");
foo(miniRamda.identity);
>> Gayathri
```

**add (value<number>)(value<number>)**
Adds two numbers

```sh
miniRamda.add(1)(2); 
>> 3
```

**dupe (value<Array>)**
returns ```true``` if there is a duplicate in an array

```sh
miniRamda.dupe([1,2,1])
>> true
miniRamda.dupe([1,2,3])
>> false
```

**avgPair (value<Array>,value<number>)**
returns ```true``` if given average is equal to any of the averages of the pair inside the array
```sh
miniRamda.avgPair([1,2,1],1.5)
>> true
miniRamda.avgPair([1,2,3],3.8)
>> false
```

**maxSubArray (value<Array>,value<number>)**
returns a maximum value among all the totals in a given window length 
```sh
miniRamda.maxSubArray([1,4,2,10,23,3,1,0,20],2)
>> 33
miniRamda.maxSubArray([1,2,3],2)
>> 5
```

**isSubseq (value 1<string>, value 2<string>)**
returns ```true``` if value 1 is a substring of value 2
```sh
miniRamda.isSubseq("sing","sting")
>> true
```

