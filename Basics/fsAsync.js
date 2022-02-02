const {readFile, writeFile} = require('fs');

/*

one way to do it

readFile('./content/1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});*/

/*
Returns buffer

readFile('./content/1.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});*/

/*
readFile('./content/1.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data
            .toString()
            .split('\n'))
    }
});*/

console.log('start')
readFile('./content/1.txt', 'utf8', (err, result1) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result1
    readFile('./content/subFolder/2.txt', 'utf8', (err, result2) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result2
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result2) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')

// Git commit verification issue