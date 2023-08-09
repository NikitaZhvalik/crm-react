import { Link } from 'react-router-dom';
import avatar from './../../../img/avatars/avatar-128.jpg'

const TableLeftPanel = () => {
    return (
        // <!-- left-panel -->
		<div className="left-panel blue-skin">
			{/* <!-- Logo --> */}
			<div className="left-panel__logo">
				<div className="left-panel__logo-title">CRM заявки</div>
				<div className="left-panel__logo-subtitle">учебный проект webcademy</div>
			</div>
			{/* <!-- // Logo -->
			<!-- User --> *ƒ/} */}
			<div className="left-panel__user clearfix">
				<div className="left-panel__user-photo">
					<img src={avatar} alt="Avatar" />
				</div>
				<div className="left-panel__user-name">Петр <br />Васильевич</div>
			</div>
			{/* {/* <!-- // User -->
			<!-- Navigation 1 --> */}
			<div className="left-panel__navigation">
				<div className="left-panel__navigation-title">Заявки</div>
				<ul>
					<li><Link data-value="all" data-role="left-status" href="#" className="active">Все вместе</Link></li>
					<li><Link data-value="new" data-role="left-status" href="#" >Новые<div className="badge" id="badge-new">12</div></Link></li>
					<li><Link data-value="inwork" data-role="left-status" href="#">В работе</Link></li>
					<li><Link data-value="complete" data-role="left-status" href="#">Завершенные</Link></li>
				</ul>
			</div>
			{/* <!-- // Navigation 1 --> */}
		</div>
    );
}
 
export default TableLeftPanel;