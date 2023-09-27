CREATE TABLE PackageServiceManagement (
PackageServiceID INT NOT NULL IDENTITY(1,1),
PackageServiceName VARCHAR(50) NOT NULL,
PackageServiceDesc TEXT NOT NULL,
Time INT NOT NULL,
Price DECIMAL(10,2) NOT NULL,
RepetitionCycle VARCHAR(50),
ServiceID INT NOT NULL,
PRIMARY KEY (PackageServiceID),
FOREIGN KEY (ServiceID) REFERENCES ServiceManagement(ServiceID)
);

INSERT INTO PackageServiceManagement (PackageServiceName, PackageServiceDesc, Time, Price, RepetitionCycle, ServiceID)
VALUES
    ('Regular Cleaning', 'Basic apartment cleaning including vacuuming, mopping, bathroom, etc', 180, 350000, 'Weekly', 1),
    ('Deep Cleaning', 'Thorough cleaning of the entire apartment', 240, 500000, 'Monthly', 1),
    ('Laundry', 'Wash, dry and fold clothes and linens', 120, 150000, 'Daily', 3),
    ('Linen Replacement', 'Replace bedsheets, towels and cleaning', 60, 150000, 'Weekly', 3),
    ('Daily Meal Booking', 'Book and order daily meals', 60, 100000, 'Daily', 2),
    ('Weekly Meal Booking', 'Book and order weekly meal plans', 180, 300000, 'Weekly', 2),
    ('Monthly Meal Booking', 'Book and order monthly meal plans', 480, 900000, 'Monthly', 2),
    ('Electrical Repair', 'Diagnose and repair electrical issues', 60, 200000, 'One-time', 5),
    ('Plumbing Repair', 'Diagnose and repair plumbing issues', 60, 200000, 'One-time', 5),
    ('Maintenance', 'Replace light bulbs, gas, filters, cleaning', 120, 300000, 'Monthly', 5);