//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const input = [2, 5, 1, 2, 3, 5, 1, 2, 4];

function test(input) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[input[i]] !== undefined) {
      console.log(input[i]);
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
}
test(input);

// for (let i = 0; i < array.length; i++) {
//   for (let q = 0; q < array.length; q++) {
//     if ((array[i] == array[q]) & (i != q)) {
//       //   console.log("found couple");
//       //   console.log(i + 1);
//       //   console.log(q + 1);
//       //   console.log(array[i]);
//       return array[i];
//     }
//   }
//   return undefined;
// }
