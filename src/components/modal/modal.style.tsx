import styled from 'styled-components';
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 600px;
  outline: 0;
  .choose-create-modal {
    margin-top: 20px;
    display: flex;
    a {
        display: flex;
        justify-content: center;
    }
  }
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;
export const StyledModal = styled.div`
  z-index: 100;
  background: #e2e2e2;
  position: relative;
  margin: auto;
  border-radius: 8px;
  padding: 20px;
`;
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  border-bottom: 1px solid #141b32;
`;
export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: black;
  font-size: 25px;
  font-weight: bold;
`;
export const CloseButton = styled.button`
  font-size: 22px;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;