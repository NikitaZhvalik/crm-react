import EditForm from "../EditForm";
import EditHeader from "../EditHeader";

const Edit = () => {
    return (
        <div className="with-nav">
            <div className="form-wrapper">
                <div className="container-fluid">
                        <EditHeader />
                    <div className="row">
                        <EditForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Edit;