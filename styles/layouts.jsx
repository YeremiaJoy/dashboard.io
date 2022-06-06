import styled from "@emotion/styled";

export const Navbar = styled.nav`
  height: 56px;
  width: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #d0d6dc;
  z-index: 99;
`;

export const SidebarContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
`;

export const SidebarStyle = styled.div`
  height: 100%;
  width: ${(props) => (props.toggle ? "13.5em" : "57px")};
  background-color: #f6f6f9;
  border-right: 1px solid #d0d6dc;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  cursor: pointer;
  padding: 16px;
  color: ${(props) => (props.active ? "var(--color-blue)" : "#4e5660")};
  border-left: ${(props) => props.active && "3px solid var(--color-blue)"};
  background-color: ${(props) => props.active && "#ebedf0"};
  transition: 150ms linear;
  &:hover {
    color: var(--color-blue);
    border-left: 3px solid var(--color-blue);
    background-color: #ebedf0;
  }
  p {
    margin-left: 18px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const SiderHeader = styled.div`
  padding: 0 16px;
  border-bottom: 1px solid #d0d6dc;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700 !important;
  h2 {
    font-size: 30px !important;
  }
  p {
    font-size: 14px;
    color: var(--color-blue);
  }
`;
