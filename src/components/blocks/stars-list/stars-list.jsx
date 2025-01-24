import Title from "../../ui/title/title.jsx"
import StarCard from "../../ui/star-card/star-card.jsx"
import Button from "../../ui/button/button.jsx"
import { StarItem, StarList, StyledStarsList } from "./style.jsx";

// список известных котов
function StarsList({
    stars, // коты
    level // уровень заголовка списка.
}) {
    return (
        <StyledStarsList>
            {stars?.length ? (
                <>
                    <Title level={level}>Наши звёзды</Title>
                    <StarList $isGridList>
                        {stars.map((star) => (
                            <StarItem key={star.id}>
                                <StarCard {...star} />
                            </StarItem>
                        ))}
                    </StarList>
                </>
            ) : null}
            <Button minWidth={353} link="/buy">
                Купить билет
            </Button>
        </StyledStarsList>
    );
}

export default StarsList