console.log('Result of 1', [1, 2, 3] + [1, 3, 4]);

const obj = {
    a: 'one',
    b: 'two',
    a: 'three'
}

console.log('Result of 2', obj);

const num = [1, 2, 3, 4, 5];
const [x, ...y] = num;
console.log('Result of 3', x, y);

console.log('Result of 4', +true);
console.log('Result of 5', !"sai");

console.log('Result of 6', [] + []);
console.log('Result of 7', [1] + []);
console.log('Result of 8', [1] + "abc");
console.log('Result of 9', [] + "abc");

let nums1 = [1, 2, 3, 4, 5]
delete nums1[2]
console.log('Result of 10', nums1.length);

const str1 = "abc" + +"def"
console.log('Result of 11', str1);

const arr1 = [1, 2, 3];
arr1[5] = 6
console.log('Result of 12', arr1.length);

console.log('Result of 13', false || null || "Hello");
console.log('Result of 14', false && null && "Hello");

console.log('Result of 15', Boolean({}));
console.log('Result of 16', Boolean([]));
console.log('Result of 17', Boolean(""));
console.log('Result of 18', Boolean(new Boolean(false)));

console.log('Result of 19', '1' - - '1');

console.log('Result of 20', 0.1 + 0.2 === 0.3);

console.log('Result of 21', "2" > "10");
console.log('Result of 22', "2" > 10);

console.log('Result of 23', 5 && 0 || 7);


console.log('Result of 24', [20, 1, 3].sort());

console.log('Result of 25', 5 < 8 < 2);
console.log('Result of 26', 1 > 19 > 2);

console.log('Result of 27', true + 1);
console.log('Result of 28', true + "1");

console.log('Result of 29', "1" + "2");
console.log('Result of 30', "1" + 2);

var x1 = 10;
{
    var x1 = 20;
    console.log('Result of 30 -1', x1);
}
console.log('Result of 30 -2', x1);

console.log('Result of 31', +true);
console.log('Result of 32', +false);
console.log('Result of 33', +123);
console.log('Result of 34', +null);
console.log('Result of 34', +undefined);


let x2 = 1;
x2 = x2++;
console.log('Result of 35', x2);

console.log('Result of 36', 1 + 2 + "3");
console.log('Result of 37', "1" + 2 + 3);

const [a1, a2 = 5] = [10];
console.log('Result of 38', a1 + a2);

{
    var p1 = 1;
    let p2 = 2;
    const p3 = 3
}
console.log('Result of 39', p1, p2, p3);

let arr2 = [1, 2, 3]
console.log('Result of 40', arr2 instanceof Array);
console.log('Result of 41', arr2 instanceof Object);

if ([]) {
    console.log('Result of 43');
}

console.log('Result of 44', "2" > "10");
console.log('Result of 44', "2" > 10);

console.log('Result of 45', 1 + true);
console.log('Result of 46', 1 + false);
console.log('Result of 47', 1 - false);

const arr3 = [1, 2, 3];
const str3 = "1,2,3";
console.log('Result of 48', arr3 == str3);

console.log('Result of 49', "5" == 5);

let x1 = 10;
{
    let x1 = 100;
}
console.log('Result of 50', x1);

console.log('Result of 51', NaN == NaN);
console.log('Result of 52', null === undefined);
console.log('Result of 53', null == undefined);

console.log('Result of 54 - 1', res);
var res = "Hello";
console.log('Result of 54 - 2', res);

console.log('Result of 55', 10 + 2 * 3);
console.log('Result of 56', [1, 2, 3] + [1, 3, 4]);


function getAge(...args) {
    console.log('Result of 57', typeof args);
}
getAge(21);

var x3 = 1, y3 = x3 = typeof y3;
console.log('Result of 58', y3);

const x4 = [1]
const y4 = [2]
console.log('Result of 59', x4 + y4);

let newList = [1].push(2);
console.log('Result of 60', newList.push(3));

console.log('Result of 61', 0 || 1);
console.log('Result of 62', 0 && 1);
console.log('Result of 63', 1 || 2);
console.log('Result of 64', 1 && 2);

let val1 = 0;
val1++
console.log('Result of 65', val1);
console.log('Result of 66', ++val1);
console.log('Result of 67', val1);

console.log('Result of 68', 1 > 19 < 2);

let list1 = [1, 2, 3];
let list2 = list1;
list2.push(4)
console.log('Result of 69', list1);

console.log('Result of 70', data());

var data = function () {
    console.log('Result of 70 -1 ');
    return "1"
}

let x5 = {
    a: undefined,
    b: null
}
console.log('Result of 71', JSON.stringify(x5));

let s1 = "hello";
let s2 = new String("hello")
console.log('Result of 72', s1 == s2);
console.log('Result of 73', s1 === s2);

console.log('Result of 74', [] == ![]);

console.log('Result of 75', [] == 0);
console.log('Result of 76', [0] == [0]);

const x6 = "he".split(',')
const y6 = ["h", "e"]
console.log('Result of 77', x6 === y6);

let x7 = true;
let y7 = true;

console.log('Result of 78', x7 === y7);

console.log('Result of 79',5 && 1);
console.log('Result of 80', 5 || 1);

console.log('Result of 81', typeof null);
console.log('Result of 82', typeof undefined);
console.log('Result of 83', typeof NaN);
console.log('Result of 84', typeof function() {});

let x8 = 123;
let y8 = new Number(123);
console.log('Result of 85', x8 == y8, x8 === y8);

console.log('Result of 86', 1 + '2' + 3);

console.log('Result of 87', !!{});
console.log('Result of 88', !![]);

let x1= 1 || 2 && 3;
console.log('Result of 89', x1);

let valx = []

for (let i = 0; i < valx.length; i++) {
    setTimeout(()=> {
        console.log('Result of 90', i);
    }, [1000])
}

const x11 = "10"
console.log('Result of 90', x11++);

const arrx = [1,2,3,4]
console.log('Result of 91', 1 in arrx);
console.log('Result of 92', 2 in arrx);
console.log('Result of 93', 4 in arrx);

console.log('Result of 94', [1] == 1);

x12 = 100
console.log('Result of 95', x12);
var x12;

let op = (function(x) {
    delete x
    return x
})(3)

console.log('Result of 96',op);

const strs = "hello"
strs.data = 'val'
console.log('Result of 97',strs.data);


var arrA = [0]
var arrB =  arrA;
arrB[0] = 42
console.log('Result of 98',arrA);
console.log('Result of 99',arrB);

console.log("Result of 100",0 || 1);
console.log("Result of 101",1 || 2);

let a = true
let b = true
let c = false
console.log('Result of 102', a && b || c);


const p = {a: 1, b: 2}
const q = {a: 1, b: 2}

console.log("Result of 103", p==q);
console.log("Result of 104", p===q);

console.log('Result of 105', {} == {});
console.log('Result of 106', {} === {});


let xp = 1;
let yp = 2

console.log('Result of 107', xp++ + ++yp);

const ab = [1,2,3]
const cd = [1,2,3]

console.log('Result of 108', ab == cd);
console.log('Result of 109', ab === cd);

console.log('Result of 110',2 + 2);
console.log('Result of 111', "2" + "2");
console.log('Result of 112',2 + 2 - 2);
console.log('Result of 113', "2" + "2" - "2");
console.log('Result of 114', 4 + "2" + 2 + 4 + "25" + 2 + 2);

console.log('Result of 115', 1 < 2 < 3);
console.log('Result of 116', 1 > 2 > 3);


const cx = {
    a: undefined
}
console.log('result of 117',"a" in cx)

console.log('Result of 118', {} + {});

const objx = {
    a: 10,
    f: () => this.a
}
console.log('Result of 119',objx.f());

let {length} = "sai"
console.log('Result of 120',length)

const objy = {}
objy[1] = "one";
objy["1"] = "one";
console.log('Result of 121',objy)

var aaa = 10;
let aaa = 20;
console.log('Result of 122',aaa)

let xxx = "8";
let yyy = 1
console.log('Result of 123',xxx + yyy + 1)

const _x1 = 8 ?? 2 || 3;
console.log(_x1);

console.log(0 || "Hi");
console.log(0 ?? "Hi");

