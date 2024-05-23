import styled from 'styled-components';

import ChatBottom from '@/components/chat/ChatBottom';
import ChatHead from '@/components/chat/ChatHead';
import ChatMain from '@/components/chat/ChatMain';

const ChattingPage = () => {
  return (
    <ChattingWarpper>
      <ChatHead />
      <ChatMain />
      <ChatBottom />
    </ChattingWarpper>
  );
};

export default ChattingPage;

const ChattingWarpper = styled.div`
  margin-top: 10rem;
`;
