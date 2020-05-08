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

let duration;
// creating an instance of our class timer.

const timer = new Timer(durationInput, startButton, pauseButton, {
	// Optional Callbacks that will be used...
	onStart(totalDuration) {
		duration = totalDuration;
	},

	onComplete() {
		console.log('Timer has stopped');
	},

	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	}
});
