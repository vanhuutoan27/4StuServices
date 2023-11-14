CREATE TABLE OrderTable (
    OrderID INT IDENTITY(1,1) NOT NULL,
    dateCreated DATE DEFAULT GETDATE(),
    dateCompleted DATE DEFAULT NULL,
    CustomerID INT NOT NULL,
    Price VARCHAR(20) NOT NULL,
    paymentMethod VARCHAR(50) NOT NULL,
	NOTE VARCHAR(100),
    Status VARCHAR(20) DEFAULT 'Pending', -- Processing or Completed 
	PRIMARY KEY(OrderID),
	FOREIGN KEY(CustomerID) REFERENCES UserTable(UserID)
)
