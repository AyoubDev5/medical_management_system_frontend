import React ,{useState,useEffect}from "react";
import { Link, useParams,   } from "react-router-dom";
import APIHandler from "../config/APIHandler";


export default function CompanyEditBankComponent() {
    
  var   [errorRes,setErrRes] = useState(false);
  var   [errorMessage,seterrorMessage] = useState('');
  var   [btnMessage,setbtnMessage] = useState(0);
  var   [sendData,setsendData] = useState(false);
  var   [dataLoaded,setLoad] = useState(false);
  var   [ifsc_no,setIfsc] = useState('');
  var   [bank_account_no,setBank] = useState('');

  const {company_id,id} = useParams();
  
    const formSubmit=(event)=> {
      event.preventDefault();
      btnMessage=setbtnMessage(1) ;
  
      const apiHandler = new APIHandler();
      const response = apiHandler.editCompanyBankData(
        event.target.bank_account_no.value,
        event.target.ifsc_no.value,
        company_id,
        id
      );
      response.then(res=>{
        // console.log(res);
        btnMessage= setbtnMessage(0);
        errorRes= setErrRes(res.data.error) ;
        errorMessage= seterrorMessage(res.data.message) ;
        sendData= setsendData(true) ;
      });
    }
  
    useEffect(() => {
        fetchCompanyBankData()
    });
  
    const fetchCompanyBankData=()=> {
      const apihandler = new APIHandler();
      const companydata = apihandler.fetchCompanyBankDetails(id);
    //   console.log(companydata);
        companydata.then(res=>{
            bank_account_no= setBank(res.data.data.bank_account_no) ;
            ifsc_no= setIfsc(res.data.data.ifsc_no) ;
            dataLoaded= setLoad(true) ;
        })
       
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
                    <h2>Edit Company Bank #{id}</h2>
                  </div>
                  <div className="body">
                    <form onSubmit={formSubmit}>
                      <label htmlFor="email_address">Account No</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="bank_account_no"
                            name="bank_account_no"
                            className="form-control"
                            placeholder="Enter Company Account No."
                            defaultValue={bank_account_no}
                          />
                        </div>
                      </div>
                      <label htmlFor="email_address">IFSC No.</label>
                      <div className="form-group">
                        <div className="form-line">
                          <input
                            type="text"
                            id="ifsc_no"
                            name="ifsc_no"
                            className="form-control"
                            placeholder="Enter IFSC Code."
                            defaultValue={ifsc_no}
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
                          ? "Edit Company Bank"
                          : "Edit Company Bank Please Wait.."}
                      </button>
                      <br />
                      {errorRes == false &&
                      sendData == true ? (
                        <div className="alert alert-success" style={{marginTop:"2px"}}>
                          <strong>Success!</strong> {errorMessage}.
                          <Link
                            to={
                              "/companydetails/" +company_id
                            }
                            className="btn btn-info"
                          >
                            Back to Company Details
                          </Link>
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
          </div>
        </section>
      );
  }