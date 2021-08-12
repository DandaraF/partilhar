import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 203px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.p`
  font-size: 24px;
  padding-top: 10px;
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const Img = styled.img`
  height: 150px;
  width: 360px;
`;
