// Timer Class

class Timer {
	// declare the constructor of the class
	constructor(durationInput, startButton, pauseButton, callbacks) {
		// assign the arguments in the constructor to the parameters whenever the constructor is called.
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		// In the constructor, we also assign the click events of the start and pause buttons to the methods of start and pause
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		// Start method starts the tick method
		this.tick(); // invoke the first one immediately so that users won't have to wait 1 full second to see timer start
		this.interval = setInterval(this.tick, 50); // counts down every 1 second. this.interval is used because we need tat same variable in the pause method to stop the timer.
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onTick) {
				this.onComplete();
			}
		} else {
			// get the time remaining from the input value in the html and re-assign it to the input value as the tick happens.
			this.timeRemaining = this.timeRemaining - 0.05;
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}

		// const timeRemaining = this.timeRemaining;
		// this.timeRemaining = timeRemaining - 1; will also work.
	};

	//GETTER AND SETTER FOR THE DURATION INPUT IN THE TICK METHOD.

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}

	/*
    
    // This approach will also work. 
    // getTime() {
    //     return parseInt(this.durationInput.value);
    // }
    // setTime(time) {
    //     this.durationInput.value = time;
    // }

    */

	pause = () => {
		// stop timer when paused.
		clearInterval(this.interval);
	};
}
