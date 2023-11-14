CREATE TABLE ServiceTable (
  ServiceID INT NOT NULL IDENTITY(1,1),
  ServiceName VARCHAR(50) NOT NULL,
  ServiceDesc TEXT NOT NULL,
  Time VARCHAR(10) NOT NULL,
  Price VARCHAR(20) NOT NULL,
  Tag VARCHAR(50) NOT NULL,
  Status VARCHAR(20) DEFAULT 'Active',
  Image VARCHAR(MAX) DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w',
  LongImage VARCHAR(MAX) DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w',
  OrderID INT NOT NULL,
  FeedbackID INT NOT NULL,
  PRIMARY KEY (ServiceID),
  FOREIGN KEY(OrderID) REFERENCES OrderTable(OrderID),
  FOREIGN KEY(FeedbackID) REFERENCES FeedbackTable(FeedbackID)
);

INSERT INTO ServiceTable (ServiceName, ServiceDesc, Time, Price, Tag)
VALUES
('Apartment Cleaning', 'Clean the entire apartment, including mopping, vacuuming, laundry, etc.', 120, 200000, 'Cleaning and tidying up'),
('Booking Meals', 'Book meals according to customer requirements', 30, 50000, 'Shopping and ordering'),
('Laundry', 'Laundry clothes, bed sheets, pillows, and mattresses', 120, 100000, 'Laundry and clothing replacement'),
('Shopping For Customers', 'Shopping according to customer requirements', 30, 50000, 'Shopping and ordering'),
('Electrical And Plumbing repair', 'Repair electrical and plumbing equipment in the apartment', 30, 100000, 'Repair and maintenance'),
('Light Bulb Replacement', 'Replace light bulbs in the apartment', 15, 50000, 'Repair and maintenance'),
('Sheet Replacement', 'Replace sheets in the apartment', 15, 50000, 'Laundry and clothing replacement'),
('Towel Replacement', 'Replace towels in the apartment', 15, 50000, 'Laundry and clothing replacement'),
('Gas Refill', 'Refuel the gas for the gas stove', 15, 50000, 'Repair and maintenance'),
('Water Filter replacement', 'Replace the water filter', 15, 50000, 'Repair and maintenance'),
('Washing Machine Cleaning', 'Clean the washing machine', 30, 50000, 'Cleaning and tidying up'),
('Refrigerator Cleaning', 'Clean the refrigerator', 30, 50000, 'Cleaning and tidying up'),
('Air Conditioner Cleaning', 'Clean the air conditioner', 30, 50000, 'Cleaning and tidying up'),
('Gas Stove Cleaning', 'Clean the gas stove', 30, 50000, 'Cleaning and tidying up'),
('Bathroom Cleaning', 'Clean the bathroom', 30, 50000, 'Cleaning and tidying up'),
('Window Cleaning', 'Clean the windows', 30, 50000, 'Cleaning and tidying up'),
('Floor Cleaning', 'Clean the floor', 30, 50000, 'Cleaning and tidying up');