import {  Card, ConfigProvider } from "antd";
import { motion } from "framer-motion";

const About = () => {
const tools = [
  {
    name: "Adobe Premiere Pro",
    color: "geekblue",
    img: "https://i.pinimg.com/originals/1c/df/ef/1cdfef40622e0666cb901b269e01a904.png",
  },
  {
    name: "After Effects",
    color: "purple",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
  },
  {
    name: "DaVinci Resolve",
    color: "orange",
    img: "https://keycodeeducation.com/wp-content/uploads/2023/02/DaVinci-Resolve.png",
  },
  {
    name: "CapCut",
    color: "red",
    img: "https://inshotproplus.com/wp-content/uploads/2024/04/CapCut-1080x1080.webp",
  },
]

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-[#0a0a0a] to-black text-white py-20 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-16"
        >
          <span className="text-yellow-400">About</span> Me
        </motion.h1>

        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <motion.img
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80"
            alt="Yabsra"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-60 h-60 rounded-full object-cover  shadow-[0_0_40px_rgba(255,215,0,0.7)]  "
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
              <ConfigProvider
                theme={{
                  components: {
                    Card: {
                      colorBgContainer: 'rgba(0,0,0,0.6)', 
                       colorBorderSecondary: 'rgba(250,204,21,0.8)', // yellow border  
                    },
                  },
                }}
              >
                <Card
                  bordered={false}
                  className="backdrop-blur-md border-b-3 border-yellow-400 rounded-2xl"
                >
                  <p className="text-lg text-white leading-relaxed mb-4">
                    Hey! I'm <span className="text-yellow-400 font-semibold">Yabsra</span>  a high school student with a big passion for{" "}
                    <span className="text-yellow-400">video editing</span> and
                    visual storytelling. What started as a hobby quickly became my
                    creative voice and favorite way to express emotion through motion.
                  </p>
                  <p className="text-lg leading-relaxed text-white">
                    I focus on creating visually engaging edits with clean pacing,
                    emotional storytelling, and cinematic sound. When I’m not
                    editing, you’ll find me on the basketball court or scouting new
                    filming locations for my next project 🎬.
                  </p>
                </Card>
              </ConfigProvider>

          </motion.div>
        </div>

        {/* Tools */}
         <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-20 sm:p-8 p-3 cursor-pointer"
  >
    <h2 className="text-3xl font-bold mb-8 border-l-4 border-yellow-400 pl-4">
      My Editing Tools
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          className="flex items-center gap-4 p-4 py-10  rounded-xl bg-black/50 border border-yellow-400/20 backdrop-blur-md hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-300"
        >
          <img
            src={tool.img}
            alt={tool.name}
            className="w-10 h-10 object-contain rounded-md"
          />
          <div>
            <p className="text-lg font-semibold text-white">{tool.name}</p>
            
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 border border-yellow-400/20 rounded-2xl sm:p-8 p-3 backdrop-blur-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-yellow-400 pl-4">
            My Approach
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            I believe every video should <span className="text-yellow-400">tell a story</span>. Whether
            it’s a 10-second reel or a full project, I craft edits that make
            people feel something  using rhythm, lighting, and sound to pull
            viewers in.
          </p>
          <p className="text-lg leading-relaxed">
            My workflow combines <span className="text-yellow-400">creativity</span> and{" "}
            <span className="text-yellow-400">precision</span>, ensuring that
            every frame counts. I’m always open to feedback and love
            collaborating with others to bring ideas to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
