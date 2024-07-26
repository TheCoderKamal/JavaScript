let arr = [1, 2, 3, 4, 5];

arr.push(11);
arr.push(14);
arr.push(16);
arr.push(112);
arr.push(134);

arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();

arr.shift();
arr.shift();
arr.shift();
arr.shift();
arr.shift();

arr.unshift(12);
arr.unshift(15);
arr.unshift(18);
arr.unshift(113);
arr.unshift(136);

arr.splice(2, 1);

let sl = arr.slice(0, 2);

console.log(arr);
console.log(sl);