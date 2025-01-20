import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import galleryBackground from "../../../assets/gallery-background.svg";

export const StyledSection = styled(Section)`
  display: block;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${galleryBackground});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;

  &::before {
  content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 113px;
    height: 114px;
    background-image: url("src/assets/gallery-left.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    top: 77px;
    right: 0;
    width: 225px;
    height: 222px;
    content: "";
    background-image: url("src/assets/gallery-right.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`;
