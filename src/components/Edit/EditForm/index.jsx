import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { server } from "../../../helpers/fetch";
import Loader from "../../../UI/Loader/Loader";
import useFetch from "../../../helpers/useFetch";
import RenderEditForm from "./render";

const EditForm = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {data: application, isLoading} = useFetch(server + `applications/${id}`)

    const delApplication = () => {
        fetch(server + `applications/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            navigate('/table')
        })
        .catch((error) => {
            alert('При удалении изменений произошел сбой')
            console.warn(error);
        })
    }
                                
    return (
        <div className="col">
            {isLoading && <Loader />}
            {application && <RenderEditForm application={application} id={id} delApplication={delApplication}/>}
        </div>
    );
}
 
export default EditForm;