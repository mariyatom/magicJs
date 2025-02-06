 const symbols = ['★', '☆', '☀', '☁', '☂', '☃', '✈', '❤', '♫', '⚡', '❄', '✔', '✖', '⚠', '❗'];
        
        function createSymbol() {
            const symbol = document.createElement("span");
            symbol.classList.add("symbol");
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            document.body.appendChild(symbol);
            
            const size = Math.random() * 20 + 10;
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            symbol.style.fontSize = `${size}px`;
            symbol.style.left = `${x}px`;
            symbol.style.top = `${y}px`;
            
            setTimeout(() => {
                symbol.remove();
            }, 3000);
        }

        setInterval(createSymbol, 200);
