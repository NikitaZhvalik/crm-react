import Nav from "../../Base/nav";
import TableLeftPanel from "../TableLeftPanel";
import TableMain from "../TableMain";

const Table = () => {
    return (
        <div className="with-nav body--dashboard">
            <Nav />
            <TableLeftPanel />
            <TableMain />
        </div>
    );
}
 
export default Table;