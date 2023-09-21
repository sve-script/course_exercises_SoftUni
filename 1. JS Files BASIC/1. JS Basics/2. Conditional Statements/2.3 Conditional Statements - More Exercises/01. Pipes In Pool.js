function pipesInPool(input) {

    let poolVolume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let workerMisses = Number(input[3]);

    let pipe1 = p1 * workerMisses
    let pipe2 = p2 * workerMisses
    let totalPipeVolume = pipe1 + pipe2
    let volume = ((totalPipeVolume) / poolVolume) * 100

    if (totalPipeVolume <= poolVolume) {
        console.log(`The pool is ${volume}% full. Pipe 1: ${pipe1 / totalPipeVolume * 100}%. Pipe 2: ${pipe2 / totalPipeVolume * 100}%.`);
    } else {
        console.log(`For ${workerMisses} hours the pool overflows with ${totalPipeVolume - poolVolume} liters.`);
    }
}
pipesInPool([100,100,100,2.5])