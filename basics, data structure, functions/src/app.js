

let result = 0;
function sums(arrs) {
  for (let elems of arrs) {
    result += elems;
  }
  return result;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(sums(arr));
