'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to return any value thats passed through it completely unchanged.
 * 
 * @param {Value} value: the value that is passed through the function.
 * 
 * @returns {Value}: returns the value unchaged
 */
 function identity(value) {
    return value;
};

module.exports.identity = identity;

/**
 * typeOf: Designed to return the data type of the value passed through in string form.
 * 
 * @param {Value} value: the value that is passed through the function.
 * 
 * @returns{String}: returns the datatype of the value argument in string form.
 */
 function typeOf(value) {
    if(Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
    } else {
        return typeof value;
    }
};

module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first elements of an array that's passed through it depending 
 * on whether or not the second argument is a number or not.
 * 
 * @param {Array} collection: the collection the function looks at to see whether it is an
 * array or not.
 * @param {Number}: the argument that will determine how many first elements from the array, if any, 
 * will be returned from the array.
 * 
 * @return: returns first element of array if 2nd arg is NaN or not given. Otherwise if it is 
 * a number, it will return that many elements from the front of the array.  And if it's not an array, 
 * it will return an empty array.
 */
 function first(collection, number){
    let emptyArray = [];
    if (!Array.isArray(collection) || number < 0){
        return emptyArray;
    } else if (typeof number != "number"){
        return collection[0];
    } else if (number > collection.length) {
        return collection;
    } else if (typeof number == "number"){
        return collection.slice(0, number)
    }
};

module.exports.first = first;

/**
 * last: Designed to return the last elements of an array that's passed through it depending 
 * on whether or not the second argument is a number or not.
 * 
 * @param {Array} collection: the collection the function looks at to see whether it is an
 * array or not.
 * @param {Number}: the argument that will determine how many of the last elements from the array, if any, 
 * will be returned from the array.
 * 
 * @return: returns the last element of array if 2nd arg is NaN or not given. Otherwise if it is 
 * a number, it will return that many elements from the end of the array.  And if it's not an array, 
 * it will return an empty array.
 */
 function last(collection, num) {
    var emptyArr = [];

    if(!Array.isArray(collection) || num < 0){
        return emptyArr;
    } else if(typeof num !== "number"){
        return collection[collection.length - 1];
    } else if (num > collection.length){
        return collection;
    } else if (typeof num === "number"){
        return collection.splice(collection.length - num, num);
    }
};

module.exports.last = last;

/**
 * indexOf: Designed to take an array and value and return the index of the array that is the first
 * occurance of the value. And return -1 if the value isn't in the array.
 * 
 * @param {Array} collection: the array the function loops through to search for first occurance of
 * the second argument value.
 * @param {Value} value: any value that is compared to all values in the first argument array to see
 * if it occurs in it. 
 * 
 * @return: Returns the index of the value inside the array if it occurs. If it doesn't occur it will
 * return -1.
 */
 function indexOf(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        } 
    }
    return -1;
};

module.exports.indexOf = indexOf;

/**
 * contains: Designed to take an array and value and return true if value is contained in the array or
 * false otherwise.
 * 
 * @param {Array} collection: the array the function loops through to see if the value being passed through
 * is contained inisde.
 * @param {Value} value: The value that is being looked for inside the array.
 * 
 * @return: Returns the boolean true if value is contained inside array, false otherwise.
 */
 function contains(collection, value){
     return collection.includes(value) ? true : false;
};

module.exports.contains = contains;

/**
 * unique: Designed to take an array and return a new array with all duplicate elements from the original 
 * array removed.
 * 
 * @param {Array} collection: The collection that the function searches to remove duplicates.
 * 
 * @return: Returns new array with all duplicates from array argument removed.
 */
 
 function unique(collection) {
    var newArr = [];
        for (var i = 0; i < collection.length; i++)
            if (newArr.indexOf(collection[i]) === -1 && collection[i] !== "")
                newArr.push(collection[i]);
        return newArr;
};

module.exports.unique = unique;

/**
 * filter:  Designed to call a test function to see if the values in an array that's passed through are truthy.
 * 
 * @param {Array} collection: The collection passed through to see if values are true.
 * @param {Func} function: The function called to test the truthiness of the arrays values.
 * 
 * @return: Returns a new array with all truthy values from the array argument.
 */
 
function filter(array, func) {
  var arrNew = [];
  array.forEach(function(value, i, arr){
      if (func(value, i, array)) {
          arrNew.push(value);
      }
  })
    return arrNew;
};

module.exports.filter = filter;

/**
 * reject:  Designed to call a test function to see if the values in an array that's passed through are false.
 * 
 * @param {Array} collection: The collection passed through to see if values are false.
 * @param {Func} function: The function called to test the falsiness of the arrays values.
 * 
 * @return: Returns a new array with all rejected values from the array argument.
 */
 
function reject(array, func) {
    var result = [];
    for(var i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            result.push(array[i]);
        }
    }
    return result;
};

module.exports.reject = reject;

/**
 * partition: Designed to loop through array and return a new array with 2 sub arrays; one with all truthy
 * values and one with all falsy values.
 * 
 * @param {Array} collection: The collection looped through to filter out all truthy and falsy values.
 * @param {Func} function: The function that is called to filter the values from the array.
 * 
 * @return: Returns new array with 2 sub arrays; one with all truthys and one with all falsys.
 */
 
function partition(collection, func) {
    var arrTrue = [];
    var arrFalse = [];
    var arrNew = [];
      
  for (var i = 0; i < collection.length; i++) {
      var result = func(collection[i], i, collection);
      if (result === true) {
        arrTrue.push(collection[i]);
      } else if (result === false) {
        arrFalse.push(collection[i]);
      } 
  }
  arrNew.push(arrTrue, arrFalse);
  return arrNew;
};

module.exports.partition = partition;

/**
 * map: Designed to loop through an array or object and return a new array of values for whatever the test function calls for.
 * 
 * @param {Collection} collection: The collection whether an array or object that is looped through.
 * @param {Func} function: The test function that is called to test something to pass all values that pass that test into new array.
 * 
 * @return: Returns a new array with values that pass the test function.
 */
 function map(collection, func) {
    var newArr = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            var result = func(collection[i], i, collection); 
                if (result) {
                    newArr.push(result);
                }
        }
    }
    else {
        for (var key in collection) {
            var result2 = func(collection[key], key, collection);
            if (result2) {
                newArr.push(result2);
            }
        }
    }
    return newArr;
};

module.exports.map = map;

/**
 * pluck: Designed to take an object and a property and return the values from array that match the property argument into a new array.
 * 
 * @param {Collection} collection: The object that is mapped through to pull the values that match the property.
 * @param {Property} key property: The property that is passed through to match to the propertis in the object argument.
 * 
 * @return: Returns new array with all values from object that had a matching property from the property argument.
 */
 
 function pluck(collection, property) {
    
    var result = collection.map(function(val, index, array){ 
           return val[property]
        });
    return result;
};
 
 module.exports.pluck = pluck;
 
 /**
  * every: Designed to return true or false if every element from a collection is truthy or falsy.
  * 
  * @param {Collection} collection: The array or object that is searched through to test if every elements are truthy or falsy.
  * @param {Test} function: The test function that tests if the collection is all truthy or falsy.
  * 
  * @return: Returns boolean if tests are passed.
  */
  
  function every(collection, func){
    if(!func){
        for(var i = 0; i < collection.length; i++){
            if(!collection[i]){
                return false;
            }
        }
        return true;
    }
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false;
                } 
            }
            return true;
        } else if (typeof collection === "object"){
            for(var key in collection){
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
            return true;
        }
};

module.exports.every = every;

/**
  * some: Designed to return true or false if some elements from a collection is truthy or falsy.
  * 
  * @param {Collection} collection: The array or object that is searched through to test if some elements are truthy or falsy.
  * @param {Test} function: The test function that tests if some of the collection is truthy or falsy.
  * 
  * @return: Returns boolean if tests are passed.
  */
  
 function some(collection, func){
    if(!func){
        for(var i = 0; i < collection.length; i++){
            if(collection[i]){
            return true;
        }
    }
    return false;
}
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            if(func(collection[i], i, collection)){
                return true;
            } 
        }
        return false;
    } else if (typeof collection === "object"){
        for(var key in collection){
            if(func(collection[key], key, collection)){
                return true;
            }
        }
        return false;
    }
}

module.exports.some = some;
  
  /**
   * reduce: Designed to reduce elements in an array down to one element. Or to return the sum of all elements in the array.
   * 
   * @param {Array} collection: The array that is looped through to reduce its elements.
   * @param {Func} Function: The test function that is called to return a value used as "previous result" for next iteration in loop.
   * @param {Seed} Seed: The starting point for where the test function should begin after first iteration.
   * 
   * @return: Returns one reduced value of all elements from array.
   */
   function reduce(collection, func, seed){
    if (seed === undefined) {
        seed = collection[0];

        for(var i = 1; i < collection.length; i++){
            seed = func(seed, collection[i], i)
        }
    } else {
        for(var i = 0; i < collection.length; i++){
            seed = func(seed, collection[i], i);
        }
    }
    return seed;
};

module.exports.reduce = reduce;

/**
 * extend: Designed to copy properties from any number of objects into the first object passed through.  If multiple objects are passed
 *  through, they are copied in the order in which they are passed.
 * 
 * @param {Object} first object: The object that all other objects' properties are copied into.
 * @param {Object} second object: The object whose properties are passed into the first object argument.
 * @param {Object} third object: Any other number of objects can be passed through and copied into the first object.
 * 
 * @return: Returns the first object with all copied properties from the other objects inside of it in order.
 */
 
 function extend(obj1, obj2){

    var args = Array.from(arguments)
    
    Object.assign(...args);
    
    return args[0];
};

module.exports.extend = extend;
