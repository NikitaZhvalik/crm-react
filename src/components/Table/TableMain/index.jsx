import { useEffect, useState } from "react";
import { server } from "../../../helpers/fetch";
import Application from "../Application";
import FilterRowStatus from "../FilterRowStatus";
import FilterRowProduct from "../FilterRowProduct";
import TableHeader from "../TableHeader";

const TableMain = () => {
    const [applications, setApplications] = useState(null)
    const abortCont = new AbortController();

    useEffect(() => {
        fetch(server + `applications/`, {signal: abortCont.signal})
        .then((response) => {
            if (response.ok  !== true) {
                throw Error ('Не получается загрузить данные с сервера(')
            }
            return response.json();
        })
        .then((data) => {
            setApplications(data)
        })
        .catch((error) => {
            if (error.name === "AbortError") {
                console.warn('Запрос был остановлен')
            }
            else {
                console.warn(error.message)
            }
        })
        return () => {
            abortCont.abort()
        }
    }, [])

    const renderApplications = () => {
        return applications.map((application) => {
            return <Application 
                application={application} 
                key={application.id} 
            />
        })
    }

    return (
            <div className="main-wrapper">
                <div className="container-fluid">
                    <div className="admin-heading-1">Все заявки</div>
                    <form action="">
                        <div className="row mb-3 justify-content-start">
                            <FilterRowStatus />
                            <FilterRowProduct />
                        </div>
                    </form>

                    <table className="table fs-14">
                        <TableHeader />
                        <tbody id="tbody">
                            {applications && renderApplications()}
                            {/* <tr>

                                    <div className="badge badge-pill badge-danger">Новый</div>

                                    <div className="badge badge-pill badge-warning">В работе</div>

                                    <div className="badge badge-pill badge-success">Завершенный</div>

                                    <a href="edit.html">Редактировать</a>

                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
 
export default TableMain;