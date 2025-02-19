import React from "react";
import { Title } from "../../ui/title/title.jsx"
import StarCard from "../../ui/star-card/star-card.jsx"
import Button from "../../ui/button/button.jsx"
import "./style.css"

function StarsList({ stars }) {
    return (
        <section className="star-list">
            {stars?.length ? (
                <>
                    <Title>Наши звёзды</Title>
                    <ul className="star-list__list">
                        {stars.map((star) => (
                            <li className="star-list__item" key={star.id}>
                                <StarCard {...star} />
                            </li>
                        ))}
                    </ul>
                    <Button minWidth={353}>Купить билет</Button>
                </>
            ) : null}
        </section>
    );
}

export default StarsList