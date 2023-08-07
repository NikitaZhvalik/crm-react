import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Edit from "./Edit/EditPage";
import Index from "./Index/IndexPage";
import Table from "./Table/TablePage";
import Nav from './Base/nav';

const App = () => {
  return (
		<Router>
			<Nav />
			<div className='app'>
				<Routes>
					<Route path='/' element={<Index />}></Route>
					<Route path='/table' element={<Table />}></Route>
					<Route path='/edit' element={<Edit />}></Route>
					<Route path="/edit/:id" element={<Edit />}/>
				</Routes>
			</div>
		</Router>
  );
};

export default App;
