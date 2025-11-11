import { useState } from 'react';
import { Card, Modal, Button, ConfigProvider } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

const ProjectCard = ({ title, description, thumbnail, videoUrl }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <ConfigProvider
          theme={{
            components: {
              Card: {
                colorBgContainer: 'rgba(0,0,0,0.6)',
                colorBorderSecondary: 'rgba(250,204,21,0.3)', // yellow border 
                colorText: '#ffffff',          // main text color white
                colorTextHeading: '#ffffff',   // title text color
                colorTextDescription: '#d1d5db', // description light gray
              },
            },
          }}
        >
          <Card
            style={{  color: "#fff" }}
            hoverable
            cover={
              <div className="relative  h-48 overflow-hidden border border-[rgba(250,204,21,0.3)]">
                <img
                  alt={title}
                  src={thumbnail}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xs bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <PlayCircleOutlined style={{ fontSize: '48px', color: '#FFD700' }} onClick={showModal} />
                </div>
              </div>
            }
            className="h-full border border-gray-300"
          >
            <Card.Meta
              title={title}
              description={description.length > 100 ? `${description.substring(0, 100)}...` : description}
            />
            <Button
              type="primary"
              onClick={showModal}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 border-none"
            >
              Watch Video
            </Button>
          </Card>
        </ConfigProvider>
      </motion.div>

      <Modal
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        centered
      >
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-[450px]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;