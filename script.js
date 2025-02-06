 function createCircle() {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            document.body.appendChild(circle);
            
            const size = Math.random() * 300 + 100;
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            
            setTimeout(() => {
                circle.remove();
            }, 3000);
        }

        setInterval(createCircle, 700);
