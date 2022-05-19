class Config {
    // static LoginUrl="https://appoython.herokuapp.com/api/gettoken/";
    // static refreshApiUrl = "https://appoython.herokuapp.com/api/resfresh_token/";
    // static companyApiUrl = "https://appoython.herokuapp.com/api/company/";
    static LoginUrl="https://back-end-python.herokuapp.com/api/gettoken/";
    static refreshApiUrl = "https://back-end-python.herokuapp.com/api/resfresh_token/";
    static companyApiUrl = "https://back-end-python.herokuapp.com/api/company/";
    static companyBankApiUrl = "https://back-end-python.herokuapp.com/api/companybank/";
    static companyOnly = "https://back-end-python.herokuapp.com/api/companyonly/";
    static medicineApiUrl = "https://back-end-python.herokuapp.com/api/medicine/";
    static companyAccountApiUrl = "https://back-end-python.herokuapp.com/api/companyaccount/";
    static employeeApiURL = "https://back-end-python.herokuapp.com/api/employee/";
    static employeeBankApiUrl = "https://back-end-python.herokuapp.com/api/employee_all_bank/";
    static employeeBankApiUrlBYID = "https://back-end-python.herokuapp.com/api/employee_bankby_id/";
    static employeeSalaryApiUrl = "https://back-end-python.herokuapp.com/api/employee_all_salary/";
    static employeeSalaryByIdApiUrl = "https://back-end-python.herokuapp.com/api/employee_salaryby_id/";
    static generateBillApiUrl = "https://back-end-python.herokuapp.com/api/generate_bill_api/";
    static medicineNameApiUrl = "https://back-end-python.herokuapp.com/api/medicinebyname/";
    static customerRequestApiUrl = "https://back-end-python.herokuapp.com/api/customer_request/";
    static homeApiUrl = "https://back-end-python.herokuapp.com/api/home_api/";
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