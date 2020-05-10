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
miniRamda.assocPath(['a', 'b', 'c'], 42, {a: 5});
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
**identity (value)**
A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.
```sh
const foo = miniRamda.applyTo("Gayathri");
foo(miniRamda.identity);
>> Gayathri
```

**add (number)(number)**
Adds two numbers

```sh
miniRamda.add(1)(2);
>> 3
```

**dupe (Array)**
returns ```true``` if there is a duplicate in an array

```sh
miniRamda.dupe([1,2,1])
>> true
miniRamda.dupe([1,2,3])
>> false
```

**avgPair (Array,number)**
returns ```true``` if given average is equal to any of the averages of the pair inside the array
```sh
miniRamda.avgPair([1,2,1],1.5)
>> true
miniRamda.avgPair([1,2,3],3.8)
>> false
```

**maxSubArray (Array,number)**
returns a maximum value among all the totals in a given window length
```sh
miniRamda.maxSubArray([1,4,2,10,23,3,1,0,20],2)
>> 33
miniRamda.maxSubArray([1,2,3],2)
>> 5
```

**isSubseq (string 1, string 2)**
returns ```true``` if string 1 is a substring of string 2
```sh
miniRamda.isSubseq("sing","sting")
>> true
```
**cond**
Returns a function, fn, which encapsulates ```if/else, if/else, ...``` logic. It takes a list of [predicate, transformer] pairs. All of the arguments to ```fn``` are applied to each of the predicates in turn until one returns a "truthy" value, at which point ```fn``` returns the result of applying its arguments to the corresponding transformer. If none of the predicates matches,``` fn``` returns undefined.

```sh
const fn = miniRamda.cond([
  [(x)=>x===0,()=>'The value 0 is minimum'],
  [(x)=>x===100,()=>'The value 100 is maximum'],
  [(x)=>x,temp=>'neither minimum nor maximum']
]);

fn(0) >> The value 0 is minimum
fn(100) >> The value 100 is maximum
fn(50) >> Neither minimum nor maximum
```
