// Callback Version
// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Austin', function (err, temp) {
//     if (err) {
//       console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
// // Promise Version
// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }
//
// getTempPromise('Waco').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });

//-------------- CHALLENGE AREA --------------------------
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Check numbers and try again!');
        }
    });
}

addPromise(2, 3).then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});