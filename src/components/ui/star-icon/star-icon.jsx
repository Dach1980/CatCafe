import "./style.css"

const CatFeature = {
    NEW: "new",
    SOFT: "sort"
};

function StarIcon({ className = "", feature }) {
    let options;

    switch (feature) {
        case CatFeature.NEW:
            options = {
                text: "New",
                bgColor: "#ffb334"
            };
            break;
        case CatFeature.SOFT:
            options = {
                text: "Ласковый",
                bgColor: "#7fc92e"
            };
            break;
        default:
            options = {
                text: "",
                bgColor: "#000"
            };
            break;
    }

    return options.text ? (
        <span
            className={`star-icon ${className}`}
            style={{ backgroundColor: options.bgColor }}
        >
            {options.text}
        </span>
    ) : null;
}

export { CatFeature, StarIcon }
