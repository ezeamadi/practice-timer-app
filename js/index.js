const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');

const timer = new Timer(durationInput, startButton, pauseButton, {
	// Optional Callbacks that will be used...
	onStart() {
		console.log('Timer has Started');
	},

	onComplete() {
		console.log('Timer has stopped');
	},

	onTick() {
		console.log('Timer is ticking');
	}
});
