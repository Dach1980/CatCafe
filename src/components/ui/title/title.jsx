import "./style.css"

const TitleSize = {
    BIG: "big",
    SMALL: "small",
    DEFAULT: ""
};

function Title({ children, size }) {
    return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>
}

export { TitleSize, Title }