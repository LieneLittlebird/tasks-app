// const foo = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("failed");
//     }, 2000);
//   });
// };

// foo()
//   .then((data) => {
//     console.log("promise passed:", data);
//   })
//   .catch((err) => {
//     console.log("promise failed:", err);
//   });

// const bar = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("success");
//         }, 2000);
//     });
// };

// bar()
//     .then((data) => {
//         console.log("promise passed:", data);
//     })
//     .catch((err) => {
//         console.log("promise failed:", err);
//     });

// const callBar = async () => {
//     console.log("calling bar");
//     const result = await bar();
//     console.log("bar finished calling", result);
// };

// callBar();

// const foo = (callback) => {
//     setTimeout(() => {
//         console.log("logging from foo()");
//         callback();
//     }, 2000);
// };
// const baz = () => {
//     setTimeout(() => {
//         console.log("logging from baz()");
//         callback();
//     }, 1000);
// };
// const biz = () => {
//     setTimeout(() => {
//         console.log("logging from biz()");
//         callback();
//     }, 10);
// };

// const foo1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("logging from foo1()");
//             const name = "Pēteris";
//             resolve(name);
//         }, 2000);
//     });
// };
// const baz1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("logging from foo1()");
//             const lastName = "Bērziņš";
//             resolve(lastName);
//             // console.log("logging from baz1()");
//         }, 100);
//     });
// };
// const biz1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const age = "60";
//             resolve(age);
//         }, 10);
//     });
// };
// // foo();
// // baz();
// // biz();
// let prom1 = foo1()
//     .then((name) => {
//         console.log("Promise 1 resolved: " + name);
//         return baz1();
//     })
//     .then((lastName) => {
//         console.log("Promise 2 resolved: " + lastName);
//         return biz1();
//     })
//     .then((age) => {
//         console.log("Promise 3 resolved: " + age);
//         return biz1();
//     })
//     .finally(() => {
//         console.log("All done");
//     });
// // then izpildīsies, kad promise tiek piepildīts
// console.log(prom1);

// const callBar = async () => {
//     console.log("calling bar");
//     const result = await bar();
//     console.log("bar finished calling", result);
// };

const foo2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name = "Pēteris";
            resolve(name);
        }, 2000);
    });
};
const baz2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastName = "Bērziņš";
            resolve(lastName);
            // console.log("logging from baz1()");
        }, 100);
    });
};
const biz2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("vissSlikti.lv");
            return;
            const age = "60";
            resolve(age);
        }, 10);
    });
};

try {
    const name = await foo2();
    console.log(`name is: ${name}`);

    const lastName = await baz2();
    console.log(`lastName is: ${lastName}`);

    const age = await biz2();
    console.log(`age is: ${age}`);
} catch (err) {
    console.log("Whoops, something went wrong: " + err);
}
