CREATE TABLE ServiceManagement (
  ServiceID INT NOT NULL IDENTITY(1,1),
  ServiceName VARCHAR(50) NOT NULL,
  ServiceDesc TEXT NOT NULL,
  Time VARCHAR(10) NOT NULL,
  Price VARCHAR(20) NOT NULL,
  Tag VARCHAR(50) NOT NULL,
  Status VARCHAR(20) DEFAULT 'Active' NULL,
  Image VARCHAR(MAX) NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w',
  LongImage VARCHAR(MAX) NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w',
  Rating DECIMAL(2,1),
  PRIMARY KEY (ServiceID)
);

INSERT INTO ServiceManagement (ServiceName, ServiceDesc, Time, Price, Tag, Rating)
VALUES
('Apartment Cleaning', 'Clean the entire apartment, including mopping, vacuuming, laundry, etc.', 120, 200000, 'Cleaning and tidying up', 0.0),
('Booking Meals', 'Book meals according to customer requirements', 30, 50000, 'Shopping and ordering', 0.0),
('Laundry', 'Laundry clothes, bed sheets, pillows, and mattresses', 120, 100000, 'Laundry and clothing replacement', 0.0),
('Shopping For Customers', 'Shopping according to customer requirements', 30, 50000, 'Shopping and ordering', 0.0),
('Electrical And Plumbing repair', 'Repair electrical and plumbing equipment in the apartment', 30, 100000, 'Repair and maintenance', 0.0),
('Light Bulb Replacement', 'Replace light bulbs in the apartment', 15, 50000, 'Repair and maintenance', 0.0),
('Sheet Replacement', 'Replace sheets in the apartment', 15, 50000, 'Laundry and clothing replacement', 0.0),
('Towel Replacement', 'Replace towels in the apartment', 15, 50000, 'Laundry and clothing replacement', 0.0),
('Gas Refill', 'Refuel the gas for the gas stove', 15, 50000, 'Repair and maintenance', 0.0),
('Water Filter replacement', 'Replace the water filter', 15, 50000, 'Repair and maintenance', 0.0),
('Washing Machine Cleaning', 'Clean the washing machine', 30, 50000, 'Cleaning and tidying up', 0.0),
('Refrigerator Cleaning', 'Clean the refrigerator', 30, 50000, 'Cleaning and tidying up', 0.0),
('Air Conditioner Cleaning', 'Clean the air conditioner', 30, 50000, 'Cleaning and tidying up', 0.0),
('Gas Stove Cleaning', 'Clean the gas stove', 30, 50000, 'Cleaning and tidying up', 0.0),
('Bathroom Cleaning', 'Clean the bathroom', 30, 50000, 'Cleaning and tidying up', 0.0),
('Window Cleaning', 'Clean the windows', 30, 50000, 'Cleaning and tidying up', 0.0),
('Floor Cleaning', 'Clean the floor', 30, 50000, 'Cleaning and tidying up', 0.0);