import { useState } from "react";
import { server } from "../../../helpers/fetch";
import Application from "../Application";
import FilterRowStatus from "../FilterRowStatus";
import FilterRowProduct from "../FilterRowProduct";
import TableHeader from "../TableHeader";
import TableLeftPanel from "../TableLeftPanel";
import Loader from "../../../UI/Loader/Loader";
import useFetch from "../../../helpers/useFetch";

const TableMain = () => {
    const [filter, setFilter] = useState(localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter')) : {product: 'all', status: 'all'})
    localStorage.setItem('filter', JSON.stringify(filter))

    const {data: applications, isLoading} = useFetch(server + `applications?${filter.status === 'all' ? "" : `status=${filter.status}&`}${filter.product === 'all' ? "" : `product=${filter.product}&`}`, filter);
    const {data: allApplications} = useFetch(server + `applications?${filter.status === 'all' ? "" : `status=${filter.status}&`}${filter.product === 'all' ? "" : `product=${filter.product}&`}`, filter.product);

    const renderApplications = () => applications.map((application) => <Application application={application} key={application.id} />)

    return (
        <div>
            {isLoading && <Loader />}
            {applications && (
                <div>
                            <TableLeftPanel filter={filter} setFilter={setFilter} allApplications={allApplications} />
                            <div className="main-wrapper">
                                <div className="container-fluid">
                                    <div className="admin-heading-1">Все заявки</div>
                                    <form action="">
                                        <div className="row mb-3 justify-content-start">
                                            <FilterRowStatus filter={filter} setFilter={setFilter} />
                                            <FilterRowProduct filter={filter} setFilter={setFilter} />
                                        </div>
                                    </form>
                
                                    <table className="table fs-14">
                                        <TableHeader />
                                        <tbody id="tbody">
                                            {renderApplications()}
                                        </tbody>
                                    </table>
                                    </div>
                            </div>
                            </div>
            )}
        </div>
    );
}
 
export default TableMain;