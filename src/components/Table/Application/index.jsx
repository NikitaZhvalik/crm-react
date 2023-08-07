import { Link } from "react-router-dom";

const Application = ({application}) => {
    const {phone, name, product, email, id, status, date} = application;
    
    const statusObj = {
        new: "Новая",
        inwork: "В работе",
        complete: "Завершенная",
    }

    const statusClassObj = {
        new: "badge-danger",
        inwork: "badge-warning",      
        complete: "badge-success",
    }

    const productObj = {
        'course-html': "Курс по верстке",
        'course-js': "Курс по JavaScript",
        'course-vue': "Курс по VUE JS",
        'course-php': "Курс по PHP",
        'course-wordpress': "Курс по WordPress",
    }

    const cssStatus = `badge badge-pill ${statusClassObj[status]}`;
    return (
            <tr>
                <th scope="row">{id}</th>
                <td>{date}</td>
                <td>{productObj[product]}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                    <div className={cssStatus}>{statusObj[status]}</div>
                </td>
                <td>
                    <Link to={`/edit/${id}`}>
                        Редактировать
                    </Link>
                </td>
            </tr>
    );
}
 
export default Application;