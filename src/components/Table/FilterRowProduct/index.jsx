import { useState } from "react";

const FilterRowProduct = () => {

    const [filter, setFilter] = useState('all')

    return (
            <div className="col">
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="custom-select" id="productSelect">
                    <option value="all">Все продукты</option>
                    <option value="course-html">Курс по верстке</option>
                    <option value="course-js">Курс по JavaScript</option>
                    <option value="course-vue">Курс по VUE JS</option>
                    <option value="course-php">Курс по PHP</option>
                    <option value="course-wordpress">Курс по WordPress</option>
                </select>
            </div>
    );
}
 
export default FilterRowProduct;