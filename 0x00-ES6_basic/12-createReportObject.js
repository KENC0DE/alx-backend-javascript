export default function createReportObject(employeesList) {
  const report = { allEmployees: {} };
  for (const dep in employeesList) {
    report.allEmployees[dep] = employeesList[dep];
  }
  report.getNumberOfDepartments = () => Object.keys(report).length;
  return report;
}
