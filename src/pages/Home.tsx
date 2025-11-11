import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { motion } from "framer-motion";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas:any = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles:any = [];
    const numParticles = 100;

    class Particle {
      constructor(x: number, y: number, radius: number, speed: number) {
        (this as any).x = x;
        (this as any).y = y;
        (this as any).radius = radius;
        (this as any).speed = speed;
        (this as any).angle = Math.random() * Math.PI * 2;
      }

      update() {
        (this as any).x += Math.cos((this as any).angle) * (this as any).speed;
        (this as any).y += Math.sin((this as any).angle) * (this as any).speed;

        // Bounce off edges
        if ((this as any).x < 0 || (this as any).x > canvas.width) (this as any).angle = Math.PI - (this as any).angle;
        if ((this as any).y < 0 || (this as any).y > canvas.height) (this as any).angle = -(this as any).angle;
      }

      draw() {
        ctx.beginPath();
        ctx.arc((this as any).x, (this as any).y, (this as any).radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 4 + 1,
          Math.random() * 0.5 + 0.2
        )
      );
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p:any) => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(circle, #1b2735, #090a0f)",
        }}
      ></canvas>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 h-screen flex items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-yellow-400">Yabsra</span>
            <span className="text-3xl md:text-4xl font-light mt-2 block text-gray-200">
              Creative Video Editor & Storyteller
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I transform ordinary footage into compelling visual stories.
            High school student by day, video editing enthusiast by night.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/projects">
              <Button
                type="primary"
                size="large"
                className="bg-yellow-500 hover:bg-yellow-600 border-none text-lg  h-12 px-8"
              >
               <span className="text-black">View My Work</span> 
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
