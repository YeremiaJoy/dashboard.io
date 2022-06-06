import styled from "@emotion/styled";

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const NotFoundTitle = styled.div`
  font-size: 4.5em;
`;

export const NotFoundDesc = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 16px;
  background-color: #f6f6f9;
  border-radius: 4px;
  padding: 24px;
  border: 1px solid #d0d6dc;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
  }
  .back-to-home {
    color: var(--color-blue);
    font-weight: 700;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
