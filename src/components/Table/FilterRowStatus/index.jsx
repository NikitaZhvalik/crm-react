import { Link } from "react-router-dom";
import { btnsSelectStatus } from "../../../helpers/const";

const FilterRowStatus = ({filter, setFilter}) => {
    return (
        <div className="col">
            <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
                {btnsSelectStatus.map((btn) => {
						return <li key={btn.name}>
									<Link onClick={() => setFilter({...filter, status: btn.status})} data-value={btn.status} data-role="left-status" href="#" className='btn btn-light'>{btn.name}
									</Link>
								</li>
				})}
            </div>
        </div>
    );
}
 
export default FilterRowStatus;