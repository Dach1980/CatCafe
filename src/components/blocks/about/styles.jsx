import styled from "styled-components";
import { Section } from "../../styled";
import aboutImage from "../../../assets/about.svg"
// import mapMark from "../../../assets/map_mark.svg"

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  align-items: center;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  margin-top: ${(props) => props.theme.indent};
  padding-right: 122px;
  margin-bottom: 40px;
`;

export const WorkTime = styled(Paragraph)`
  display: inline-block;
  min-height: 43px;
  min-width: 292px;
  margin-bottom: ${(props) => props.theme.indent};
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  vertical-align: middle;
`;

export const Address = styled(Paragraph)`
  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    content: "";
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik04LjAwMDA0IDAuNUM0LjgwNDg4IDAuNSAyLjIwNTQ0IDMuMDk5NDQgMi4yMDU0NCA2LjI5NDU2QzIuMjA1NDQgMTAuMjU5OCA3LjM5MTA0IDE2LjA4MSA3LjYxMTgyIDE2LjMyNjlDNy44MTkxOSAxNi41NTc5IDguMTgxMjYgMTYuNTU3NSA4LjM4ODI2IDE2LjMyNjlDOC42MDkwNCAxNi4wODEgMTMuNzk0NiAxMC4yNTk4IDEzLjc5NDYgNi4yOTQ1NkMxMy43OTQ2IDMuMDk5NDQgMTEuMTk1MiAwLjUgOC4wMDAwNCAwLjVaTTguMDAwMDQgOS4yMDk5N0M2LjM5MjQ4IDkuMjA5OTcgNS4wODQ2NiA3LjkwMjEyIDUuMDg0NjYgNi4yOTQ1NkM1LjA4NDY2IDQuNjg3IDYuMzkyNTEgMy4zNzkxOSA4LjAwMDA0IDMuMzc5MTlDOS42MDc1NyAzLjM3OTE5IDEwLjkxNTQgNC42ODcwMyAxMC45MTU0IDYuMjk0NTlDMTAuOTE1NCA3LjkwMjE2IDkuNjA3NTcgOS4yMDk5NyA4LjAwMDA0IDkuMjA5OTdaIiBmaWxsPSIjRkZCMzM0Ij48L3BhdGg+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuNSkiPjwvcmVjdD4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=");
  }
`;
