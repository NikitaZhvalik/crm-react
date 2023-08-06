import Nav from "../../Base/nav";
import Header from "../FormHeader";
import IndexForm from "../IndexForm";


const Index = () => {
    return (
        <div>
            <Nav />
            <div className="white-plate white-plate--payment">
                <div className="container-fluid">
                        <Header />
                    <div className="white-plate__line-between white-plate__line-between--main">
                    </div>
                        <IndexForm />
                </div>
	         </div>
        </div>
    );
}
 
export default Index;