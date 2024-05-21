import styled from '@emotion/styled';

export const GlobalFreeMarketLayout = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const ContentsLayout = styled.div`
  background-color: #fff;
  margin: 1rem 0;
`;

export const BlankLayout = styled.div`
  background-color: #f5f5f5;
`;

export const GlobalFreeMarketContainer = styled.div`
  background-color: #e1eef8;
  width: 100%;
  height: 25rem;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  border: 1px solid #4c89ff;
`;

export const GlobalFreeMarketTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  background-color: #4c89ff;
  width: 100%;
  padding: 0.5rem 0;
  color: #fff;
  display: flex;
`;

export const TitleText = styled.div`
  margin: 0 0.75rem;
  font-size: 1rem;
  font-weight: 700;
`;

export const GlobalFreeMarketContents = styled.div`
  width: 100%;
  height: 100%;
  margin: 0.5rem 0.75rem;
  text-align: left;
  line-height: 2rem;
  overflow: hidden;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
`;

export const InputItem = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

export const SendButton = styled.img`
  width: 1.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.2rem;
`;

export const EmojiButton = styled.img`
  width: 1.5rem;
  margin-left: 0.5rem;
`;

export const Line = styled.hr`
  color: #000;
  width: 100%;
  margin: 1rem 0;
`;

export const FreeMarketEnterContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const FreeMarketEnterButton = styled.div`
  background-color: #fff;
  color: #4c89ff;
  width: 100%;

  padding: 0.5rem 1rem;
  border: 1px solid #4c89ff;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    background-color: #4c89ff;
    color: #fff;
  }
`;

/* MainProduct */

export const MainProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-content: space-between;
  /* flex-direction: item-be */
  /* margin: 1rem 1rem; */
`;
export const MainProductItem = styled.div`
  display: flex;
  width: 12.5rem;
  height: 17.1875rem;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e1eef8;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  /* flex: 1 0 0; */
  align-self: stretch;
  border: 1px solid #f0f0f0;
`;

export const ProductImage = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: gray;
  /* flex: 1 0 0; */
  align-self: stretch;
  width: 12.5rem;
  height: 12.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  padding: 0.1875rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
