import { useState } from "react";
import { Form, Input, Button, message, ConfigProvider } from "antd";
import { motion } from "framer-motion";

interface FeedbackFormProps {
  onSubmit: (values: { name: string; comment: string }) => void;
}

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (values: { name: string; comment: string }) => {
    setSubmitting(true);

    setTimeout(() => {
      onSubmit(values);
      form.resetFields();
      message.success("Feedback submitted successfully!");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "rgba(0,0,0,0.8)", // dark background for inputs
          colorText: "#ffffff", // white text
          colorPrimary: "#facc15", // bright yellow for buttons
          colorBorder: "transparent", // remove borders
        },
        components: {
          Input: {
            colorBgContainer: "rgba(30,30,30,0.9)",
            colorTextPlaceholder: "#9ca3af",
            colorBorder: "transparent",
            activeBorderColor: "transparent",
            hoverBorderColor: "transparent",
          },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-10   max-w-2xl mx-auto"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-4 text-white border-none"
        >
          <Form.Item
            name="name"
            label={<span className="text-white">Your Name</span>}
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              className="border-none! shadow-none! focus:border-none! focus:shadow-none! focus:outline-none! bg-[#1e1e1e] text-white"
              placeholder="Enter your name"
              size="large"
            />

          </Form.Item>

          <Form.Item
            name="comment"
            label={<span className="text-white">Your Feedback</span>}
            rules={[{ required: true, message: "Please enter your feedback" }]}
          >
            <Input.TextArea
              className="border-none! shadow-none! focus:border-none! focus:shadow-none! focus:outline-none! bg-[#1e1e1e] text-white"
              placeholder="Share your thoughts about my work..."
              rows={4}
              size="large"
            />

          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              style={{color:"#000",backgroundColor:"yellow"}}
              className="w-full  border-b border-yellow-400 text-black font-semibold rounded-xl transition-all duration-300"
              size="large"
            >
              Submit Feedback
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </ConfigProvider>
  );
};

export default FeedbackForm;
