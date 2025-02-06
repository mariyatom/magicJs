 function createCircle() {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            document.body.appendChild(circle);
            
            const size = Math.random() * 500 + 200;
            const x = Math.random() * window.innerWidth - size / 2;
            const y = Math.random() * window.innerHeight - size / 2;
            
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
            
            setTimeout(() => {
                circle.remove();
            }, 3000);
        }

        setInterval(createCircle, 700);
