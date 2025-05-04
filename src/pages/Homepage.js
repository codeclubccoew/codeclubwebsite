import React, { useEffect, useRef } from "react";
import "../Homepage.css";
import logo from "../assets/home.png"; // Import your logo file

const Homepage = () => {
  const particlesRef = useRef(null);
  const hexagonGridRef = useRef(null);
  const typewriterRef = useRef(null);

  // Text configuration
  const staticPrefix = "CODE TO";
  const changingWords = ["INNOVATE", "LEARN", "CREATE", "ACHIEVE"];

  // Typewriter Effect (unchanged from your original)
  useEffect(() => {
    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeWord = () => {
      const typeWriterElement = typewriterRef.current;
      if (!typeWriterElement) return;

      const currentWord = changingWords[currentWordIndex];

      if (!isDeleting && currentLetterIndex < currentWord.length) {
        typeWriterElement.textContent = ` ${currentWord.substring(0, currentLetterIndex + 1)}`; // Added space here
        currentLetterIndex++;
        timeoutId = setTimeout(typeWord, 100);
      } 
      else if (isDeleting && currentLetterIndex > 0) {
        typeWriterElement.textContent = ` ${currentWord.substring(0, currentLetterIndex - 1)}`; // Added space here
        currentLetterIndex--;
        timeoutId = setTimeout(typeWord, 50);
      } 
      else {
        isDeleting = !isDeleting;
        timeoutId = setTimeout(typeWord, isDeleting ? 1000 : 100);
        if (!isDeleting) {
          currentWordIndex = (currentWordIndex + 1) % changingWords.length;
        }
      }
    };

    if (typewriterRef.current) {
      typeWord();
    }

    return () => clearTimeout(timeoutId);
  }, []);


  // Particles and Hexagon Grid Initialization (restored to your original)
  useEffect(() => {
    // Particles initialization
    const initParticles = () => {
      const cvs = particlesRef.current;
      if (!cvs) return;
      
      const ctx = cvs.getContext('2d');

      const updateCanvasSize = () => {
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
      };

      updateCanvasSize();

      let particlesArray = [];
      let mouse = {
        x: null,
        y: null,
        radius: 50
      };

      class Particle {
        constructor(x, y, directionX, directionY, size, color) {
          this.x = x;
          this.y = y;
          this.directionX = directionX;
          this.directionY = directionY;
          this.size = size;
          this.color = color;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        update() {
          if (this.x > cvs.width || this.x < 0) {
            this.directionX = -this.directionX;
          }

          if (this.y > cvs.height || this.y < 0) {
            this.directionY = -this.directionY;
          }

          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < cvs.width - this.size * 10) {
              this.x += 10;
            }

            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 10;
            }

            if (mouse.y < this.y && this.y < cvs.height - this.size * 10) {
              this.y += 10;
            }

            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 10;
            }
          }
          this.x += this.directionX;
          this.y += this.directionY;

          this.draw();
        }
      }

      const init = () => {
        particlesArray = [];
        let numberOfParticles = (cvs.height * cvs.width) / 9000;
        for (let i = 0; i < numberOfParticles * 0.25; i++) {
          let size = (Math.random() * 35) + 1;
          let x = (Math.random() * (cvs.width - size * 2)) + size; 
          let y = (Math.random() * (cvs.height - size * 2)) + size;
          let directionX = (Math.random() * 5) - (2.5);
          let directionY = (Math.random() * 5) - (2.5);
          let color = '#00FFFF';
          particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
      };

      const connect = () => {
        let opacityValue = 1;
        for (let i = 0; i < particlesArray.length; i++) {
          for (let j = i; j < particlesArray.length; j++) {
            let distance = ((particlesArray[i].x - particlesArray[j].x) ** 2) + 
                          ((particlesArray[i].y - particlesArray[j].y) ** 2);

            if (distance < (cvs.width / 7) * (cvs.height / 7)) {
              opacityValue = 1 - (distance / 20000);
              ctx.strokeStyle = 'rgb(0, 255, 255' + opacityValue + ')';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
            }
          }
        }
      };

      const animate = () => {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
        }
        connect();
      };

      const handleMouseMove = (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
        mouse.radius = 170;
      };

      const handleMouseOut = () => {
        mouse.x = undefined;
        mouse.y = undefined;
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseout', handleMouseOut);
      window.addEventListener('resize', updateCanvasSize);

      init();
      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
        window.removeEventListener('resize', updateCanvasSize);
      };
    };

    // Hexagon grid initialization (restored to original)
    const initHexagonGrid = () => {
      const HEXAGON_GRID = hexagonGridRef.current;
      if (!HEXAGON_GRID) return;
      
      const CONTAINER = HEXAGON_GRID.parentNode;

      const createGrid = () => {
        let wall = {
          width: CONTAINER.offsetWidth,
          height: CONTAINER.offsetHeight
        };

        let rowsNumber = Math.ceil(wall.height / 80);
        let columnsNumber = Math.ceil(wall.width / 100) + 1;

        HEXAGON_GRID.innerHTML = "";

        for (let i = 0; i < rowsNumber; i++) {
          let row = document.createElement("div");
          row.className = "row";
          HEXAGON_GRID.appendChild(row);
        }

        let rows = HEXAGON_GRID.querySelectorAll(".row");

        for (let i = 0; i < rows.length; i++) {
          for (let j = 0; j < columnsNumber; j++) {
            let hexagon = document.createElement("div");
            hexagon.className = "hexagon";
            rows[i].appendChild(hexagon);
          }
        }
      };

      const handleResize = () => {
        createGrid();
      };

      window.addEventListener('resize', handleResize);
      createGrid();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    initParticles();
    initHexagonGrid();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white">
      {/* Home Section */}
      <section id="homepage" className="h-screen flex items-center justify-center">
      <div className="relative min-h-screen w-screen bg-black text-white overflow-hidden">
      <canvas 
        ref={particlesRef}
        className="absolute top-0 left-0 w-full h-full z-0" 
      />
      <div 
        ref={hexagonGridRef}
        className="absolute top-0 left-0 w-full h-full z-0" 
      />

       {/* Centered text with responsive adjustments */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4">
        <div className="inline-flex flex-wrap justify-center items-baseline">
          <span className="static-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-bold text-white tracking-tight">
            CODE TO{" "}
          </span>
          <span
            ref={typewriterRef}
            className="typewriter-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-bold text-white hover-glow"
          ></span>
        </div>
      </div>
    </div>
      </section>
    </div>
  );
};

export default Homepage;
