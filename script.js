  const alphabetContainer = document.getElementById("alphabetContainer");
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        letters.forEach(letter => {
            const span = document.createElement("span");
            span.classList.add("letter");
            span.textContent = letter;
            span.addEventListener("click", () => animateLetter(span));
            alphabetContainer.appendChild(span);
        });

        function animateLetter(letter) {
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 200;
            letter.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.5)`;
            setTimeout(() => {
                letter.style.transform = "scale(1)";
            }, 500);
        }
