import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="project-nav">
            <div className="project-nav__links-wrapper">
                <Link to="/">
                    <h4 className="btn btn-link">Форма добавления заявок</h4>
                </Link>
                <Link to="/table">
                    <h4 className="btn btn-link">Таблица с заявками</h4>
                </Link>
                <Link to="/edit">
                    <h4 className="btn btn-link">Редактирование заявки</h4>
                </Link>
            </div>
        </nav>
    );
}
 
export default Nav;