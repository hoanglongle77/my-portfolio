"use client";

import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  UserOutlined,
  MessageOutlined,
  SendOutlined,
} from "@ant-design/icons";

const ContactSection = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Handle email submit here
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-4 py-20 bg-[var(--color-background)] text-white"
    >
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_var(--color-primary)]">
        <h2 className="text-4xl font-bold text-center text-[var(--color-primary)] mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-[var(--color-muted)] mb-10">
          Have a question or just want to say hi? I’ll try my best to get back
          to you!
        </p>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={
              <span className="text-[var(--color-foreground)] font-medium">
                Your Name
              </span>
            }
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="John Doe"
              className="bg-transparent text-white border border-[var(--color-border)] placeholder:text-[var(--color-muted)]"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[var(--color-foreground)] font-medium">
                Email Address
              </span>
            }
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email address!" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="john@example.com"
              className="bg-transparent text-white border border-[var(--color-border)] placeholder:text-[var(--color-muted)]"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-[var(--color-foreground)] font-medium">
                Message
              </span>
            }
            name="message"
            rules={[{ required: true, message: "Don't forget your message!" }]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Say something cool..."
              className="bg-transparent text-white border border-[var(--color-border)] placeholder:text-[var(--color-muted)] resize-none"
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              icon={<SendOutlined />}
              className="w-full bg-[var(--color-primary)] text-black font-semibold py-2 rounded-md hover:scale-[1.02] transition-transform duration-300"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
