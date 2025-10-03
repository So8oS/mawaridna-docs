# Payroll

## Overview

### The Payroll Overview

The Payroll Overview provides an at-a-glance summary of payroll activities for a selected month and year, allowing administrators to monitor the payroll process effectively.

---

## 1. Features

### Key Payroll Metrics

Displays summarized payroll data with the following status indicators:

* **Paid**: Number of payslips marked as fully paid.
* **Confirmed**: Number of payslips confirmed but not yet paid.
* **Review Ongoing**: Payslips under review or requiring validation.
* **Draft**: Payslips saved in draft status, awaiting further action.

### Payslip Information

**Employee Payslips:**
* Section for generated payslips.
* Displays total payslips generated and the total payment amount for the selected period.

**Department Total Amount:**
* Displays the total payment amount for all departments combined.

### Employer Contributions

Section to view the employer's contribution records based on the selected employee or department.

### Contracts Ending

Summary of the number of contracts expiring in the upcoming month.

### Department Chart

18. Visual representation of department-wise payroll distribution.

---

## 2. Usage Scenarios

### Monitor Payroll Status
Quickly identify the current status of payroll processes (e.g., drafts, confirmed, paid).

### Assess Employer Contributions
Analyze employer contributions for specific employees or departments.

### Track Contract Expirations
Stay informed about upcoming contract terminations to manage renewals or replacements.

---

## Employment Contracts

### The Employment Contracts Section

The Employment Contracts section enables administrators and HR personnel to manage employee contracts. It provides functionalities for creating, editing, and monitoring the status of contracts for employees.

---

## 1. Features

### Contract List

Displays all employee contracts in a tabular format.

**Key Columns:**
* **Contract**: The title of the contract.
* **Employee**: The name and ID of the employee associated with the contract.
* **Start Date**: The start date of the contract.
* **End Date**: The end date of the contract, if applicable.
* **Wage Type**: Monthly or hourly wage type.
* **Basic Salary**: The base salary specified in the contract.
* **Filing Status**: Filing status of the employee for tax or documentation purposes.
* **Status**: Indicates the current state of the contract: Active, Draft, Expired, or Terminated.

### Contract Status Dropdown

Located in the status column of each contract.

Allows changing the status of the contract to:
* Draft
* Active
* Expired
* Terminated

### Actions

* **Edit**: Opens a form to modify contract details.
* **Delete**: Removes the contract from the system.

---

## 2. Contract Creation

16. **Button**: + Create
17. **Fields Required:**
    * **Contract Title**: The title of the contract.
    * **Employee**: Select the employee for whom the contract is being created.
    * **Contract Start Date**: Specify the date when the contract begins.
    * **Contract End Date**: Specify the end date, if applicable.
    * **Wage Type**: Choose whether the employee is paid Monthly or Hourly.
    * **Pay Frequency**: Frequency of salary payments (e.g., monthly).
    * **Basic Salary**: Enter the base salary amount.
    * **Filing Status**: Specify the employee's filing status for tax purposes.
    * **Department**: Assign the employee to a department.
    * **Job Position**: Specify the job position associated with the contract.
    * **Job Role**: Define the role assigned to the employee.
    * **Shift**: Specify the shift timing for the employee.
    * **Work Type**: Specify if the employee works from the office, remotely, or in a hybrid model.
    * **Notice Period**: Define the required notice period for contract termination.
    * **Contract Document**: Upload a document for the contract (optional).
    * **Deduct from Basic Pay**: Enable deductions from the base salary if applicable.
    * **Calculate Daily Leave Amount**: Enable calculations for daily leave deductions.
    * **Note**: Additional remarks or notes about the contract.

---

## 3. Contract Details

* Clicking on a contract opens a detailed view displaying:
  * **Contract Title**: The title of the contract.
  * **Employee Information**: Name, ID, department, and job position.
  * **Wage and Payment Details**: Basic salary, wage type, and pay frequency.
  * **Contract Period**: Start and end dates of the contract.
  * **Status**: Current status of the contract.
  * **Work and Role Information**: Job role, shift, and work type.
  * **Notice Period**: Required notice for termination.

This section ensures efficient management of employee contracts by centralizing all relevant information and actions in a single interface.

---

## Earnings & Allowances

### The Earnings & Allowances Section

The Earnings & Allowances section provides options to manage and configure allowances for employees, including fixed and conditional allowances.

---

## 1. Features

### Allowance Cards

Each allowance is displayed as a card with the following information:

* **Title**: Name of the allowance (e.g., Travel Allowance, House Rent Allowance).
* **Amount**: Monetary value of the allowance.
* **One-Time Allowance**: Indicates whether the allowance is a one-time payment.
* **Taxable**: Displays if the allowance is taxable or not.

### Allowance Actions

Clicking on an allowance card provides details, such as:

* **Taxable**: Indicates whether the allowance is subject to tax.
* **One-Time Allowance**: Specifies if it is a one-time payment.
* **Condition-Based**: Shows whether the allowance depends on specific conditions.
* **Amount**: The monetary value allocated.
* **Eligibility**: Displays the condition (e.g., "If Basic Pay > 0").

**Actions available:**
* **Edit**: Modify allowance details.
* **Delete**: Remove the allowance.

---

## 2. Allowance Creation

### Steps to Create an Allowance

1. Click the **+ Create** button.
2. Fill in the fields in the allowance creation form:
   * **Title**: Name of the allowance.
   * **One-Time Date**: (Optional) Date for a one-time allowance.
   * **Include All Active Employees**: Toggle to apply the allowance to all employees.
   * **Specific Employees**: Assign the allowance to selected employees.
   * **Is Taxable**: Toggle if the allowance is taxable.
   * **Is Fixed**: Specify if the amount is fixed or variable.
   * **Is Condition-Based**: Enable to define eligibility conditions.
   * **Condition Criteria:**
     * **If Choice**: Select a base metric (e.g., Basic Pay).
     * **If Condition**: Define the condition (e.g., "Greater Than").
     * **If Amount**: Input the condition value.
   * **Amount**: Enter the monetary value.
3. Click **Save** to create the allowance.

---

## 3. Viewing and Managing Allowances

**View Allowance Details**: Click on an allowance card to view its full details, including:
* Taxable status, conditions, and eligibility criteria.
* Amount and payment type (e.g., one-time or recurring).

**Editing Allowances:**
* Navigate to an allowance and click **Edit**.
* Update the fields as needed and save the changes.

**Deleting Allowances:**
* Select an allowance and click **Delete** to remove it.

---

This section simplifies managing employee allowances by offering flexible and detailed configuration options.

---

## Deductions

### The Deductions Module

The Deductions module enables administrators to create and manage deductions for employee payroll. These deductions can be customized based on fixed or variable conditions, taxable or non-taxable criteria, and more.

---

## 1. Features

### Deduction Cards

* Displays a list of deductions in a card layout.
* **Key Details on Each Card:**
  * **Title**: Name of the deduction (e.g., "ESI," "Social Security").
  * **Amount:**
    * Employer Rate (percentage or fixed amount deducted from the employer).
    * Employee Rate (percentage or fixed amount deducted from the employee).
  * **One Time Deduction**: Indicates if the deduction is a one-time event.
  * **Pretax**: Indicates if the deduction is applied before taxes.

### Actions Menu

20. Accessible via the three-dot menu on each deduction card.
21. **Options Include:**
    * **Edit**: Modify deduction details.
    * **Delete**: Remove a deduction.

---

## 2. Deduction Creation

**Button**: + Create

**Purpose**: Add a new deduction by defining its parameters and conditions.

**Fields to Configure:**
* **Title**: Name of the deduction.
* **One Time Date**: Set a specific date if the deduction is a one-time event.
* **Include All Active Employees**: Toggle to apply the deduction to all active employees.
* **Specific Employees**: Select individual employees for the deduction.
* **Is Tax**: Indicates if the deduction is treated as a tax.
* **Is Pretax**: Determines if the deduction is calculated before taxes.
* **Is Condition-Based**: Toggle to enable condition-based deduction logic.
  * If enabled, specify:
    * **If Choice**: Select a base field (e.g., "Basic Pay").
    * **If Condition**: Define the condition (e.g., "Greater Than").
    * **If Amount**: Set the amount for the condition.
* **Update Compensation**: Option to adjust compensation details alongside the deduction.
* **Is Fixed**: Toggle to define if the deduction amount is fixed or variable.
* **Amount**: Specify the deduction amount.

---

## 3. Deduction Details

Click on a deduction card to view its details.

**Displayed Information:**
* Taxable or non-taxable status.
* One-time or recurring deduction.
* Condition-based criteria (if applicable).
* Maximum limit (if any).
* Employer and employee rates.

**Actions:**
* **Edit**: Update deduction details.
* **Delete**: Remove the deduction from the system.

---

This module simplifies managing payroll deductions, allowing for detailed customization and streamlined payroll processes.

---

## Payslips

### The Payslips Section

The Payslips section allows administrators to generate, view, and manage employee payslips. This section is critical for payroll management, providing detailed information on earnings, deductions, and net pay.

---

## 1. Features

### Payslip List

* Displays all generated payslips in a tabular format.
* **Key Columns:**
  * **Employee**: Name and badge ID of the employee.
  * **Start Date**: The beginning of the payroll period.
  * **End Date**: The end of the payroll period.
  * **Batch**: Indicates the payroll batch for the period.
  * **Gross Pay**: Total earnings before deductions.
  * **Deduction**: Total deductions for the payroll period.
  * **Net Pay**: Final payable amount after deductions.
  * **Status**: Current status of the payslip (Draft, Paid, etc.).

### Actions Menu

* **Edit**: Open the payslip to modify details such as allowances or deductions.
* **Delete**: Remove the payslip from the system.
* **Download**: Generate a downloadable PDF of the payslip.
* **Send Email**: Email the payslip to the respective employee.

---

## 2. Payslip Creation

**Button**: + Create

**Fields Required:**
* **Employee**: Select the employee for whom the payslip is to be generated.
* **Start Date**: Start date of the payroll period.
* **End Date**: End date of the payroll period.
* **Action**: After filling in the required fields, click **Save** to generate the payslip.

---

## 3. Payslip Details

On selecting a payslip from the list, a detailed view is displayed:

**Employee Details:**
* Employee Name, ID, Department, and Bank Account/Cheque Number.

**Payroll Summary:**
* **Allowances**: Lists earnings like Basic Pay, Travel Allowance, etc.
* **Deductions**: Includes items like taxes, loss of pay, etc.
* **Net Pay**: Total earnings minus deductions.

**Actions:**
* Add additional allowances or deductions by clicking the + button in their respective sections.
* Edit or delete allowances and deductions as needed.

---

## 4. Status Management

**Statuses:**
* **Draft**: Payslip is not finalized.
* **Paid**: Payment is processed and confirmed.
* **Review Ongoing**: Payslip is under review.

Administrators can update the status using the dropdown menu in the status column.

---

## Loans & Salary Advances

### Loans & Salary Advances Overview

The Loans & Salary Advances section facilitates the management of financial requests such as loans, advanced salaries, and penalties. Administrators can track and manage these requests for employees efficiently.

---

## 1. Features

### Request List

18. Displays all loan, advanced salary, or penalty requests as cards.
19. **Key Details on Each Card:**
    * **Employee**: Name and profile icon of the employee.
    * **Title**: Short title describing the request.
    * **Provided Date**: The date the loan/advance was issued.
    * **Type**: Specifies whether it's a loan, advanced salary, or penalty.
    * **Description**: Notes related to the request.
    * **Installments**: Button to view the installment breakdown for the request.

### Actions on Cards

* **Edit**: Opens the request form for modifications.
* **Delete**: Deletes the request.

---

## 2. Request Creation

14. **Button**: + Create
15. Opens a form to create a new loan, advanced salary, or penalty request.

**Fields in the Form:**
* **Type**: Select Loan, Advanced Salary, or Penalty/Fine from the dropdown.
* **Title**: Provide a descriptive title for the request.
* **Employee**: Select the employee from the dropdown list.
* **Amount**: Specify the amount requested.
* **Provided Date**: Date the loan or advance was given.
* **Description**: Add details about the reason or terms of the request.
* **Installment Amount**: Define the installment amount to be repaid.
* **Total Installments**: Set the total number of installments for repayment.
* **Installment Start Date**: Date on which installments will begin.
* **Settled**: Toggle to mark the request as settled.

**Steps to Create:**
1. Click the **+ Create** button.
2. Fill in the fields in the form.
3. Click **Save** to add the request.

---

## 3. Installment Details

**Button**: Installments on each card.

Opens a breakdown of installment payments:
* Amount Paid
* Remaining Balance
* Payment Dates
* Status (Paid/Unpaid)

Administrators can track repayment progress or adjust installment details if necessary.

---

This module simplifies the process of managing employee financial requests, providing transparency and efficiency.

---

## End-of-Service & Reimbursements

### The End-of-Service & Reimbursements Section

The End-of-Service & Reimbursements section provides employees with the functionality to submit requests for reimbursements or encashments. These requests can include monetary reimbursements, bonus point encashments, or leave encashments, all requiring manager or admin approval.

---

## 1. Features

### Reimbursement Requests Overview

Displays all reimbursement or encashment requests in a card format.

**Information on each card includes:**
* **Type**: Reimbursement, Bonus Point Encashment, or Leave Encashment.
* **Employee**: Name and ID of the employee requesting.
* **Date**: Submission date of the request.
* **Details**: Title, description, and amount of the request.

**Requests can have different statuses:**
* **Requested**: Pending approval.
* **Approved**: Approved by the manager/admin.
* **Rejected**: Declined by the manager/admin.

---

## 2. Request Creation

**Button**: + Create

Allows users to create new reimbursement or encashment requests.

**Steps:**
1. Click on the **+ Create** button to open the Reimbursement/Encashment form.
2. Fill in the following fields:
   * **Title**: A short description of the reimbursement or encashment.
   * **Type**: Select the type of request (Reimbursement, Bonus Point Encashment, Leave Encashment).
   * **Employee**: Select the requesting employee.
   * **Allowance on**: Specify the relevant date for the reimbursement or encashment.
   * **Attachments**: Upload any supporting documents (e.g., receipts or approval letters).
   * **Amount**: Specify the requested amount.
   * **Description**: Provide details or justification for the request.
3. Click **Save** to submit the request.

---

## 3. Request Types

### Reimbursement
* Used to request monetary reimbursement for expenses incurred.
* Examples: Travel expenses, office supplies, etc.

### Bonus Point Encashment
* Allows employees to convert earned bonus points into monetary value.

### Leave Encashment
* Enables employees to encash unused leave days for monetary compensation.

---

## 4. Request Details

Clicking on a reimbursement or encashment card provides a detailed view:

* **Employee Information**: Name, ID, and other related details.
* **Type**: Specifies whether it is a reimbursement, bonus point encashment, or leave encashment.
* **Date**: Indicates the submission or allowance date.
* **Description**: Additional details or justification for the request.
* **Amount**: The requested amount.
* **Attachments**: View supporting documents.

---

## Federal Tax

### The Federal Tax Section

The Federal Tax section manages the filing statuses and associated tax brackets for employees. This feature allows administrators to define, update, and apply specific tax rates based on income ranges.

---

## 1. Features

### Filing Status List

Displays all defined filing statuses in a tabular format.

**Key Columns:**
* **Tax Rate**: Percentage of income taxed for the specific range.
* **Min. Income**: Minimum income required for this tax bracket.
* **Max. Income**: Maximum income covered in this tax bracket.

### Actions Menu

* **Create**: Add a new tax bracket to the filing status.
* **Update**: Modify an existing tax bracket.
* **Delete**: Remove an existing tax bracket.

---

## 2. Filing Status Creation

### Steps to Create a Filing Status:

1. Click the **+ Create** button.
2. Fill in the required fields:
   * **Filing Status**: Name of the tax filing status (e.g., Single, Married).
   * **Based On**: Choose the income base (Basic Pay, Gross Pay, or Taxable Gross Pay).
   * **Python Code (optional)**: Add any custom Python logic for advanced configurations.
   * **Description**: Add a brief explanation for this filing status.
3. Save the filing status to make it available in the list.

---

## 3. Adding Tax Brackets to a Filing Status

### Steps to Add a Tax Bracket:

1. Select the desired **Filing Status** from the list.
2. Click the **+** button next to the filing status.
3. Provide details for the tax bracket:
   * **Tax Rate**: Enter the percentage rate for this bracket.
   * **Min. Income**: Set the minimum income to qualify for this bracket.
   * **Max. Income**: Define the maximum income for this bracket.
4. Save the tax bracket. It will appear under the selected filing status.

---

## 4. Managing Tax Brackets

* **Update**: Click the Edit Icon next to a tax bracket to modify its values.
* **Delete**: Use the Trash Icon to remove a tax bracket.

This feature ensures precise tax management for employees by allowing detailed configuration of income-based tax brackets.

