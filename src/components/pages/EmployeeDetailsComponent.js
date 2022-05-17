import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APIHandler from "../config/APIHandler";

export default function EmployeeDetailsComponent() {
  const { id } = useParams();

  var [errorRes, setErrRes] = useState(false);
  var [errorMessage, seterrorMessage] = useState("");
  var [btnMessage, setbtnMessage] = useState(0);
  var [sendData, setsendData] = useState(false);
  var [errorResSalary, seterrorResSalary] = useState(false);
  var [errorResBank, seterrorResBank] = useState(false);
  var [errorMessageSalary, seterrorMessageSalary] = useState("");
  var [errorMessageBank, seterrorMessageBank] = useState("");
  var [btnMessageSalary, setbtnMessageSalary] = useState(0);
  var [btnMessageBank, setbtnMessageBank] = useState(0);
  var [sendDataSalary, setsendDataSalary] = useState(false);
  var [sendDataBank, setsendDataBank] = useState(false);
  var [employeeList, setemployeeList] = useState([]);
  var [dataLoaded, setLoad] = useState(false);
  var [address, setaddress] = useState("");
  var [name, setname] = useState("");
  var [phone, setphone] = useState("");
  var [joining_date, setjoining_date] = useState("");
  var [employeeSalaryList, setemployeeSalaryList] = useState([]);
  var [employeebankList, setemployeebankList] = useState([]);


  const formSubmit = (event) =>{
    event.preventDefault();
    btnMessage = setbtnMessage(1) ;

    const apiHandler = new APIHandler();
    const response =  apiHandler.editEmployeeData(
      event.target.name.value,
      event.target.joining_date.value,
      event.target.phone.value,
      event.target.address.value,
      id
    );
    console.log(response);
    response.then(res=>{
        console.log(res);
        btnMessage= setbtnMessage(0);
        errorRes= setErrRes(res.data.error) ;
        errorMessage= seterrorMessage(res.data.message) ;
        sendData= setsendData(true) ;
    });
    updateDataAgain();
  }

  useEffect(()=>{
    fetchEmployeeDataByID();
  });

  const fetchEmployeeDataByID = ()=> {
    updateDataAgain();
  }

  const formSubmitSalary=(event)=> {
    event.preventDefault();
    btnMessageSalary = setbtnMessageSalary(1) ;

    const apiHandler = new APIHandler();
    const response =  apiHandler.AddEmployeeSalaryData(
      event.target.salary_date.value,
      event.target.salary_amount.value,
      id
    );
    console.log(response);
    response.then(res=>{
        console.log(res);
        btnMessageSalary= setbtnMessageSalary(0);
        errorResSalary= seterrorResSalary(res.data.error) ;
        errorMessageSalary= seterrorMessageSalary(res.data.message) ;
        sendDataSalary= setsendDataSalary(true) ;
    });
    updateDataAgain();
    
  }

  const updateDataAgain=()=> {
    const apihandler = new APIHandler();
    const employeeData = apihandler.fetchEmployeeById(
      id
    );

    const employeeSalary =  apihandler.fetchSalaryEmployee(
      id
    );

    const employeeBank =  apihandler.fetchBankEmployee(
      id
    );
    // console.log(employeeData)
    employeeData.then(res=>{
        // console.log(res.data.data)
        name= setname(res.data.data.name) ;
        phone= setphone(res.data.data.phone) ;
        joining_date= setjoining_date(res.data.data.joining_date );
        address= setaddress(res.data.data.address) ;
        employeeSalary.then(res=>{
            employeeSalaryList= setemployeeSalaryList(res.data) ;
        })
        employeeBank.then(res=>{
            employeebankList= setemployeebankList(res.data );
        })
        //employeeList= employeeDataList.data.data ;
        dataLoaded= setLoad(true) ;
    })
   
  }

  const formSubmitBank=(event)=> {
    event.preventDefault();
    btnMessageBank = setbtnMessageBank(1) ;

    const apiHandler = new APIHandler();
    const response =  apiHandler.AddEmployeeBankData(
      event.target.bank_account_no.value,
      event.target.ifsc_no.value,
      id
    );
    console.log(response);
    response.then(res=>{
        btnMessageBank= setbtnMessageBank(0);
        errorResBank= seterrorResBank(res.data.error) ;
        errorMessageBank= seterrorMessageBank(res.data.message) ;
        sendDataBank= setsendDataBank(true) ;
    })
    updateDataAgain();
  }


  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <h2>Edit Employee #{id}</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>Edit Employee</h2>
              </div>
              <div className="body">
                <form onSubmit={formSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Name</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                            defaultValue={name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Joining Date</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="date"
                            id="joining_date"
                            name="joining_date"
                            className="form-control"
                            defaultValue={joining_date}
                            placeholder="Enter Date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Phone</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control"
                            placeholder="Enter Phone"
                            defaultValue={phone}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Address</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            placeholder="Enter Address"
                            defaultValue={address}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary m-t-15 waves-effect btn-block"
                    disabled={btnMessage == 0 ? false : true}
                  >
                    {btnMessage == 0
                      ? "Edit Employee"
                      : "Editing Employee Please Wait.."}
                  </button>
                  <br />
                  {errorRes == false && sendData == true ? (
                    <div className="alert alert-success" style={{marginTop:"2px"}}>
                      <strong>Success!</strong> {errorMessage}.
                    </div>
                  ) : (
                    ""
                  )}
                  {errorRes == true && sendData == true ? (
                    <div className="alert alert-danger" style={{marginTop:"2px"}}>
                      <strong>Failed!</strong>
                      {errorMessage}.
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>ADD Employee Salary</h2>
              </div>
              <div className="body">
                <form onSubmit={formSubmitSalary}>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Salary Date</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="date"
                            id="salary_date"
                            name="salary_date"
                            className="form-control"
                            placeholder="Enter Salary Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Salary Amount</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="salary_amount"
                            name="salary_amount"
                            className="form-control"
                            placeholder="Enter Salary Amount"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary m-t-15 waves-effect btn-block"
                    disabled={btnMessageSalary == 0 ? false : true}
                  >
                    {btnMessageSalary == 0
                      ? "Add Employee Salary"
                      : "Adding Employee Salary Please Wait.."}
                  </button>
                  <br />
                  {errorResSalary == false && sendDataSalary == true ? (
                    <div className="alert alert-success" style={{marginTop:"2px"}}>
                      <strong>Success!</strong> {errorMessageSalary}.
                    </div>
                  ) : (
                    ""
                  )}
                  {errorResSalary == true && sendDataSalary == true ? (
                    <div className="alert alert-danger" style={{marginTop:"2px"}}>
                      <strong>Failed!</strong>
                      {errorMessageSalary}.
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                {dataLoaded == false ? (
                  <div className="text-center">
                    <div className="preloader pl-size-xl">
                      <div className="spinner-layer">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <h2>Employee Salary</h2>
              </div>
              <div className="body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#ID</th>
                      <th>Salary Date</th>
                      <th>Salary Amount</th>
                      <th>Added On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeSalaryList?.length && employeeSalaryList.map((salary) => (
                      <tr key={salary.id}>
                        <td>{salary.id}</td>
                        <td>{salary.salary_date}</td>
                        <td>{salary.salary_amount}</td>
                        <td>{new Date(salary.added_on).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                <h2>ADD Employee Bank</h2>
              </div>
              <div className="body">
                <form onSubmit={formSubmitBank}>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="email_address">Account No.</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="bank_account_no"
                            name="bank_account_no"
                            className="form-control"
                            placeholder="Enter Account No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="email_address">IFSC Code</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="ifsc_no"
                            name="ifsc_no"
                            className="form-control"
                            placeholder="Enter IFSC Code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary m-t-15 waves-effect btn-block"
                    disabled={btnMessageBank == 0 ? false : true}
                  >
                    {btnMessageBank == 0
                      ? "Add Employee Bank"
                      : "Adding Employee Bank Please Wait.."}
                  </button>
                  <br />
                  {errorResBank == false &&
                  sendDataBank == true ? (
                    <div className="alert alert-success" style={{marginTop:"2px"}}>
                      <strong>Success!</strong> {errorMessageBank}.
                    </div>
                  ) : (
                    ""
                  )}
                  {errorResBank == true &&
                  sendDataBank == true ? (
                    <div className="alert alert-danger" style={{marginTop:"2px"}}>
                      <strong>Failed!</strong>
                      {errorMessageBank}.
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="header">
                {dataLoaded == false ? (
                  <div className="text-center">
                    <div className="preloader pl-size-xl">
                      <div className="spinner-layer">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <h2>Employee Bank</h2>
              </div>
              <div className="body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#ID</th>
                      <th>Account No</th>
                      <th>IFSC Code</th>
                      <th>Added On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeebankList?.length && employeebankList.map((bankdetails) => (
                      <tr key={bankdetails.id}>
                        <td>{bankdetails.id}</td>
                        <td>{bankdetails.bank_account_no}</td>
                        <td>{bankdetails.ifsc_no}</td>
                        <td>
                          {new Date(bankdetails.added_on).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
