const IndexForm = () => {
    return (
            <form id="form" method="POST" action="">
                <label>Ваши данные:</label>
                <div className="form-group">
                    <input id="name" type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required />
                </div>
                <div className="form-group">
                    <input id="phone" type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон" />
                </div>
                <div className="form-group">
                    <input id="email" type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                    <select id="product" name="product" className="form-control">
                        <option value="course-html">Курс по верстке</option>
                        <option value="course-js">Курс по JavaScript</option>
                        <option value="course-vue">Курс по VUE JS</option>
                        <option value="course-php">Курс по PHP</option>
                        <option value="course-wordpress">Курс по WordPress</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
                </div>
            </form>
    );
}
 
export default IndexForm;