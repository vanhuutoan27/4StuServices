CREATE TABLE OrderManagement (
    OrderId INT IDENTITY(1,1) NOT NULL,
    dateCreated DATE DEFAULT GETDATE(),
    dateCompleted DATE DEFAULT NULL,
    CustomerId INT NOT NULL,
	CustomerName VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Address TEXT NOT NULL,
    Price VARCHAR(20) NOT NULL,
    paymentMethod VARCHAR(50) NOT NULL,
    ServiceId INT NOT NULL,
	ServiceName VARCHAR(50) NOT NULL,
	NOTE VARCHAR(50),
    Status VARCHAR(20) DEFAULT 'Pending', -- Processing or Completed 
	PRIMARY KEY(OrderId),
);