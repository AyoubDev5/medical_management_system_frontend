class Config {
    // static LoginUrl="https://appoython.herokuapp.com/api/gettoken/";
    // static refreshApiUrl = "https://appoython.herokuapp.com/api/resfresh_token/";
    // static companyApiUrl = "https://appoython.herokuapp.com/api/company/";
    static LoginUrl="http://127.0.0.1:8000/api/gettoken/";
    static refreshApiUrl = "http://127.0.0.1:8000/api/resfresh_token/";
    static companyApiUrl = "http://127.0.0.1:8000/api/company/";
    static companyBankApiUrl = "http://127.0.0.1:8000/api/companybank/";
    static companyOnly = "http://127.0.0.1:8000/api/companyonly/";
    static medicineApiUrl = "http://127.0.0.1:8000/api/medicine/";
    static companyAccountApiUrl = "http://127.0.0.1:8000/api/companyaccount/";
    static employeeApiURL = "http://127.0.0.1:8000/api/employee/";
    static employeeBankApiUrl = "http://127.0.0.1:8000/api/employee_all_bank/";
    static employeeBankApiUrlBYID = "http://127.0.0.1:8000/api/employee_bankby_id/";
    static employeeSalaryApiUrl = "http://127.0.0.1:8000/api/employee_all_salary/";
    static employeeSalaryByIdApiUrl = "http://127.0.0.1:8000/api/employee_salaryby_id/";
    static generateBillApiUrl = "http://127.0.0.1:8000/api/generate_bill_api/";
    static medicineNameApiUrl = "http://127.0.0.1:8000/api/medicinebyname/";
    static customerRequestApiUrl = "http://127.0.0.1:8000/api/customer_request/";
    static homeApiUrl = "http://127.0.0.1:8000/api/home_api/";
    static homeUrl="/home";
    static logoutPageUrl = "/logout";
    static sidebarItem = [
        { index: "0", title: "Home", url: "/home", icons: "home" },
        { index: "1", title: "Company", url: "/company", icons: "assessment" },
        {
          index: "2",
          title: "Add Medicine",
          url: "/addMedicine",
          icons: "assessment",
        },
        {
          index: "3",
          title: "Manage Medicine",
          url: "/manageMedicine",
          icons: "assessment",
        },
        {
          index: "4",
          title: "Manage Company Account",
          url: "/manageCompanyAccount",
          icons: "assessment",
        },
        {
          index: "5",
          title: "Manage Employee",
          url: "/employeeManage",
          icons: "assessment",
        },
        {
          index: "6",
          title: "Generate Bill",
          url: "/generateBill",
          icons: "assessment",
        },
        {
          index: "7",
          title: "Customer Request",
          url: "/customerRequest",
          icons: "assessment",
        },
      ];
}

export default Config