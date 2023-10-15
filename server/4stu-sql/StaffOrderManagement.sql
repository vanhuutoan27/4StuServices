CREATE TABLE StaffOrderManagement (
  OrderID INT NOT NULL,
  StaffID INT NOT NULL,
  DateShipping DATE DEFAULT GETDATE()
  PRIMARY KEY (OrderID, StaffID),
);