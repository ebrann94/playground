console.log('I am working');

const AudioContext = window.AudioContext || window.webkitAudioContext;
//Create audio context
const audioContext = new AudioContext();

// Get the audio element from the DOM
const audioElement = document.querySelector('audio');

// Pass it to the audio context
const track = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();

// Connect track to audioContext
track.connect(gainNode)
gainNode.connect(audioContext.destination);

const playButton = document.querySelector('button');
playButton.addEventListener('click', function() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }
}, false);

audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
    audioContext.suspend();
}, false);

// Add control to the gain node
const volumeControl = document.querySelector('#volume');
volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false);