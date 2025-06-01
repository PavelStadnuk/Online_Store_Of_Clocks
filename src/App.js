import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Product from './Components/Product'
import Basket from './Pages/Basket'
import BuildYourWatch from './Pages/BuildYourWatch'
import ContactUs from './Pages/ContactUs'
import Delivery from './Pages/Delivery'
import Error404 from './Pages/Error404'
import Home from './Pages/Home'
import LoginCreateAccount from './Pages/LoginCreateAccount'
import Products from './Pages/Products'
import VolumenzeitAccount from './Pages/VolumenzeitAccount'
import style from './SCSS/App.module.scss'
const App = () => {
	return (
		<div className={style}>
			<Header />
			<Routes>
				{' '}
				<Route path='/Home' element={<Home />} />
				<Route path='/Watches' element={<Products />} />
				<Route path='/Watches/:id' element={<Product />} />
				<Route path='/Basket' element={<Basket />} />
				<Route path='/BuildYourWatch' element={<BuildYourWatch />} />
				<Route path='/Delivery' element={<Delivery />} />
				<Route path='/ContactUs' element={<ContactUs />} />
				<Route path='/Jewelry' element={<Error404 />} />
				<Route path='/Brand' element={<Error404 />} />
				<Route
					path='/LoginCreateAccount/:params'
					element={<LoginCreateAccount />}
				/>
				<Route path='/VolumenzeitAccount' element={<VolumenzeitAccount />} />
				<Route path='*' element={<Home />} />
			</Routes>
			<Footer />
		</div>
	)
}
export default App
