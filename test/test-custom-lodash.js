const expect = require('chai').expect
const customLodash = require('../my-lodash');
const lodashArr = require('lodash');

function square(n) {
    return n * n;
  }

function filtrFunc(o) { 
    return o.age < 40;
 }

 function Foo() {
    this.a = 1;
    this.b = 2;
  }
Foo.prototype.c = 3;

const filtrObj = { 'age': 1, 'active': true }
const filtrArr = ['active', false]
const filtrKey = 'active'

const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];
const usersForMap = [
    { 'user': 'barney' },
    { 'user': 'fred' }
  ];
const objectForOmit = { 'a': 1, 'b': '2', 'c': 3 };
const argsForOmit = ['a', 'c']

describe('Custom lodash', function() {
    describe('1. Zip', function(){
        it(`1) with same length arrays`, function() {
            const args = [['a', 'b'], [1, 2], [true, false]]
            const myLodash = customLodash.zip(...args)
            const lodash = lodashArr.zip(...args)
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with different length arrays`, function() {
            const args = [['a', 'b'], [1, 2], [true, false]]
            const myLodash = customLodash.zip(...args)
            const lodash = lodashArr.zip(...args)
            expect(myLodash).to.deep.equal(lodash)
        });
    });

    describe('2. Map', function(){
        it(`1) function with array`, function() {
            const myLodash = customLodash.map( [4, 8], square)
            const lodash = lodashArr.map( [4, 8], square)
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) function with object`, function() {
            const myLodash = customLodash.map({ 'a': 4, 'b': 8 }, square)
            const lodash = lodashArr.map( { 'a': 4, 'b': 8 }, square)
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) object with property`, function() {
            const myLodash = customLodash.map(usersForMap, 'user')
            const lodash = lodashArr.map(usersForMap, 'user')
            expect(myLodash).to.deep.equal(lodash)
        });
    });

    describe('3. Includes', function(){
        it(`1) array and search elememt`, function() {
            const myLodash = customLodash.includes([1, 2, 3], 1);
            const lodash = lodashArr.includes([1, 2, 3], 1);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) array, search elememt and start position`, function() {
            const myLodash = customLodash.includes([1, 2, 3], 1, 2);
            const lodash = lodashArr.includes([1, 2, 3], 1, 2);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) object and search value`, function() {
            const myLodash = customLodash.includes({ 'a': 1, 'b': 2 }, 1);
            const lodash = lodashArr.includes({ 'a': 1, 'b': 2 }, 1);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) string`, function() {
            const myLodash = customLodash.includes('abcd', 'bc');
            const lodash = lodashArr.includes('abcd', 'bc');
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('4. Find', function(){
        it(`1) with function `, function() {
            const myLodash = customLodash.find(users, filtrFunc);
            const lodash = lodashArr.find(users, filtrFunc);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with object`, function() {
            const myLodash = customLodash.find(users, filtrObj);
            const lodash = lodashArr.find(users, filtrObj);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) with array`, function() {
            const myLodash = customLodash.find(users, filtrArr);
            const lodash = lodashArr.find(users, filtrArr);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) with key`, function() {
            const myLodash = customLodash.find(users, filtrKey);
            const lodash = lodashArr.find(users, filtrKey);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('5. Filter', function(){
        it(`1) with function `, function() {
            const myLodash = customLodash.filter(users, filtrFunc);
            const lodash = lodashArr.filter(users, filtrFunc);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with object`, function() {
            const myLodash = customLodash.filter(users, filtrObj);
            const lodash = lodashArr.filter(users, filtrObj);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) with array`, function() {
            const myLodash = customLodash.filter(users, filtrArr);
            const lodash = lodashArr.filter(users, filtrArr);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) with key`, function() {
            const myLodash = customLodash.filter(users, filtrKey);
            const lodash = lodashArr.filter(users, filtrKey);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('6. Take', function(){
        const arr = [1, 2, 3]
        it(`1) without second param `, function() {
            const myLodash = customLodash.take(arr);
            const lodash = lodashArr.take(arr);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`1) with second param = 2`, function() {
            const myLodash = customLodash.take(arr, 2);
            const lodash = lodashArr.take(arr, 2);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`1) with second param = 5`, function() {
            const myLodash = customLodash.take(arr, 5);
            const lodash = lodashArr.take(arr, 5);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`1) with second param = 0`, function() {
            const myLodash = customLodash.take(arr, 0);
            const lodash = lodashArr.take(arr, 0);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('7. DropWhile', function(){
        it(`1) with function `, function() {
            const myLodash = customLodash.dropWhile(users, filtrFunc);
            const lodash = lodashArr.dropWhile(users, filtrFunc);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with object`, function() {
            const myLodash = customLodash.dropWhile(users, filtrObj);
            const lodash = lodashArr.dropWhile(users, filtrObj);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) with array`, function() {
            const myLodash = customLodash.dropWhile(users, filtrArr);
            const lodash = lodashArr.dropWhile(users, filtrArr);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`3) with key`, function() {
            const myLodash = customLodash.filter(users, filtrKey);
            const lodash = lodashArr.filter(users, filtrKey);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('8. Drop', function(){
        const arr = [1, 2, 3]
        it(`1) without second param `, function() {
            const myLodash = customLodash.drop(arr);
            const lodash = lodashArr.drop(arr);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`1) with second param = 2`, function() {
            const myLodash = customLodash.drop(arr, 2);
            const lodash = lodashArr.drop(arr, 2);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`1) with second param = 5`, function() {
            const myLodash = customLodash.drop(arr, 5);
            const lodash = lodashArr.drop(arr, 5);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`1) with second param = 0`, function() {
            const myLodash = customLodash.drop(arr, 0);
            const lodash = lodashArr.drop(arr, 0);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('9. Compact', function(){
        const arr = [0, 1, false, 2, '', 3, NaN, null, undefined]
        it(`1) different "false" params`, function() {
            const myLodash = customLodash.compact(arr);
            const lodash = lodashArr.compact(arr);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('10. Chank', function(){
        const arr = ['a', 'b', 'c', 'd']
        it(`1) with second param = 2`, function() {
            const myLodash = customLodash.chunk(arr, 2);
            const lodash = lodashArr.chunk(arr, 2);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with second param = 3`, function() {
            const myLodash = customLodash.chunk(arr, 3);
            const lodash = lodashArr.chunk(arr, 3);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('11. Merge', function(){
        const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
        const other = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
        const object1 = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
        it(`1) merge with 2 objects`, function() {
            const myLodash = customLodash.merge(object, other);
            const lodash = lodashArr.merge(object1, other);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) propertys in destination object dont change when merge object is changeing`, function() {
            const myLodash = customLodash.merge(object, other);
            const lodash = lodashArr.merge(object1, other);
            other.a[0].c = 'çhanged value'
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('12.Omit', function(){
        it(`1) with array of keys`, function() {
            const myLodash = customLodash.omit(objectForOmit, argsForOmit);
            const lodash = lodashArr.omit(objectForOmit, argsForOmit);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with strings as params`, function() {
            const myLodash = customLodash.omit(objectForOmit, ...argsForOmit);
            const lodash = lodashArr.omit(objectForOmit, ...argsForOmit);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('13. OmitBy', function(){
        it(`1) with function`, function() {
            const myLodash = customLodash.omitBy(objectForOmit, lodashArr.isNumber);
            const lodash = lodashArr.omitBy(objectForOmit, lodashArr.isNumber);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('14.Pick', function(){
        it(`1) with array of keys`, function() {
            const myLodash = customLodash.pick(objectForOmit, argsForOmit);
            const lodash = lodashArr.pick(objectForOmit, argsForOmit);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with strings as params`, function() {
            const myLodash = customLodash.pick(objectForOmit, ...argsForOmit);
            const lodash = lodashArr.pick(objectForOmit, ...argsForOmit);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('15. PickBy', function(){
        it(`1) with function`, function() {
            const myLodash = customLodash.pickBy(objectForOmit, lodashArr.isNumber);
            const lodash = lodashArr.pickBy(objectForOmit, lodashArr.isNumber);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
    describe('16. ToPairs', function(){
        it(`1) with function`, function() {
            const myLodash = customLodash.toPairs(new Foo);
            const lodash = lodashArr.toPairs(new Foo);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with object`, function() {
            const myLodash = customLodash.toPairs(objectForOmit);
            const lodash = lodashArr.toPairs(objectForOmit);
            expect(myLodash).to.deep.equal(lodash)
        });
        it(`2) with array`, function() {
            const myLodash = customLodash.toPairs(users);
            const lodash = lodashArr.toPairs(users);
            expect(myLodash).to.deep.equal(lodash)
        });
    });
});