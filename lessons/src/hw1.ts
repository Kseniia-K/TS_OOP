
// console.log("Это не относится к КТ");
// type Time = number;

// function totalTime(lapTimes: Time[]): Time {
//   const _lapTimes = lapTimes.slice();
// 	_lapTimes.shift(); // первый, разогревающий круг, не учитываем
// 	return _lapTimes.reduce((a, b) => a + b);
// }

// function avgTime(lapTimes: Time[]): Time {
// 	let time: number = totalTime(lapTimes);
//   const _lapTimes = lapTimes.slice();
//   _lapTimes.shift();
// 	let laps: number = _lapTimes.length;
// 	return Math.round((time / laps) * 100) / 100;
// }

// let lapTimes: Time[] = [];
// lapTimes.push(31.0);
// lapTimes.push(120.9);
// lapTimes.push(21.1);
// lapTimes.push(21.3);
// console.log("Общее время:", totalTime(lapTimes));
// console.log("Среднее время:", avgTime(lapTimes));