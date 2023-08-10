import { Link } from 'react-router-dom';
import avatar from '../../../assets/img/avatars/avatar-128.jpg'
import { btnsSelectStatus } from '../../../helpers/const';

const TableLeftPanel = ({filter, setFilter, allApplications}) => {
	if (allApplications) {
		const statusNewApplications = allApplications.filter((application) => application.status === 'new')
		const badge =  statusNewApplications.length === 0 ? null : <div className='badge' id='badge-new'>{statusNewApplications.length}</div>;

		return (
			<div className="left-panel blue-skin">
				<div className="left-panel__logo">
					<div className="left-panel__logo-title">CRM заявки</div>
					<div className="left-panel__logo-subtitle">учебный проект webcademy</div>
				</div>
	
				<div className="left-panel__user clearfix">
					<div className="left-panel__user-photo">
						<img src={avatar} alt="Avatar" />
					</div>
					<div className="left-panel__user-name">Петр <br />Васильевич</div>
				</div>
	
				<div className="left-panel__navigation">
					<div className="left-panel__navigation-title">Заявки</div>
					<ul>
						{btnsSelectStatus.map((btn) => {
							return <li key={btn.name}>
										<Link onClick={() => setFilter({...filter, status: btn.status})} 
										data-value={btn.status} 
										data-role="left-status" 
										href="#" 
										className={`${filter.status === btn.status ? 'active' : ''}`}>{btn.name}
										{btn.status === 'new' ? badge : null}
										</Link>
									</li>
						})}
					</ul>
				</div>
			</div>
		);
	}
	
}
 
export default TableLeftPanel;