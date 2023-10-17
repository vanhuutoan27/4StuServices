CREATE TABLE StaffOrderManagement (
  TaskID INT IDENTITY(1,1) NOT NULL,
  TaskTitle VARCHAR(50),
  OrderID INT,
  StaffID INT,
  DateShipping DATETIME DEFAULT GETDATE()
  PRIMARY KEY (TaskID),
);