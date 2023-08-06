const FilterRowStatus = () => {
    return (
        <div className="col">
            <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
                <a href="#" className="btn btn-light" data-value="all">Все</a>
                <a href="#" className="btn btn-light" data-value="new">Новые</a>
                <a href="#" className="btn btn-light" data-value="inwork">В работе</a>
                <a href="#" className="btn btn-light" data-value="complete">Завершенные</a>
            </div>
        </div>
    );
}
 
export default FilterRowStatus;