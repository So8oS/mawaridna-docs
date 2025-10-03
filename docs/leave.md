# Leave

## Overview

### The Leave Dashboard

The Leave Dashboard serves as a comprehensive overview for managing leave requests and statuses across the organization. It contains the following key elements:

### Key Sections:

11. **Requests Overview:**
    * Displays metrics for requests pending approval, approved leaves, and rejected leaves for the current month.

12. **Employee Leaves:**
    * Highlights any leave requests made by employees within the month.

13. **On Leave:**
    * Lists employees who are currently on leave, providing an at-a-glance view of unavailable team members.

14. **Upcoming Holidays:**
    * Displays the next holidays scheduled for the month.

15. **Department Leaves:**
    * Breaks down leave requests by department, helping to identify potential workload imbalances.

16. **Leave Type Analytics:**
    * Provides a count of leave requests categorized by type (e.g., sick leave, casual leave).

17. **Weekly Leave Trends:**
    * Offers a graphical representation of leave patterns over the weeks of the current month.

### Functionality:

**Dynamic Filtering**: Users can select specific timeframes or departments to view leave data relevant to their needs.

**Personalized View**: A shortcut to "View Personal Dashboard" allows users to quickly access their own leave data and statuses.

**Integration with Calendar**: Calendar dropdowns streamline the selection of specific months or weeks for focused analysis.

This dashboard acts as a centralized tool for HR and managers to monitor, approve, and analyze leave activities, ensuring smooth operations and maintaining balance within the workforce.

---

## My Requests

### The My Requests Section

The My Requests section serves as a personal hub for employees to manage their leave requests. Here's a breakdown of its features:

* **Overview Display:**
  * If no leave requests are found, the interface prominently displays an illustration and a message stating "No search result found!".
  * Status filters are visually represented using color codes:
    * Yellow for "Requested"
    * Green for "Approved"
    * Gray for "Cancelled"
    * Red for "Rejected"

* **Create Leave Request:**
  * Clicking the "+ Create" button opens a modal where users can fill in the leave details:
    * **Leave Type**: Dropdown for selecting predefined leave categories (e.g., Sick Leave, Annual Leave).
    * **Start and End Dates**: Allows specifying the period for leave.
    * **Start Date Breakdown & End Date Breakdown**: Users can choose between "Full Day," "First Half," or "Second Half."
    * **Attachment**: Option to upload supporting documents, such as a medical certificate or proof for leave.
    * **Description**: A mandatory field for detailing the reason for the leave request.

* **Bulk Selection:**
  * A "Select All Requests" option is present to streamline actions on multiple leave entries.

This section ensures employees can efficiently track and submit their leave requests while providing a clean and user-friendly interface for interaction. The option to add breakdowns for partial days adds a layer of flexibility to leave management.

---

## Team Requests (Leave Requests)

### Team Requests Section

The Team Requests section allows managers and HR personnel to manage employee leave applications efficiently. It provides a centralized interface for reviewing, approving, or rejecting leave requests, ensuring smooth coordination within teams and departments.

---

## 1. Main Leave Requests Table

The main table provides a complete overview of all leave requests submitted by employees.

**Columns:**
* **Employee**: Displays the employee's name and ID.
* **Leave Type**: Type of leave requested (e.g., Casual Leave, Sick Leave, Annual Leave).
* **Start and End Dates**: The requested leave duration.
* **Requested Days**: Total days of leave requested.
* **Leave Clash**: Highlights conflicts with other team members' leaves.
* **Status**: Current state (Requested, Approved, Rejected, Cancelled).
* **Comments**: Access to notes or feedback on the request.
* **Actions**: Edit, delete, or process leave requests.
* **Penalties**: Apply leave deductions or financial penalties.
* **Confirmation**: Approve or reject directly from the table.

**Batch Actions:**
* **Bulk Approve/Reject**: Process multiple requests at once.
* **Export**: Export leave request data for reporting or recordkeeping.
* **Delete**: Remove multiple leave requests simultaneously.

---

## 2. Comments Section

13. Clicking the **Comments** button opens a dedicated thread for the selected leave request.
14. Comments appear chronologically and display the author's name.
15. Authorized users can delete comments if necessary.

---

## 3. Penalty Adjustment Popup

Accessed via the **Penalty** button in the main table. Managers can assign penalties or adjust leave balances.

**Features include:**

13. **Leave Type Selection**: Adjust a specific leave type.
14. **Minus Leaves**: Deduct leave days from the balance.
15. **Deduct from Carry Forward**: Toggle to use carry-forward leave days.
16. **Penalty Amount**: Enter a financial deduction (applied to payslips).
17. **Leave Balance Display**: Shows available and carry-forward days for each leave type.

---

## 4. Create Leave Request

Managers or HR can create leave requests on behalf of employees.

**Fields:**
* **Employee**: Select from the employee directory.
* **Leave Type**: Mandatory selection.
* **Start and End Dates**: With options for Full Day, First Half, or Second Half.
* **Attachment**: Upload supporting files (e.g., medical certificate).
* **Description**: Reason for leave.

**Actions:**
* **Save**: Submit the request for approval.

---

## Leave Categories

### Leave Categories Section

#### Leave Types Page

The Leave Types page provides a comprehensive overview and management functionality for various types of leaves within an organization. Here's a breakdown of its features:

### 1. Leave Categories Overview

The page lists all existing leave types in a card-based format with key information:

17. **Name of Leave Type** (e.g., Maternity Leave, Sick Leave, etc.)
18. **Payment Status**: Paid or Unpaid
19. **Total Days Allowed**

Each card includes additional options (via a menu button or click):
* **Edit**: Modify the leave type details.
* **Assign**: Allocate this leave type to specific employees.
* **Delete**: Remove the leave type.

### 2. Creating a Leave Type

When creating a new leave type, the form includes:

**Leave Name**: The name of the leave type.

**Icon and Color**: Visual customization for easy identification.

**Payment Status**: Choose between Paid or Unpaid.

**Total Days**: Specify the maximum number of days allowed.

**Additional Settings:**
* **Limit Leave Days**: Enable or disable restrictions on days.
* **Reset**: Decide if the leave resets periodically.
* **Require Approval**: Indicate if manager approval is mandatory.
* **Require Attachment**: Attach supporting documentation.
* **Exclude Company Holidays**: Exclude public or company holidays.
* **Is Encashable**: Specify if unused leave days are convertible into monetary compensation.
* **Assign to Employees**: Allocate the leave type to individual employees or groups.

Once filled, the **Create** button finalizes the new leave type.

### 3. Viewing Leave Type Details

Clicking on a leave type card reveals a detailed popup with:

11. **Name and Icon**: For identification.
12. **Attributes**: Includes total days, reset options, carry forward type, payment status, and approval requirements.
13. **Options:**
    * **Edit**: Adjust leave attributes.
    * **Assign**: Assign this leave type to employees.
    * **Delete**: Remove the leave type permanently.

This feature-rich interface ensures that all leave types are managed effectively while offering customization and accessibility for employees and administrators alike.

---

## Granted Leave

### The Granted Leave Section

The Granted Leave section allows administrators to manage and monitor leave assignments for employees efficiently. This includes viewing existing leave allocations and assigning new leaves as needed.

### Features

#### Leave Overview

The section displays leave assignments categorized by leave type (e.g., Sick Leave, Casual Leave).

**Key information displayed includes:**
* Employee name and ID.
* Leave type.
* Available days.
* Carryforward days (if applicable).
* Total leave days.
* Used leave days.
* Assigned date.

#### Assigning Leaves

New leave allocations can be created via the **Assign Leaves** modal:

* **Leave Type**: Select from the available leave types.
* **Employees**: Choose employees to assign leave to from the dropdown or search filter.
* **Save**: Finalize the leave assignment.

#### Actions

* **Edit**: Modify an existing leave assignment.
* **Delete**: Remove a leave assignment from the system.

#### Filters and Grouping

* **Filter**: Narrow down results by specific fields such as leave type.
* **Group By**: Organize leave assignments by categories for better visualization.

---

## Leave Allocation Requests

### Leave Allocation Requests Section

The Leave Allocation Requests section allows employees and managers to request, track, and approve leave allocations. This feature ensures transparent management of leave entitlements by providing structured request workflows and documentation.

---

## 1. Main Page – Leave Allocation Requests

* Displays a list of all submitted allocation requests.
* When no requests are present, a placeholder message appears: **"There are no leave allocation requests at the moment."**
* Includes a **Create** button for submitting new leave allocation requests.

---

## 2. Creating a Leave Allocation Request

When clicking **Create**, a modal form opens with the following fields:

* **Leave Type (Mandatory)**
  * Dropdown to select the type of leave (e.g., Annual Leave, Sick Leave, Casual Leave).

* **Employee (Mandatory)**
  * The employee for whom the allocation request is being made.

* **Requested Days**
  * Field to specify the number of leave days being allocated.

* **Description (Mandatory)**
  * A text field for entering the justification or details of the leave allocation request.

* **Attachment (Optional)**
  * Allows uploading of supporting documents (e.g., HR approval letter, medical certificate).

* **Save Button**
  * Saves and submits the allocation request for review and approval.

---

## 3. Workflow & Actions

* **Submission**: Employee/manager submits a new allocation request.
* **Review**: HR/admin reviews the request along with provided details and attachments.
* **Approval/Rejection**: Allocation requests can be approved or rejected based on company policy.
* **Records**: Approved requests are logged into the system for tracking leave entitlements.

