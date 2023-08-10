import { Link } from "react-router-dom";
import renames from "../../../helpers/renames";

const Application = ({application}) => {
    const {phone, name, product, email, id, status, date} = application;
    const {statusObj, statusClassObj, productObj} = renames;

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