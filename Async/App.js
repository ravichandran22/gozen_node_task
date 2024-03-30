function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async operation 1 completed');
        }, 2000);
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async operation 2 completed');
        }, 1500);
    });
}

function asyncOperation3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async operation 3 completed');
        }, 1000);
    });
}

async function executeSequentially() {
    try {
        const result1 = await asyncOperation1();
        console.log(result1);

        const result2 = await asyncOperation2();
        console.log(result2);

        const result3 = await asyncOperation3();
        console.log(result3);

        console.log('All asynchronous operations completed sequentially');
    } catch (error) {
        console.error('Error:', error);
    }
}

async function executeInParallel() {
    try {
        const [result1, result2, result3] = await Promise.all([
            asyncOperation1(),
            asyncOperation2(),
            asyncOperation3()
        ]);

        console.log(result1);
        console.log(result2);
        console.log(result3);

        console.log('All asynchronous operations completed in parallel');
    } catch (error) {
        console.error('Error:', error);
    }
}

executeSequentially();
executeInParallel();
