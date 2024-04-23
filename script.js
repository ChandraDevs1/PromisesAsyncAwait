function Numbers(a, b) {
  return new Promise((resolve, reject) => {
    const DividedRes = a / b;
    if (b == 0) {
      reject(`Division by zero is not allowed`);
    } else if (DividedRes > 0) {
      resolve(`Result : ${DividedRes}`);
    } else {
      resolve(`Results in Negtive ${DividedRes}`);
    }
  });
}

function main() {
  Numbers(10, 2)
    .then((res) => console.log(res))
    .then(() => Numbers(22, 8))
    .then((res1) => console.log(res1))
    .then(() => Numbers(10, 0))
    .then((res2) => console.log(res2))
    .catch((err) => console.log(err))
    .then(() => Numbers(56, 27))
    .then((res3) => console.log(res3))
    .then(() => Numbers(862, 265))
    .then((res4) => console.log(res4))
    .then(() => Numbers(60, -32))
    .then((res5) => console.log(res5))
    .then(() => Numbers(78, 0))
    .then((res6) => console.log(res6))
    .catch((err) => console.log(err));
}

main();

