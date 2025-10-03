# Assets

## Assets Overview

### The Assets Dashboard

The Assets Dashboard provides a centralized view of asset management, offering quick insights into the status, allocation, and requests related to organizational assets.

---

## 1. Top Summary Cards

26. **Total Assets**: Displays the overall count of assets registered in the system.
27. **Asset Requests**: Shows the number of pending asset requests awaiting approval.
28. **Assets in Use**: Indicates the current count of assets allocated to employees.

---

## 2. Asset Status Chart

**Pie Chart Visualization**: Provides a clear distribution of assets by status:
* In Use
* Available
* Not Available

This allows for a quick snapshot of resource availability.

---

## 3. Asset Requests to Approve

**Requests Table**: Lists all pending asset requests with details such as:
* Requesting User
* Asset Category
* Request Date
* Status (Pending, Approved, Rejected)

**Actions**: Approve or reject requests directly from the table for efficient workflow management.

---

## 4. Assets in Use Chart

**Bar Chart Visualization**: Displays usage counts of assets categorized by type, such as:
* Laptops
* Phones
* Headphones
* Other registered categories

This provides visibility into high-demand asset types.

---

## 5. Allocated Assets

**Allocated Assets Table**: Shows details of currently assigned assets including:
* Employee/User Name
* Asset Assigned
* Assigned Date

Helps track accountability and monitor asset distribution across the organization.

---

## Asset Registry

### The Asset Registry Section

The Asset Registry section is designed to manage and track organizational assets efficiently. It categorizes assets, maintains detailed records, and allows administrators to manage the lifecycle of each asset.

---

## 1. Asset Registry Dashboard

* Displays a categorized view of assets by type (e.g., Laptops, Phones, Cameras).
* **Columns include:**
  * **Asset Name**: Title or label of the asset.
  * **Status**: Indicates whether the asset is In Use, Available, or Not Available.
  * **Tracking ID**: A unique identifier assigned to the asset.
  * **Batch Number**: Identifies the batch or procurement group the asset belongs to.

**Additional Features:**
* **Search & Filter**: Locate specific assets by name, ID, or category.
* **Expandable Categories**: Click on a category to reveal all associated assets.

---

## 2. Actions for Assets

Each asset record allows the following actions:

* **Edit**: Modify asset details such as status, tracking ID, or batch number.
* **Delete**: Remove the asset from the system permanently.
* **Duplicate**: Create a copy of the asset for quick batch entry.

---

## 3. Creating Asset Categories

Administrators can create new asset categories to organize and classify resources.

**Fields include:**
* **Name (Required)**: The category name (e.g., "Laptops").
* **Description**: A short description of the category.
* **Company**: Assign the category to a specific company.
* **Save**: Records the new category in the system.

---

## 4. Benefits & Use Cases

* **Centralized Tracking**: Maintain a single source of truth for all organizational assets.
* **Accountability**: Track which employees are currently using assigned assets.
* **Batch Management**: Organize assets purchased or assigned in groups for easier handling.
* **Lifecycle Management**: Update status as assets move from Available → In Use → Retired.

---

## Asset Batches

### The Asset Batches Section

The Asset Batches section allows administrators to group and organize assets into specific batches for easier management, tracking, and reporting.

---

## 1. Batch List

Displays all existing asset batches in a tabular format with the following details:

* **Batch Number**: Unique identifier for each batch (e.g., LPB001).
* **Description**: Short details about the batch purpose or type.
* **Assets**: Count of assets under the batch with an option to view asset details.

---

## 2. Actions

* **Edit**: Update batch details.
* **Delete**: Permanently remove a batch from the system.
* **View Assets**: Navigate to see all assets associated with a batch.

---

## 3. Creating a Batch

23. To create a new batch, click the **+ Create** button.
24. Fill out the required fields:
    * **Batch Number**: Enter a unique code for the batch (e.g., LPB001 for laptops).
    * **Description**: Add a short explanation for easy identification.
25. Click **Save** to register the batch and add it to the list.

---

## 4. Usage

The Asset Batches feature helps in:

* Organizing assets into logical groups.
* Simplifying search, allocation, and reporting.
* Enhancing visibility and control over asset categories.

---

## Request and Allocation

### The Asset Request and Allocation Section

The Asset Request and Allocation section manages the process of employees requesting, allocating, and returning assets. It also allows for fines or reports to be added in case of asset issues.

---

## 1. Features

### Asset Request List

23. Displays all submitted asset requests in a tabular format.
24. **Key Columns:**
    * **Requesting User**: Name and ID of the employee making the request.
    * **Asset Category**: Type of asset requested (e.g., Camera, Laptop).
    * **Request Date**: Date when the request was submitted.
    * **Status**: Indicates whether the request is Requested, Approved, or Rejected.
    * **Confirmation**: Approve or reject requests using quick action buttons.

### Actions Menu

29. **Approve/Reject**: Use the green (✔) or red (✘) buttons to take action on requests.
30. **Details**: View the request details, including category, description, and user.
31. **Delete**: Remove an asset request from the system.

---

## 2. Asset Request Creation

**Button**: +

**Fields Required:**
* **Requesting User**: Select the employee making the request.
* **Asset Category**: Choose the type of asset (e.g., Phones, Laptops).
* **Description**: Provide additional notes about the request.

**Steps to Create:**
1. Click the **+** button in the Asset Request tab.
2. Fill in the required fields.
3. Click **Save** to submit the request.

---

## 3. Asset Allocation

**Overview**: Allocate requested assets to employees and track their usage.

**Allocated Assets View:**

Displays the list of currently allocated assets with details such as:
* **Allocated User**: Employee using the asset.
* **Asset**: The specific asset assigned.
* **Allocation Status**: Status of the allocation (e.g., Returned, In Use).

### Actions Menu

* **Return**: Process asset returns.
* **Edit**: Modify the allocation details.
* **Delete**: Remove an allocation.

### How to Allocate Assets:

1. Navigate to the **Asset Allocation** tab and click the **+** button.
2. Fill in the fields:
   * **Assigned To**: Select the employee receiving the asset.
   * **Asset**: Choose the specific asset.
   * **Assigned By**: Select the manager assigning the asset.
   * **Condition Images (Optional)**: Upload initial condition images of the asset.
3. Click **Save** to finalize the allocation.

---

## 4. Asset Return Process

21. **Overview**: Ensures proper tracking and verification of returned assets.
22. **Steps to Return an Asset:**
    * Locate the allocated asset in the Asset Allocation list and click **Return**.
    * Fill in the **Asset Return Form**:
      * **Return Status**: Select the condition of the asset (e.g., Good, Minor Damage).
      * **Return Date**: Set the date of return.
      * **Return Condition**: Provide a description of the asset's condition.
      * **Upload Images**: Attach images showing the asset's condition upon return.
    * **Optional:**
      * **Add a Fine**: If the asset is damaged, impose a fine using the **Add Fine** button.
      * **Add a Report**: Document issues or incidents using the **Add Report** button.
    * Click **Save** to complete the return process.

---

## 5. Fines and Reports

### Add a Fine

**Purpose**: Impose monetary penalties for lost or damaged assets.

**Steps:**
1. Click **Add Fine** from the Asset Return Form.
2. Fill in the fields:
   * **Title**: Provide a name for the fine.
   * **Fine Amount**: Specify the penalty amount.
   * **Fine Date**: Set the date the fine is issued.
   * **Installments (Optional):**
     * Define total installments and installment amounts.
     * Set the start date for installments.
3. Click **Save** to apply the fine.

### Add a Report

**Purpose**: Document asset-related issues or incidents.

**Steps:**
1. Click **Add Report** from the Asset Return Form.
2. Fill in the fields:
   * **Title**: Provide a title for the report.
   * **Attach File**: Upload supporting files or evidence.
3. Click **Save** to finalize the report.

This section streamlines asset management tasks, ensuring a structured and efficient workflow for handling asset requests, allocations, and returns.

---

## Asset History

### The Asset History Section

The Asset History section provides a comprehensive record of asset assignments and returns, offering visibility into how assets have been utilized and their condition upon return.

---

## 1. Features

### Asset History List

Displays a table summarizing the historical usage of assets.

**Key Columns:**
* **Asset**: Name and unique identifier (e.g., Bose QuietComfort-HPT0024).
* **Employee**: Name and badge ID of the employee to whom the asset was allocated.
* **Assigned Date**: Date when the asset was allocated to the employee.
* **Returned Date**: Date when the asset was returned (if applicable).
* **Return Status**: Describes the condition of the asset upon return (e.g., "Healthy" or "Minor Damage").

---

## 2. Asset Details

Clicking on an asset entry opens a detailed view showing:

**Asset Information:**
* Asset name, type, and unique identifier.

**Allocated User:**
* Name and badge ID of the employee who used the asset.

**Allocation Details:**
* Dates of allocation and return.

**Return Status:**
* Indicates the condition of the asset upon return.

**Return Description:**
* Additional notes describing the condition upon return (e.g., "Good condition").

**Condition Images:**
* **Assign Condition Images**: Images or documents captured when the asset was allocated.
* **Return Condition Images**: Images or documents captured when the asset was returned.

---

## 3. Usage Scenarios

### Review Asset Allocation History
* Identify which assets have been assigned to employees and when they were returned.

### Analyze Asset Conditions
* Assess return statuses to detect patterns, such as recurring damages or maintenance needs.

---

This section serves as a valuable tool for tracking the lifecycle of company assets, ensuring accountability and providing insights into their usage and condition.

