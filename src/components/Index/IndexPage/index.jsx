import { useEffect, useState, createContext} from "react";

import Nav from "../../Base/nav";
import Header from "../FormHeader";
import IndexForm from "../IndexForm";
import { server } from "../../../helpers/fetch";


const Index = () => {

    return (
            <div className="with-nav radial-bg flex-center">
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