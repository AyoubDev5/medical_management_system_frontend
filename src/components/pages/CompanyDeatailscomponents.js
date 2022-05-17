import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import APIHandler from '../config/APIHandler';
import AuthHandler from '../config/AuthHandler';
import Config from '../config/Config';

export default function CompanyDeatailscomponents() {

    var   [errorRes,setErrRes] = useState(false);
    var   [errorMessage,seterrorMessage] = useState('');
    var   [btnMessage,setbtnMessage] = useState(0);
    var   [sendData,setsendData] = useState(false);
    var   [companyBank,setcompanyBank] = useState(false);
    var   [name,setname] = useState("");
    var   [license_no,setLice] = useState("");
    var   [address,setAddr] = useState("");
    var   [contact_no,setConta] = useState("");
    var   [email,setEmail] = useState("");
    var   [description,setDesc] = useState("");
    var   [dataLoaded,setLoad] = useState(false);

    const {id} = useParams();

    const formSubmit = (event) =>{
        event.preventDefault();
        btnMessage = setbtnMessage(1) ;
      
        const apiHandler = new APIHandler();
        const response =  apiHandler.editCompanyData(
          event.target.name.value,
          event.target.license_no.value,
          event.target.address.value,
          event.target.contact_no.value,
          event.target.email.value,
          event.target.description.value,
          id
        );
        response.then(res=>{
            console.log(res);
            btnMessage= setbtnMessage(0);
            errorRes= setErrRes(res.data.error) ;
            errorMessage= seterrorMessage(res.data.message) ;
            sendData= setsendData(true) ;
        });
       
    }

      useEffect(() => {
        fetchCompanyData()
      });

      const fetchCompanyData = ()=> {
        axios.get(Config.companyApiUrl + "" + id + "/", {
            headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
        })
        .then(companydata=>{
            // console.log(companydata);
            companyBank= setcompanyBank(companydata.data.data.company_bank) ;
            name= setname(companydata.data.data.name) ;
            license_no= setLice(companydata.data.data.license_no) ;
            address= setAddr(companydata.data.data.address) ;
            contact_no= setConta(companydata.data.data.contact_no) ;
            email= setEmail(companydata.data.data.email) ;
            description= setDesc(companydata.data.data.description) ;
            dataLoaded= setLoad(true) ;
        }).catch(err=>{console.log(err)})  
      }

  return (
    <section className="content">
    <div className="container-fluid">
      <div className="block-header">
        <h2>MANAGE COMPANY</h2>
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
              <h2>EDIT Company</h2>
            </div>
            <div className="body">
              <form onSubmit={formSubmit}>
                <label htmlFor="email_address">Name</label>
                <div className="form-group">
                  <div className="form-line">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter Company Name"
                      defaultValue={name}
                    />
                  </div>
                </div>
                <label htmlFor="email_address">License No.</label>
                <div className="form-group">
                  <div className="form-line">
                    <input
                      type="text"
                      id="license_no"
                      name="license_no"
                      className="form-control"
                      placeholder="Enter License No."
                      defaultValue={license_no}
                    />
                  </div>
                </div>
                <label htmlFor="email_address">Address</label>
                <div className="form-group">
                  <div className="form-line">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="form-control"
                      placeholder="Enter Company Address"
                      defaultValue={address}
                    />
                  </div>
                </div>
                <label htmlFor="email_address">Contact No.</label>
                <div className="form-group">
                  <div className="form-line">
                    <input
                      type="text"
                      id="contact_no"
                      name="contact_no"
                      className="form-control"
                      placeholder="Enter Contact No."
                      defaultValue={contact_no}
                    />
                  </div>
                </div>
                <label htmlFor="email_address">Email</label>
                <div className="form-group">
                  <div className="form-line">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Company Email"
                      defaultValue={email}
                    />
                  </div>
                </div>
                <label htmlFor="email_address">Description</label>
                <div className="form-group">
                  <div className="form-line">
                    <input
                      type="text"
                      id="description"
                      name="description"
                      className="form-control"
                      placeholder="Enter Description"
                      defaultValue={description}
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary m-t-15 waves-effect btn-block"
                  disabled={btnMessage == 0 ? false : true}
                >
                  {btnMessage == 0
                    ? "Edit Company"
                    : "Editing Company Please Wait.."}
                </button>
                <br />
                {errorRes == false &&
                sendData == true ? (
                  <div className="alert alert-success" style={{marginTop:"2px"}}>
                    <strong>Success!</strong> {errorMessage}.
                  </div>
                ) : (
                  ""
                )}
                {errorRes == true &&
                sendData == true ? (
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
              <h2>Company Bank</h2>
              <div className="header-dropdown m-r--5">
                <button
                  className="btn btn-info"
                >
                    <Link to={"/addCompanyBank/"+id}>
                        Add Company
                    </Link>
                 
                </button>
              </div>
            </div>
            <div className="body table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Account No.</th>
                    <th>IFSC Code</th>
                    <th>Added On</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {companyBank?.length && companyBank.map((company) => (
                    <tr key={company.id}>
                      <td>{company.id}</td>
                      <td>{company.bank_account_no}</td>
                      <td>{company.ifsc_no}</td>
                      <td>{new Date(company.added_on).toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-block btn-warning"
                        >
                            <Link to={"/editcompanybank/" + id + "/" + company.id}>
                                EDIT
                            </Link>
                        </button>
                        <button className="btn btn-block btn-danger">
                          DELETE
                        </button>
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
  )
}
