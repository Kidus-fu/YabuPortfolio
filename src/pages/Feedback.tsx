import { useState } from "react";
import { List, Avatar, Card, ConfigProvider } from "antd";
import { motion } from "framer-motion";
import FeedbackForm from "../components/FeedbackForm";
import type { Feedback as FeedbackType } from "../types";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([
    {
      id: 1,
      name: "Alex Johnson",
      comment:
        "Yabsra did an amazing job editing our school event video. The transitions were smooth and the color grading was perfect!",
      date: "2023-05-15",
    },
    {
      id: 2,
      name: "Sarah Williams",
      comment:
        "I hired Yabsra to edit a short promotional video for my small business. The results exceeded my expectations. Very professional work!",
      date: "2023-06-22",
    },
  ]);

  const handleSubmit = (values: { name: string; comment: string }) => {
    const newFeedback: FeedbackType = {
      id: feedbacks.length + 1,
      name: values.name,
      comment: values.comment,
      date: new Date().toISOString().split("T")[0],
    };

    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 sm:mt-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-b from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Client Feedback 💬
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I value the voices of my clients. Every comment helps me grow and
            continue improving my storytelling craft.
          </p>
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gray-950  rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            Leave Your Feedback
          </h2>
          <FeedbackForm onSubmit={handleSubmit} />
        </motion.div>

        {/* Feedback List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">
            What People Are Saying
          </h2>

          <List
            itemLayout="vertical"
            dataSource={feedbacks}
            renderItem={(item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="mb-6"
              >
                <ConfigProvider
                theme={{
                  components: {
                    Card: {
                      colorBgContainer: 'rgba(0,0,0,0.6)', 
                       colorBorderSecondary: 'rgba(0,0,0,0.9)', 
                    },
                  },
                }}
              >
                <Card className="0 rounded-2xl  transition-all duration-300">
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          style={{
                            backgroundColor: "#FFD700",
                            color: "#000",
                            fontWeight: "bold",
                          }}
                        >
                          {item.name.charAt(0)}
                        </Avatar>
                      }
                      title={
                        <span className="font-semibold text-yellow-400">
                          {item.name}
                        </span>
                      }
                      description={
                        <span className="text-gray-400">{item.date}</span>
                      }
                    />
                    <div className="mt-4 text-gray-300 leading-relaxed">
                      {item.comment}
                    </div>
                  </List.Item>
                </Card>
                </ConfigProvider>
              </motion.div>
            )}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;
