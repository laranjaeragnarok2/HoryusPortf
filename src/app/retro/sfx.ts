// ============================================
// RETRO SFX ENGINE — Web Audio API
// All sounds generated programmatically
// ============================================

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtx;
}

// Resume context after user interaction (browser policy)
export function resumeAudio() {
    const ctx = getCtx();
    if (ctx.state === "suspended") {
        ctx.resume();
    }
}

// ============================================
// 1. BOOT / MODEM SOUND
// Dial-up modem style with frequency sweep
// ============================================
export function playBootSound() {
    const ctx = getCtx();
    const now = ctx.currentTime;
    const duration = 2.5;

    // Main oscillator - frequency sweep
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(800, now);
    filter.Q.setValueAtTime(5, now);

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.linearRampToValueAtTime(1200, now + 0.3);
    osc.frequency.linearRampToValueAtTime(600, now + 0.5);
    osc.frequency.linearRampToValueAtTime(2400, now + 0.8);
    osc.frequency.setValueAtTime(2400, now + 1.0);
    osc.frequency.linearRampToValueAtTime(1800, now + 1.5);
    osc.frequency.linearRampToValueAtTime(1200, now + 2.0);
    osc.frequency.linearRampToValueAtTime(300, now + duration);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 0.05);
    gain.gain.setValueAtTime(0.06, now + duration - 0.5);
    gain.gain.linearRampToValueAtTime(0, now + duration);

    // Noise burst at start
    const noiseLength = ctx.sampleRate * 0.3;
    const noiseBuffer = ctx.createBuffer(1, noiseLength, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseLength; i++) {
        noiseData[i] = (Math.random() * 2 - 1) * 0.3;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.04, now);
    noiseGain.gain.linearRampToValueAtTime(0, now + 0.3);

    // Beep tones (handshake)
    const beep1 = ctx.createOscillator();
    const beep1Gain = ctx.createGain();
    beep1.type = "sine";
    beep1.frequency.setValueAtTime(1000, now);
    beep1Gain.gain.setValueAtTime(0, now);
    beep1Gain.gain.setValueAtTime(0.08, now + 1.0);
    beep1Gain.gain.setValueAtTime(0, now + 1.1);
    beep1Gain.gain.setValueAtTime(0.08, now + 1.2);
    beep1Gain.gain.setValueAtTime(0, now + 1.3);
    beep1Gain.gain.setValueAtTime(0.08, now + 1.4);
    beep1Gain.gain.setValueAtTime(0, now + 1.5);

    // Connect
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    beep1.connect(beep1Gain);
    beep1Gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
    noise.start(now);
    noise.stop(now + 0.3);
    beep1.start(now);
    beep1.stop(now + 1.6);
}

// ============================================
// 2. HOVER BEEP — tiny blip
// ============================================
export function playHoverSound() {
    const ctx = getCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1800 + Math.random() * 400, now);
    osc.frequency.linearRampToValueAtTime(1200, now + 0.06);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
}

// ============================================
// 3. CLICK SOUND — mechanical snap
// ============================================
export function playClickSound() {
    const ctx = getCtx();
    const now = ctx.currentTime;

    // Click transient
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    // Add noise click
    const clickLen = ctx.sampleRate * 0.02;
    const clickBuf = ctx.createBuffer(1, clickLen, ctx.sampleRate);
    const clickData = clickBuf.getChannelData(0);
    for (let i = 0; i < clickLen; i++) {
        clickData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (clickLen * 0.1));
    }
    const clickSource = ctx.createBufferSource();
    clickSource.buffer = clickBuf;
    const clickGain = ctx.createGain();
    clickGain.gain.setValueAtTime(0.15, now);

    osc.connect(gain);
    gain.connect(ctx.destination);
    clickSource.connect(clickGain);
    clickGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
    clickSource.start(now);
}

// ============================================
// 4. TYPING KEYSTROKE — individual key press
// ============================================
export function playKeystroke() {
    const ctx = getCtx();
    const now = ctx.currentTime;

    // Random pitch variation for natural feel
    const freq = 3000 + Math.random() * 2000;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = "highpass";
    filter.frequency.setValueAtTime(2000, now);

    osc.type = "square";
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    // Tiny noise burst
    const len = ctx.sampleRate * 0.015;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.15));
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(0.025, now);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.connect(nGain);
    nGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.03);
    src.start(now);
}

// ============================================
// 5. SECTION ENTER — deeper notification tone
// ============================================
export function playSectionSound() {
    const ctx = getCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(660, now + 0.1);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
}

// ============================================
// 6. ERROR / GLITCH SOUND
// ============================================
export function playGlitchSound() {
    const ctx = getCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.linearRampToValueAtTime(80, now + 0.15);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.15);

    // Noise
    const len = ctx.sampleRate * 0.1;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(0.04, now);
    nGain.gain.linearRampToValueAtTime(0, now + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);
    src.connect(nGain);
    nGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
    src.start(now);
}

// ============================================
// 7. AMBIENT HUM — toggleable drone
// ============================================
let ambientOsc: OscillatorNode | null = null;
let ambientGain: GainNode | null = null;
let ambientNoise: AudioBufferSourceNode | null = null;
let ambientNoiseGain: GainNode | null = null;
let isAmbientPlaying = false;

export function toggleAmbient(): boolean {
    const ctx = getCtx();

    if (isAmbientPlaying) {
        // Fade out
        if (ambientGain) {
            ambientGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
        }
        if (ambientNoiseGain) {
            ambientNoiseGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
        }
        setTimeout(() => {
            ambientOsc?.stop();
            ambientNoise?.stop();
            ambientOsc = null;
            ambientNoise = null;
        }, 600);
        isAmbientPlaying = false;
        return false;
    }

    // Create ambient
    const now = ctx.currentTime;

    // Low drone
    ambientOsc = ctx.createOscillator();
    ambientGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(200, now);

    ambientOsc.type = "sine";
    ambientOsc.frequency.setValueAtTime(55, now); // A1 note

    ambientGain.gain.setValueAtTime(0, now);
    ambientGain.gain.linearRampToValueAtTime(0.03, now + 1);

    ambientOsc.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);
    ambientOsc.start(now);

    // Subtle static noise
    const noiseLen = ctx.sampleRate * 4;
    const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) {
        noiseData[i] = (Math.random() * 2 - 1) * 0.15;
    }
    ambientNoise = ctx.createBufferSource();
    ambientNoise.buffer = noiseBuf;
    ambientNoise.loop = true;

    ambientNoiseGain = ctx.createGain();
    ambientNoiseGain.gain.setValueAtTime(0, now);
    ambientNoiseGain.gain.linearRampToValueAtTime(0.008, now + 1);

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.setValueAtTime(500, now);

    ambientNoise.connect(noiseFilter);
    noiseFilter.connect(ambientNoiseGain);
    ambientNoiseGain.connect(ctx.destination);
    ambientNoise.start(now);

    isAmbientPlaying = true;
    return true;
}

export function getAmbientState(): boolean {
    return isAmbientPlaying;
}

// ============================================
// 8. COUNTER TICK — for the visitor counter
// ============================================
export function playCounterTick() {
    const ctx = getCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(6000, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.01);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.01);
}
