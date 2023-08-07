import TableLeftPanel from "../TableLeftPanel";
import TableMain from "../TableMain";

const Table = () => {
    return (
        <div className="with-nav body--dashboard">
            <TableLeftPanel />
            <TableMain />
        </div>
    );
}
 
export default Table;