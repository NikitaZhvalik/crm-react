const TableMain = () => {
    return (
            <div class="main-wrapper">
                <div class="container-fluid">
                    <div class="admin-heading-1">Все заявки</div>

                    <form action="">
                        <div class="row mb-3 justify-content-start">

                            <div class="col">
                                <div id="topStatusBar" class="btn-group" role="group" aria-label="...">
                                    <a href="#" class="btn btn-light" data-value="all">Все</a>
                                    <a href="#" class="btn btn-light" data-value="new">Новые</a>
                                    <a href="#" class="btn btn-light" data-value="inwork">В работе</a>
                                    <a href="#" class="btn btn-light" data-value="complete">Завершенные</a>
                                </div>
                            </div>

                            <div class="col">
                                <select class="custom-select" id="productSelect">
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

                    <table class="table fs-14">
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
                                    <div class="badge badge-pill badge-danger">Новый</div>
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
                                    <div class="badge badge-pill badge-warning">В работе</div>
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
                                    <div class="badge badge-pill badge-success">Завершенный</div>
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