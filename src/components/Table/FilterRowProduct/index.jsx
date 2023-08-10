import { btnsSelectProduct } from "../../../helpers/const";

const FilterRowProduct = ({filter, setFilter}) => {
    return (
            <div className="col">
                {/* <select value={filter} onChange={(e) => setFilter({...filter, product: e.target.value})} className="custom-select" id="productSelect"> */}
                <select value={setFilter(filter)} onChange={(e) => setFilter({...filter, product: e.target.value})} className="custom-select" id="productSelect">
                    {
                        btnsSelectProduct.map((btn) => {
                            return <option value={btn.product} key={btn.name}>{btn.name}</option>
                        })
                    }
                </select>
            </div>
    );
}
 
export default FilterRowProduct;