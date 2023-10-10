CREATE TABLE PackageServiceManagement (
PackageServiceID INT NOT NULL IDENTITY(1,1),
PackageServiceName VARCHAR(50) NOT NULL,
PackageServiceDesc TEXT NOT NULL,
Time VARCHAR(10) NOT NULL,
Price VARCHAR(20) NOT NULL,
RepetitionCycle VARCHAR(50) NOT NULL,
Status VARCHAR(20) DEFAULT 'Active' NULL,
Image VARCHAR(255) NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w'
PRIMARY KEY (PackageServiceID),
);

INSERT INTO PackageServiceManagement (PackageServiceName, PackageServiceDesc, Time, Price, RepetitionCycle)
VALUES
    ('Regular Cleaning', 'Basic apartment cleaning including vacuuming, mopping, bathroom, etc', 180, 350000, 'Weekly'),
    ('Deep Cleaning', 'Thorough cleaning of the entire apartment', 240, 500000, 'Monthly'),
    ('Laundry', 'Wash, dry and fold clothes and linens', 120, 150000, 'Daily'),
    ('Linen Replacement', 'Replace bedsheets, towels and cleaning', 60, 150000, 'Weekly'),
    ('Daily Meal Booking', 'Book and order daily meals', 60, 100000, 'Daily'),
    ('Weekly Meal Booking', 'Book and order weekly meal plans', 180, 300000, 'Weekly'),
    ('Monthly Meal Booking', 'Book and order monthly meal plans', 480, 900000, 'Monthly'),
    ('Electrical Repair', 'Diagnose and repair electrical issues', 60, 200000, 'One-time'),
    ('Plumbing Repair', 'Diagnose and repair plumbing issues', 60, 200000, 'One-time'),
    ('Maintenance', 'Replace light bulbs, gas, filters, cleaning', 120, 300000, 'Monthly');