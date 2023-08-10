import { btnsSelectProduct } from "../../../helpers/const";

const FilterRowProduct = ({filter, setFilter}) => {

    const handleChange = (e) => {
        const product = e.target.value;
        setFilter((filter) => ({ ...filter, product }));
    };

    return (
            <div className="col">
                <select value={filter.product} onChange={handleChange} className="custom-select" id="productSelect">
                    {btnsSelectProduct.map((btn) => <option value={btn.product} key={btn.name}>{btn.name}</option>)}
                </select>
            </div>
    );
}
 
export default FilterRowProduct;