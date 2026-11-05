document.addEventListener("DOMContentLoaded", () => {

    // 1. Countdown Timer Logic (Target: Nov 11, 2026 23:59:00 WAT)
    const targetDate = new Date("November 11, 2026 23:59:00 GMT+0100").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        } else {
            document.querySelector(".timer-grid").innerHTML = "<div style='grid-column: span 4; font-weight: bold; color: var(--terracotta);'>Submissions Closed</div>";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 2. Web Audio Synthesizer (Interactive Rhythm Sample)
    let audioCtx = null;
    let isPlaying = false;
    let timerId = null;

    const toggleBtn = document.getElementById("audioToggleBtn");
    const playIcon = document.getElementById("playIcon");
    const audioStatusText = document.getElementById("audioStatusText");

    function playAfroBeat() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (isPlaying) {
            clearInterval(timerId);
            isPlaying = false;
            playIcon.className = "fa-solid fa-play";
            audioStatusText.innerText = "Click play to sample the rhythm";
            return;
        }

        isPlaying = true;
        playIcon.className = "fa-solid fa-pause";
        audioStatusText.innerText = "Playing rhythm sample...";

        let step = 0;
        timerId = setInterval(() => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            // Simple percussion rhythm loop simulation
            if (step % 4 === 0) {
                // Kick drum sound
                osc.frequency.setValueAtTime(130, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
                gain.gain.setValueAtTime(0.7, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.15);
            } else if (step % 2 === 1) {
                // High percussion tick sound
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(600, audioCtx.currentTime);
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.05);
            }

            step = (step + 1) % 8;
        }, 200);
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", playAfroBeat);
    }

    // 3. Copy to Clipboard Functionality
    const copyButtons = document.querySelectorAll(".copy-btn");
    const toast = document.getElementById("toast");

    copyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const textToCopy = btn.getAttribute("data-copy");
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    toast.innerText = "Copied to clipboard!";
                    toast.classList.add("show");
                    setTimeout(() => {
                        toast.classList.remove("show");
                    }, 2500);
                });
            }
        });
    });

});