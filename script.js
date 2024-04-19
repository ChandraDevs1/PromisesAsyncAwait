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

async function main() {
  try {
    const res = await Numbers(10, 2);
    console.log(res);
    const res1 = await Numbers(100, 2);
    console.log(res1);
    const res2 = await Numbers(34, 45);
    console.log(res2);
    const res3 = await Numbers(10, 2);
    console.log(res3);
    const res4 = await Numbers(10, 0);
    console.log(res4);
  } catch (error) {
    console.error(error);
  }
}

main();
