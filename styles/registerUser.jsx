import styled from "@emotion/styled";

export const RegisterContainer = styled.div`
  max-width: 25%;
  display: grid;
  gap: 16px;
  input {
    border-radius: 4px;
  }
  span {
    font-size: 12px;
    color: #ec5050;
  }
`;

export const SubmitBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  button {
    border-radius: 4px;
    background-color: ${(props) => (props.disabled ? "#d0d6dc" : "var(--color-blue)")};
    color: #fff;
    &:hover {
      background-color: rgb(47, 131, 225);
    }
  }
`;
