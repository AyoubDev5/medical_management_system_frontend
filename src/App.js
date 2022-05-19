import { Route, Routes, Navigate } from "react-router-dom";
// import Signup from "./components/Singup";
import Login from "./components/Login";
import Maincomponents from "./components/Maincomponents";
import { PrivateRoute } from "./components/config/Privateroute";
import Companycomponents from "./components/pages/Companycomponents";
import { NewPrivateRoute } from "./components/config/NewPrivateroute";
import Homecomponents from "./components/Homecomponents";
import Config from "./components/config/Config";
import Logout from "./components/pages/Logout";
import CompanyDeatailscomponents from "./components/pages/CompanyDeatailscomponents";
import CompanyAddBankComponent from "./components/pages/CompanyAddBankComponent ";
import CompanyEditBankComponent from "./components/pages/CompanyEditBankComponent";
import MedicineAddComponent from "./components/pages/MedicineAddComponent";
import MedicineManageComponent from "./components/pages/MedicineManageComponent";
import CompanyAccountComponent from "./components/pages/CompanyAccountComponent ";
import EmployeeComponent from "./components/pages/EmployeeComponent ";
import EmployeeDetailsComponent from "./components/pages/EmployeeDetailsComponent";
import BillGenerateComponent from "./components/pages/BillGenerateComponent ";
import CustomerRequestComponent from "./components/pages/CustomerRequestComponent";

function App() {
	

	return (
		<Routes>
			<Route exact path='/home' activepage="0" element={<NewPrivateRoute><Homecomponents/></NewPrivateRoute>}/>
			<Route exact path='/company' activepage="1" element={<NewPrivateRoute><Companycomponents/></NewPrivateRoute>}/>
			<Route exact path="/companydetails/:id" activepage="1" element={<NewPrivateRoute><CompanyDeatailscomponents /></NewPrivateRoute>}/>
			<Route exact path="/addCompanyBank/:id" activepage="1" element={<NewPrivateRoute><CompanyAddBankComponent /></NewPrivateRoute>}/>
			<Route exact path="/editcompanybank/:company_id/:id" activepage="1" element={<NewPrivateRoute><CompanyEditBankComponent /></NewPrivateRoute>}/>
			<Route exact path="/addMedicine" activepage="2" element={<NewPrivateRoute><MedicineAddComponent /></NewPrivateRoute>}/>
			<Route exact path="/manageMedicine" activepage="3" element={<NewPrivateRoute><MedicineManageComponent /></NewPrivateRoute>}/>
			<Route exact path="/manageCompanyAccount" activepage="4" element={<NewPrivateRoute><CompanyAccountComponent /></NewPrivateRoute>}/>
			<Route exact path="/employeeManage" activepage="5" element={<NewPrivateRoute><EmployeeComponent /></NewPrivateRoute>}/>
			<Route exact path="/employeedetails/:id" activepage="5" element={<NewPrivateRoute><EmployeeDetailsComponent /></NewPrivateRoute>}/>
			<Route exact path="/generateBill" activepage="6" element={<NewPrivateRoute><BillGenerateComponent /></NewPrivateRoute>}/>
			<Route exact path="/customerRequest" activepage="7" element={<NewPrivateRoute><CustomerRequestComponent /></NewPrivateRoute>}/>
			{/* <Route path="/signup" exact element={<Signup />} /> */}
			<Route path="/login" exact element={<Login />} />
			<Route path={Config.logoutPageUrl} exact element={<Logout />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
