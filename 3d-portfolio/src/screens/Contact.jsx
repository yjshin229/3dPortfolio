import React, { Suspense, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Cat from "../components/models/Cat";
import Loader from "../components/Loader";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import useAlert from "../hooks/useAlert";

//contact screen handling message sending
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("touch");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setCurrentAnimation("idle");
  };

  const handleBlur = () => {
    setCurrentAnimation("touch");
  };

  const handleSubmit = (e) => {
    //Prevent it from reloading the page
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("walk");
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Youngjin Shin",
          from_email: form.email,
          to_email: "yjshin229@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Your email was sent successfully. Thank you!",
          type: "success",
        });
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setCurrentAnimation("touch");
        }, [3000]);
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimation("touch");
        console.log(err);
        showAlert({
          show: true,
          text: "There was an error sending your email. Please try again.",
          type: "error",
        });
      });
  };
  return (
    <ContactContainer>
      <InputContainer>
        {alert.show && <Alert severity={alert.type}>{alert.text}</Alert>}

        <InputTitle>Get in Touch</InputTitle>
        <InputForm onSubmit={handleSubmit} ref={formRef}>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputLabel>Your Message</InputLabel>
          <TextArea
            name="message"
            rows={4}
            placeholder="Let's connect—send me a message!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </InputForm>
      </InputContainer>
      <CatContainer>
        <Canvas camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <ambientLight />
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <Cat
              position={[1, 0, 0]}
              rotation={[0, 2.5, 0]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </CatContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  margin-inline: auto;
  padding-bottom: 3rem;
  padding-top: 7.875rem;
  padding-inline: 2rem;
  min-height: calc(100vh-90);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 640px) {
    padding: 4rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 50%;
`;

const InputTitle = styled.h1`
  font-weight: 600;
  @media (max-width: 640px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 3.5rem;
`;

const InputLabel = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  font-family: "Chakra Petch", sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: white;
  border-color: #d0d0d0;
  color: #414141;
  border-radius: 0.5rem;
  border-width: 1px;
  width: 100%;
  padding: 0.625rem;
  font-weight: 400;
  margin-top: 0.625rem;
  box-shadow:
    0 4px 6px -1px rgb(100 100 100 / 0.1),
    0 2px 4px -2px rgb(100 100 100 / 0.1);
  &:focus {
    border-color: #f59f0b;
    box-shadow: 0 0 0 3px #f59f0b79;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  font-family: "Chakra Petch", sans-serif;
  display: block;
  padding: 0.625rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #414141;
  border-color: #d0d0d0;
  background-color: white;
  border-radius: 0.5rem;
  font-weight: 400;
  margin-top: 0.625rem;
  box-shadow:
    0 4px 6px -1px rgb(100 100 100 / 0.1),
    0 2px 4px -2px rgb(100 100 100 / 0.1);
  &:focus {
    border-color: #f59f0b;
    box-shadow: 0 0 0 3px #f59f0b79;
    outline: none;
  }
`;

const Button = styled.button`
  color: ${(props) => (props.isLoading ? "#909090" : "white")};
  font-weight: 400;
  border-radius: 0.5rem;
  border-width: 0px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  padding-block: 0.625rem;
  margin-inline: 0.5rem;
  text-align: center;
  background-image: ${(props) =>
    props.isLoading ? null : `linear-gradient(to right, #ffc04b, #ff8c49)`};

  &:focus {
    border-color: #f59f0b;
    box-shadow: 0 0 0 3px #f59f0b79;
    outline: none;
  }
`;

const CatContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
  }
  @media (min-width: 768px) {
    height: 550px;
  }
`;
