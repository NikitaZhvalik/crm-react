import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Edit from "../Pages/Edit";
import Index from '../Pages/Index';
import Table from "../Pages/Table";
import Nav from './Base/nav';
import NotFound from '../Pages/NotFound/NotFound';

const App = () => {
  	return (
		<Router>
			<Nav />
			<div className='app'>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/table' element={<Table />} />
					<Route path="/edit/:id" element={<Edit />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
  	);
};

export default App;
