class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(private readonly id:string,public name: string) {
    this.name = name;
    console.log(Department.fiscalYear)
  }
  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  constructor(id: string,public admins:string[]) {
    super(id,'IT');
    this.admins=admins;
  }
}
class AcoountDepartment extends Department {
  private lastReport: string;
  get mostRecentReport() {
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found.');
  }
  set mostRecentReport(value: string) {
    if(!value){
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, public reports: string[]) {
    super(id, 'Account');
    this.lastReport= reports[0];
  }
  addEmployee(employee: string) {
    if(employee==='Max'){
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport=text;
  }
    printReports() {
        console.log(this.reports);
    }
}
const employee1=Department.createEmployee('Max1123');
console.log(employee1);
const department=new ITDepartment('d1',['Max']);
department.describe();
department.addEmployee('Max');
department.addEmployee('Manu');
department.printEmployeeInformation();
console.log(department);
const accounting=new AcoountDepartment('d2',[]);

accounting.addReport('Something went wrong...');
accounting.mostRecentReport='Year End Report';
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
console.log(accounting);