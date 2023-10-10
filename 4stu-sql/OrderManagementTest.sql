CREATE TABLE OrderManagementTest (
    OrderId INT IDENTITY(1,1) NOT NULL,
    dateCreated DATE DEFAULT GETDATE(),
    dateCompleted DATE,
    CustomerId INT NOT NULL,
	CustomerName VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Address TEXT NOT NULL,
    paymentMethod VARCHAR(50) NOT NULL,
    Status VARCHAR(20) DEFAULT 'Pending' NULL, -- Processing or Completed 
    StaffId INT NOT NULL,
	PRIMARY KEY(OrderId)
);