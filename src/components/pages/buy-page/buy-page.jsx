import buyOptions from "../../../mocks/buyOptions";
import Buy from "../../blocks/buy/buy";
import CafeGallery from "../../blocks/cafe-gallery/cafe-gallery";

function BuyPage({ slides }) {
    return (
        <>
            <CafeGallery slides={slides} />
            <Buy buyOptions={buyOptions} />
        </>
    );
}

export default BuyPage;
