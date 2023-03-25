let str = '/organizations/:pathVariable/quests/:pathVariable2';

let arr = [1];
console.log(arr[0]);
let replaceObj = {};
console.log(typeof replaceObj);
console.log();
replaceObj['pathVariable'] = 'value1';
replaceObj['pathVariable2'] = 'value2';

let regExpMatchArray = str.matchAll(/\/:(\w*)/g);

let next = regExpMatchArray.next();
while (!next.done) {
  console.log(next.value[1]);
  next = regExpMatchArray.next();
}

str = str.replace(/\/:(\w*)/g, (...args) => {
  return '/' + replaceObj[args[1]];
});
console.log(str);
