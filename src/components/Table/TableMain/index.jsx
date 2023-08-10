import { useEffect, useState } from "react";
import { server } from "../../../helpers/fetch";
import Application from "../Application";
import FilterRowStatus from "../FilterRowStatus";
import FilterRowProduct from "../FilterRowProduct";
import TableHeader from "../TableHeader";
import TableLeftPanel from "../TableLeftPanel";
import Loader from "../../Loader/Loader";

const TableMain = () => {
    const [applications, setApplications] = useState(null)
    const [allApplications, setAllApplications] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const abortCont = new AbortController()

    const [filter, setFilter] = useState(localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter')) : {product: 'all', status: 'all'})
    localStorage.setItem('filter', JSON.stringify(filter))

    useEffect(() => {
        fetch(server + `applications?${filter.status === 'all' ? "" : `status=${filter.status}&`}${filter.product === 'all' ? "" : `product=${filter.product}&`}`, {signal: abortCont.signal})
        .then((response) => {
            if (response.ok  !== true) {
                throw Error ('Не получается загрузить данные с сервера(')
            }
            return response.json();
        })
        .then((data) => {
            setApplications(data)
            setLoading(false)
        })
        .catch((error) => error.name === "AbortError" ? console.warn('Запрос был остановлен') : console.warn(error.message))

        return () => abortCont.abort()
    }, [filter])

    useEffect(() => {
        fetch(server + `applications?${filter.status === 'all' ? "" : `status=${filter.status}&`}${filter.product === 'all' ? "" : `product=${filter.product}&`}`, {signal: abortCont.signal})
        .then((response) => {
            if (response.ok  !== true) {
                throw Error ('Не получается загрузить данные с сервера(')
            }
            return response.json();
        })
        .then((data) => {
            setAllApplications(data)
            setLoading(false)
        })
        .catch((error) => error.name === "AbortError" ? console.warn('Запрос был остановлен') : console.warn(error.message))
        
        return () => abortCont.abort()
    }, [filter.product])

    const renderApplications = () => applications.map((application) => <Application application={application} key={application.id} />)

    return (
        <div>
            <TableLeftPanel filter={filter} setFilter={setFilter} allApplications={allApplications}/>
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
                            {applications && renderApplications()}
                        </tbody>
                    </table>
                    {isLoading && <Loader />}
                </div>
            </div>
        </div>
    );
}
 
export default TableMain;