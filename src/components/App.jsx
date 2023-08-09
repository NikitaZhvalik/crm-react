import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Edit from "./Edit/EditPage";
import Index from "./Index/IndexPage";
import Table from "./Table/TablePage";
import Nav from './Base/nav';
import NotFound from './NotFound/NotFound';

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
