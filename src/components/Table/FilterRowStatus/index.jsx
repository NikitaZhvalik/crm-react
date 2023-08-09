import { useState } from "react";

const FilterRowStatus = ({applications}) => {
    const [status, setStatus] = useState('all')
    
    const changeStatus = (newStatus) => {
        setStatus(newStatus)
        const newApplication = applications.filter((application) => {
            if (newStatus === 'all') {
                return application
            } else {
                return application.status === newStatus
            }
        })
        console.log("🚀 ~ file: index.jsx:16 ~ newApplication ~ newApplication:", newApplication)
    }

    return (
        <div className="col">
            <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
                <a href='#' onClick={() => changeStatus('all')} className="btn btn-light" data-value="all">Все</a>
                <a href='#' onClick={() => changeStatus('new')} className="btn btn-light" data-value="new">Новые</a>
                <a href='#' onClick={() => changeStatus('inwork')} className="btn btn-light" data-value="inwork">В работе</a>
                <a href='#' onClick={() => changeStatus('complete')} className="btn btn-light" data-value="complete">Завершенные</a>
            </div>
        </div>
    );
}
 
export default FilterRowStatus;