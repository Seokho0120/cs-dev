// console.time("test")
// let sum = 0;
// for(let i = 0; i < 1000000; i++){
// sum += 1; }
// console.timeEnd("test")

const n = 5;

// 첫 번째 루프
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (true) console.log(k);
    }
  }
}

// 두 번째 루프
for (let i = 0; i < n; i++) {
  if (true) console.log(i);
}

