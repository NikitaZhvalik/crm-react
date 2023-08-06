const TableMain = () => {
    return (
            <div className="main-wrapper">
                <div className="container-fluid">
                    <div className="admin-heading-1">Все заявки</div>

                    <form action="">
                        <div className="row mb-3 justify-content-start">

                            <div className="col">
                                <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
                                    <a href="#" className="btn btn-light" data-value="all">Все</a>
                                    <a href="#" className="btn btn-light" data-value="new">Новые</a>
                                    <a href="#" className="btn btn-light" data-value="inwork">В работе</a>
                                    <a href="#" className="btn btn-light" data-value="complete">Завершенные</a>
                                </div>
                            </div>

                            <div className="col">
                                <select className="custom-select" id="productSelect">
                                    <option value="all" selected>Все продукты</option>
                                    <option value="course-html">Курс по верстке</option>
                                    <option value="course-js">Курс по JavaScript</option>
                                    <option value="course-vue">Курс по VUE JS</option>
                                    <option value="course-php">Курс по PHP</option>
                                    <option value="course-wordpress">Курс по WordPress</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <table className="table fs-14">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>дата</th>
                                <th>продукт</th>
                                <th>имя</th>
                                <th>email</th>
                                <th>телефон</th>
                                <th>статус</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            <tr>
                                <th scope="row">1</th>
                                <td>01.04.2020</td>
                                <td>Курс по верстке</td>
                                <td>Петр Сергеевич</td>
                                <td>info@inbox.ru</td>
                                <td>+7 (909) 77-55-777</td>
                                <td>
                                    <div className="badge badge-pill badge-danger">Новый</div>
                                </td>
                                <td>
                                    <a href="edit.html">Редактировать</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>01.04.2020</td>
                                <td>Курс по верстке</td>
                                <td>Василий Петрович</td>
                                <td>info@gmail.ru</td>
                                <td>+7 (909) 77-55-777</td>
                                <td>
                                    <div className="badge badge-pill badge-warning">В работе</div>
                                </td>
                                <td>
                                    <a href="edit.html">Редактировать</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>01.04.2020</td>
                                <td>Курс по верстке</td>
                                <td>Николай Владимирович</td>
                                <td>info@mail.ru</td>
                                <td>+7 (909) 77-55-777</td>
                                <td>
                                    <div className="badge badge-pill badge-success">Завершенный</div>
                                </td>
                                <td>
                                    <a href="edit.html">Редактировать</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
 
export default TableMain;