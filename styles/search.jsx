import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  input {
    border-radius: 3px;
  }
  .clear-search-btn {
    background-color: var(--color-grey);
    color: #fff;
    border-radius: 50%;
    padding: 1px;
    cursor: pointer !important;
    &:hover {
      background-color: #ec5050;
    }
  }
`;
export const SearchResultContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 2em;
  min-height: 15em;
  border-radius: 0.25em;
  background-color: ${(props) => (props.found ? "#fff" : "#f6f6f9")};
  border: 1px solid #d0d6dc;
  .no-result {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    h2 {
      font-size: 24px;
      font-weight: 700;
      color: #000;
    }
    p {
      font-size: 14px;
    }
  }
  .result {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    h2 {
      font-size: 24px;
      font-weight: 700;
      color: #000;
    }
    p {
      font-size: 16px;
      color: var(--color-grey);
    }
    .line {
      border-bottom: 1px solid #d0d6dc;
      width: 50%;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }
  button {
    border-radius: 4px;
    background-color: var(--color-blue);
    color: #fff;
    &:hover {
      background-color: rgb(47, 131, 225);
    }
  }
`;

//User Detail pop up
export const UserDetailStyle = styled.div`
  display: ${(props) => !props.show && "none"};
  position: absolute;
  top: 0;
  right: 0;
  width: 33.3%;
  height: 100vh;
  z-index: 100;
  background-color: #f6f6f9;
  padding: 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px 2px;
  padding-inline: 16px;
  p {
    font-size: 14px;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
  .detail-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #262626;
    cursor: pointer;
    &:hover {
      color: var(--color-grey);
    }
  }
  .delete-user-btn {
    color: #fff;
    background-color: #cb2222;
    border-radius: 4px;
    &:hover {
      background-color: rgb(236, 80, 80);
    }
  }
`;

export const UserDetailContent = styled.div`
  border-top: 1px solid #d0d6dc;
  border-bottom: 1px solid #d0d6dc;
  width: 100%;
  margin: 16px 0;
  padding: 16px 0;
  overflow-y: auto;
  height: 73%;
`;

export const UserDetailData = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  overflow: hidden;
  p {
    font-size: 16px !important;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

//Modal Delete
export const ModalDelete = styled.div`
  .chakra-modal__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .delete-icon {
    margin: 8px 0;
    padding: 16px;
    border-radius: 50%;
    background-color: #f6f6f9;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
  }
  .chakra-modal__footer {
    justify-content: center !important;
  }
`;
