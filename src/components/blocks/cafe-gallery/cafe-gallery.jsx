import { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, StyledTitle } from "./styles";
import Gallery from "../../ui/gallery/gallery";

// Галерея котокафе
function CafeGallery({ slides }) {
    console.log(slides);

  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides}/>
    </StyledSection>
  ) : null;
}

export default CafeGallery;
