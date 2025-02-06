   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        function createLetter() {
            const letter = document.createElement("span");
            letter.classList.add("letter");
            letter.textContent = letters[Math.floor(Math.random() * letters.length)];
            document.body.appendChild(letter);
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            letter.style.left = `${x}px`;
            letter.style.top = `${y}px`;

            letter.addEventListener("click", () => animateLetter(letter));
            
            setTimeout(() => {
                letter.remove();
            }, 3000);
        }

        function animateLetter(letter) {
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 200;
            letter.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.5)`;
            setTimeout(() => {
                letter.style.transform = "scale(1)";
            }, 500);
        }

        setInterval(createLetter, 500);
