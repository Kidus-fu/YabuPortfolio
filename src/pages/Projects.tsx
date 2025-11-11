import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:mt-10">
      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-b from-yellow-400 to-yellow-600 bg-clip-text text-transparent">My Projects</h1>
          <p className="text-lg mb-12 text-center text-gray-400">
            Here's a collection of my video editing work. Each project represents my skills in different aspects of video production, 
            from color grading and transitions to storytelling and pacing.
          </p>
          
          <Row gutter={[24, 24]}>
            {projects.map((project) => (
              <Col xs={24} sm={12} lg={8} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: project.id * 0.1, duration: 0.5 }}
                >
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    videoUrl={project.videoUrl}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;