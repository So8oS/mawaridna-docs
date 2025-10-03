# Attendance

## Attendance Overview

### Attendance Dashboard

The Attendance Overview section provides a comprehensive and real-time view of employee attendance. It helps managers, HR personnel, and admins monitor attendance trends, employee availability, and tasks requiring immediate action.

---

## 1. Dashboard Features

### 1.1 Overview Metrics

- **Today's Attendances**: Displays the percentage of employees present for the current day.
- **On Time**: Number of employees who reported on time.
- **Late Come**: Number of employees who arrived late.

### 1.2 Analytics

- **Attendance Analytic**: Date-based analysis of attendance records with filters (Day, Week, Month).
- **Hours Chart**: Visual comparison of Pending Hours vs Worked Hours across departments.

### 1.3 Employee Highlights

- **Offline Employees:**
  - Lists employees marked as absent for the day.
  - Displays employee ID and status (e.g., Expected Working).
- **On Break:**
  - Shows employees currently on break.
  - If no employees are on break, the section displays: "No employees are currently taking a break."

### 1.4 Key Action Items

10. **Overtime to Approve:**

    - Lists employees with overtime hours pending approval.
    - Includes:
      - Employee ID & Name
      - Check-In / Check-Out
      - Overtime Hours
      - Approval/Reject action buttons

11. **Attendance to Validate:**

    - Displays attendance records awaiting validation.
    - Includes:
      - Employee ID
      - Date
      - Check-In / Check-Out
      - Validation action button (Validate)

12. **Department Overtime Chart:**
    - Provides overtime data by department.
    - If no validated records exist, displays: "No validated Overtimes were found."

---

## 2. Usability Enhancements

15. **Search & Filters**: Quickly locate employee attendance by date, name, or status.
16. **Real-Time Updates**: Validations and approvals update instantly across the dashboard.

---

## Biometric Devices

### Biometric Devices Section

The Biometric Devices section (Attendance → Biometric Devices) is designed to manage and configure biometric devices used for tracking attendance. It provides administrators with the ability to add, test, and manage device integrations seamlessly.

---

## Key Features

6. **Device List and Status**

   - Displays all biometric devices as cards with:
     - Device Name
     - Device Type (e.g., ZKTeco Biometric)
     - IP Address
     - Live Capture toggle (Activate/Deactivate)
     - Action buttons: Test, Schedule, Employee
   - Devices are categorized by connectivity status:
     - Live Capture (orange)
     - Scheduled (blue)
     - Not Connected (red)

7. **Add New Device**

   - Administrators can add new devices by clicking the + Add button.
   - Required fields include:
     - **Name**: Assigned name of the device
     - **Device Type**: Supported types (e.g., ZKTeco, Anviz, Matrix COSEC)
     - Request ID
     - API URL
     - API Key & Secret (authentication)

8. **Device Configuration**

   - Configure integration settings including secure API connection.
   - Enable or disable live capture mode as needed.

9. **Fetch Devices**

   - Use the Fetch Devices button to refresh and update the device list.

10. **Filtering Options**
    - Search and filter devices by type, status, or name.

---

## Workflow

### Adding a Device

1. Go to Attendance → Biometric Devices → + Add.
2. Complete required fields and save the configuration.

### Device Management

- Monitor device status directly from the dashboard.
- Use quick actions (Test, Schedule, Employee) for each device.
- Troubleshoot devices marked as Not Connected.

---

## Benefits

- Centralized device management.
- Secure integration with API credentials.
- Accurate attendance tracking by ensuring devices remain active.
- Flexible scheduling and live capture options for real-time monitoring.

---

## Records

### The Records Section

The Records section within the Attendance module provides a detailed overview and management tools for employee attendance records. It allows administrators and managers to view, edit, and add attendance entries.

---

## Features

### Attendance Records Overview

Displays detailed information for each employee, including:

- Employee name & ID
- Batch
- Date & Day
- Check-In & In Date
- Check-Out & Out Date
- Shift details
- Supports pagination for navigating large sets of records.

### Attendance Validation Status

While validation occurs in the Attendance Overview dashboard, this Records section reflects finalized attendance data.

### Adding Attendance

Click **+ Create** to manually add attendance:

- Select employee name/ID
- Enter attendance date and shift type
- Provide check-in and check-out times
- Choose work type (e.g., Hybrid, Remote, Office)
- Optionally link to a batch

### Batch Attendance Management

Assign or update attendance for multiple employees efficiently using batch grouping.

### Filters and Grouping

Search bar and Filter/Group By options allow targeted record views (by employee, date, shift, etc.).

### Work Type Flexibility

Supports diverse environments such as Work From Office (WFO), Work From Home (WFH), or Hybrid.

---

## Functionalities

- **Edit Records**: Modify incorrect attendance entries using the Edit option.
- **Delete Records**: Remove invalid or duplicate records using the Delete option.
- **Bulk Actions**: Perform grouped operations from the Actions dropdown.
- **Overtime Tracking**: Attendance records reflect overtime when applicable, ensuring fair compensation.

---

## Requests

### The Attendance Requests Section

The Attendance Requests section allows employees to submit requests for attendance adjustments and enables administrators to review, validate, or reject those requests. It centralizes requested attendances for efficient handling and ensures accuracy in attendance records.

---

## Features in Attendance Requests

8. **Requested Attendances Table**

   - Displays attendance requests with details such as:
     - Employee Name & ID
     - Batch (if applicable)
     - Date & Day
     - Check-In / Check-Out Times
     - Shift (e.g., Regular, Night, Morning)
     - Work Type (e.g., WFO, WFH, Hybrid, Remote)
     - Minimum Hours Required
     - Worked Hours / Overtime
     - Comments (if provided)
   - Each row includes Actions for managing requests (edit/delete/validate).

9. **Validation Indicators**

   - Requests are grouped by validation status:
     - Validated (green)
     - Not-Validated (gray)
     - Bulk-Requests (blue, for multi-employee submissions).

10. **Bulk Actions**

    - The Select All Records button allows administrators to select multiple requests at once for approval, rejection, or other batch operations.

11. **Filters and Grouping**

    - Use Search, Filter, and Group By options to quickly locate specific requests by employee, date, or validation status.

12. **Create Attendance Request**
    - Click **+ Create** to open the request form. Fields typically include:
      - Employee (single or multiple selection if bulk mode is enabled)
      - Attendance Date
      - Shift (Regular, Night, etc.)
      - Work Type (WFO, WFH, Hybrid, Remote)
      - Check-In / Check-Out Times
      - Worked Hours (auto-calculated)
      - Minimum Hour (requirement for approval)
      - Batch Attendance (optional)
      - Description (reason or justification)
      - Create Bulk toggle allows submitting requests for multiple employees simultaneously.

---

## Validation Process

- Pending requests are shown as Not-Validated.
- Administrators validate or reject requests to ensure compliance with company attendance rules.
- Once validated, attendance becomes part of official records and may update hours, overtime, or payroll automatically.

---

## Hour Summary

### The Hour Summary Section

The Hour Summary section in the attendance module is designed to provide an overview of the hours worked by employees, including pending hours and overtime calculations. Here's how it works:

### Key Features:

**Overview Table:**

- The main table displays employee-specific data for a selected month and year.
- Columns include:
  - Employee Name
  - Month and Year
  - Total Worked Hours
  - Pending Hours
  - Overtime Hours
  - Actions for editing or deleting the record.

**Filters and Grouping:**

- Allows filtering by fields like month and year to refine the records displayed.
- Grouping options are available for organizing the data by specific fields.

**Add New Hour Account:**

- Users can manually add a record for an employee's worked hours, pending hours, and overtime.
- Fields to input include:
  - Employee Name
  - Month and Year
  - Worked Hours
  - Pending Hours
  - Overtime Hours
- The form ensures required fields are completed before submission.

**Action Buttons:**

- **Edit**: Allows users to modify the existing hour account details.
- **Delete**: Removes an hour account record if needed.

### Use Cases:

- This section is particularly useful for HR teams or managers who need to track and manage employee working hours, including overtime, across specific months.
- It also supports scenarios where manual adjustments to hour data are required for compliance or payroll calculations.

---

## Timesheet

### Timesheets (Work Records)

The Timesheets (Work Records) section provides a calendar-style grid displaying employee attendance across an entire month. It enables managers and HR teams to quickly review attendance status patterns (present, absent, leave, conflicts) and supports exporting for reporting purposes.

---

## Key Features

### Monthly Grid View

- Displays employees in rows and days of the selected month in columns.
- Each cell shows the employee's attendance status for that day.
- Supported attendance statuses:
  - P (Green) – Present
  - Half Day Present (Yellow)
  - On Leave, but Attendance Exists (Brown)
  - Absent (Gray)
  - Expected Working (Blue Dot)
  - Conflict (Red)

### Navigation & Date Selection

- Select the month from the calendar picker to view attendance records for that period.
- Date is displayed in the top-right for quick reference.

### Export Option

- Use the Export button to download attendance data for payroll, audits, or analysis.

### Filter Option

- Refine displayed records by employee, department, or attendance status.

### Bulk Visualization

- Provides a bird's-eye view of attendance for the entire workforce.
- Ideal for spotting patterns such as frequent absences, conflicts, or unvalidated records.

---

## Benefits

- Simplifies monthly attendance monitoring.
- Makes it easy to detect inconsistencies or conflicts.
- Supports compliance by providing an export-ready format.
- Ensures HR can manage and validate attendance at scale.

---

## Logs & Events

### Logs & Events Section

The Logs & Events section provides a detailed record of employee attendance activities, focusing on individual check-ins and check-outs for specified dates. It serves as a chronological log to help HR and managers monitor and verify attendance entries.

---

## Key Features

### Attendance Records Overview

Displays all recorded attendance entries for employees.

**Columns include:**

- Employee Name and ID
- Attendance Date
- Check-In Time
- Check-Out Time
- In Date and Out Date (useful for overnight shifts).

### Selection Tools

- **Select All Attendance**: Quickly mark all records for bulk actions.
- **Unselect All Attendance**: Clear all selections.
- **Selected Count Display**: Shows how many records have been selected.

### Export Attendance

- Allows exporting attendance logs for reporting or payroll analysis.
- Useful for compliance and workforce management.

### Action Options

- Delete individual attendance records via the trash icon.
- Ensures duplicate or incorrect entries can be easily corrected.

### Filtering and Grouping

- Apply filters to refine results (e.g., by employee, date range, or shift).
- Group records by attributes such as employee, date, or validation status for better visibility.

---

## Exceptions

### The Exceptions Section

The Exceptions section provides a detailed overview of employees' attendance irregularities such as arriving late or leaving early. It is a critical tool for tracking punctuality and ensuring compliance with attendance policies.

### Key Features:

**Attendance Records**: Displays detailed information for each irregularity, including:

- Employee name
- Type of irregularity (Late Come/Early Out)
- Attendance date
- Check-in and check-out times
- Duration of work and minimum required hours.

**Actions:**

- **Penalty**: Assign penalties for the specific irregularity.
- **Delete**: Remove incorrect or irrelevant attendance records.

**Details Modal**: Clicking on a record opens a detailed view showing:

- Full attendance information.
- Validation status.
- Any penalties applied.

**Batch Actions**: Ability to select multiple records for batch penalties or deletion.

This section helps maintain a fair and consistent attendance policy while holding employees accountable for deviations. It also integrates well with other attendance-related sections to provide a holistic view of employee behavior.

---

## My Logs (My Attendances)

### My Logs Section

The My Logs section provides employees with a personal view of their own attendance records. Unlike the admin-level "Attendances" or "Records" sections, this page is focused solely on an individual employee's attendance history, including check-ins, check-outs, and validation status.

---

## Features

7. **Personal Attendance Records**

   - Displays attendance entries only for the logged-in employee.
   - Columns include:
     - Employee (name/ID)
     - Date
     - Day
     - Check-In time
     - In Date
     - Check-Out time
     - Out Date
     - Shift
     - Work Type (e.g., WFO, WFH, Hybrid, Remote)
     - Min Hour (minimum required hours for the day)

8. **Validation Indicators**

   - Attendance records show status markers:
     - Green – Validated
     - Red – Not Validated
     - Orange – Requested
     - Blue – Approved Request

9. **Filtering Options**

   - Employees can apply filters to narrow results by date range, shift, or status.

10. **Pagination**
    - Supports pagination for browsing historical attendance across multiple pages.

---

## Functionalities

- **Self-Tracking**: Employees can review their attendance without needing admin access.
- **Transparency**: Validation status ensures employees know whether their attendance is confirmed.
- **Error Visibility**: If check-in/check-out times are missing or misaligned, employees can see discrepancies and raise requests.
