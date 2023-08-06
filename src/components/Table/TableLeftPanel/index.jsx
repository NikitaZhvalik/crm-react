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
					<li><a data-value="all" data-role="left-status" href="#" className="active">Все вместе</a></li>
					<li><a data-value="new" data-role="left-status" href="#" >Новые<div className="badge" id="badge-new">12</div></a></li>
					<li><a data-value="inwork" data-role="left-status" href="#">В работе</a></li>
					<li><a data-value="complete" data-role="left-status" href="#">Завершенные</a></li>
				</ul>
			</div>
			{/* <!-- // Navigation 1 --> */}
		</div>
    );
}
 
export default TableLeftPanel;