const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');

// for the circle

const circle = document.querySelector('circle');
// getting the radius property of the svg circle
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// setting the perimtere of the svg
circle.setAttribute('stroke-dasharray', perimeter);

// variables to help in the timer class for calculations

let currentOffset = 0;
// creating am instance of our class timer.

const timer = new Timer(durationInput, startButton, pauseButton, {
	// Optional Callbacks that will be used...
	onStart() {
		console.log('Timer has Started');
	},

	onComplete() {
		console.log('Timer has stopped');
	},

	onTick() {
		circle.setAttribute('stroke-dashoffset', currentOffset);
		currentOffset -= 5;
	}
});
