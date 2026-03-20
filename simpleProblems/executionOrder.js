const function1 = () => {
    console.log('Script start');

    Promise.resolve().then(() => {
        console.log('Promise 1');
    }).then(() => {
        console.log('Promise 2');
    });

    console.log('Script end');

}

const function2 = () => {


    console.log('Start');

    setTimeout(() => {
        console.log('Timeout 1');
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise 1');
    }).then(() => {
        console.log('Promise 2');
    });

    setTimeout(() => {
        console.log('Timeout 2');
    }, 0);

    console.log('End');
}

const function3 = () => {
    console.log('Start');

    setTimeout(() => {
        console.log('Timeout 1');
        Promise.resolve().then(() => {
            console.log('Promise inside Timeout 1');
        });
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise 1');
    });

    console.log('End');
}

const function4 = () => {
    console.log('A'); // Synchronous

    setTimeout(() => {
        console.log('B'); // Macrotask
    }, 0);

    console.log('C'); // Synchronous

}

const function5 = () => {
    console.log('A');

    setTimeout(() => {
        console.log('B'); // Macrotask
    }, 0);

    Promise.resolve().then(() => {
        console.log('C'); // Microtask
    });

    console.log('D');
}

const function6 = () => {


    Promise.resolve().then(() => {
        console.log('A');
        Promise.resolve().then(() => console.log('B'));
    });

    console.log('C');
}

const function7 = () => {
    setTimeout(() => console.log('A'), 0); // Macrotask
    setImmediate(() => console.log('B')); // Macrotask in Node.js

}

// const function8 = () => {
//     document.body.addEventListener('click', () => {
//         console.log('Click Event'); // Macrotask
//     });

//     Promise.resolve().then(() => console.log('Promise Resolved')); // Microtask
//     console.log('End');
// }

const function9 = () => {
    setTimeout(() => console.log('A'), 0);
    Promise.resolve().then(() => console.log('B'));
    setTimeout(() => console.log('C'), 0);
    Promise.resolve().then(() => console.log('D'));

}

const function10 = () => {
    console.log('A');

    setTimeout(() => {
        console.log('B');
        Promise.resolve().then(() => {
            console.log('C');
        });
    }, 0);

    Promise.resolve().then(() => {
        console.log('D');
        setTimeout(() => {
            console.log('E');
        }, 0);
    });

    console.log('F');
}

const function11 = () => {
    console.log('1');

    setTimeout(() => {
        console.log('2');
        Promise.resolve().then(() => {
            console.log('3');
        }).then(() => {
            console.log('4');
        });
    }, 0);

    Promise.resolve().then(() => {
        console.log('5');
    }).then(() => {
        console.log('6');
    });

    console.log('7');

}

const function12 = () => {
    console.log('Start');

    setTimeout(() => {
        console.log('Timeout 1');
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise 1');
        setTimeout(() => {
            console.log('Timeout 2');
        }, 0);
        return Promise.resolve();
    }).then(() => {
        console.log('Promise 2');
    });

    console.log('End');
}

const function13 = () => {
    setTimeout(() => {
        console.log('Timer 1');
        Promise.resolve().then(() => {
            console.log('Microtask 1');
            Promise.resolve().then(() => {
                console.log('Microtask 2');
            });
        });
    }, 0);

    Promise.resolve().then(() => {
        console.log('Microtask 3');
    });

    console.log('Main Task');

}

const function14 = () => {
    console.log('Start');

    setTimeout(() => {
        console.log('Timeout 1');
        Promise.resolve().then(() => {
            console.log('Promise 1');
        }).then(() => {
            console.log('Promise 2');
        });
    }, 0);

    Promise.resolve().then(() => {
        console.log('Promise 3');
        setTimeout(() => {
            console.log('Timeout 2');
        }, 0);
        return Promise.resolve();
    }).then(() => {
        console.log('Promise 4');
    });

    console.log('End');
}

function14();