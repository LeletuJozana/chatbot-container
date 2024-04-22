import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align items at the bottom */
  height: 90vh; /* Adjusted height */
`;

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
  100% { transform: rotate(0deg); }
`;

const ChatbotContainer = styled.div`
  background-color: #eaf2ff; /* Changed background color */
  border-radius: 20px; /* Increased border-radius */
  padding: 20px;
  width: 400px; /* Increased width */
  height: 600px; /* Increased height */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Increased box-shadow */
  overflow-y: auto; /* Added overflow-y to enable scrolling */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  position: relative; /* Position relative for absolute positioning of the robot */
`;

const MessageList = styled.div`
  flex: 1; /* Allow the message list to grow and take remaining space */
`;

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RobotIcon = styled(AiOutlineRobot)`
  font-size: 64px; /* Increased font-size */
  color: #555;
  animation: ${waveAnimation} 2s ease-in-out infinite; /* Apply animation */
`;

const Input = styled.input`
  flex: 1; /* Take remaining space */
  margin-left: 10px; /* Add space between input and button */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: black; /* Set default background color to black */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SendButton = styled(Button)`
  background-color: #007bff; /* Set background color for the "Send" button */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderText = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px; /* Add margin between pairs of buttons */
`;

const RecommendedQuestions = () => {
  return (
    <div>
      <FlexContainer>
        <Button style={{ marginRight: '5px' }}>Services</Button>
        <Button style={{ marginLeft: '5px' }}>Cancellations/reschedule</Button>
      </FlexContainer>
      <FlexContainer>
        <Button style={{ marginRight: '5px' }}>Refund process</Button>
        <Button style={{ marginLeft: '5px' }}>Contact Info</Button>
      </FlexContainer>
    </div>
  );
};

const Chatbot = () => {
  return (
    <Container>
      <ChatbotContainer>
        <Header>
          <RobotIcon />
          <HeaderText>How can I help?</HeaderText>
        </Header>
        <MessageList>
          {/* Add chat messages component here */}
        </MessageList>
        <RecommendedQuestions />
        <MessageInputContainer>
          <RobotIcon />
          <Input type="text" placeholder="Type your message..." />
          <SendButton>Send</SendButton>
        </MessageInputContainer>
      </ChatbotContainer>
    </Container>
  );
};

export default Chatbot;
