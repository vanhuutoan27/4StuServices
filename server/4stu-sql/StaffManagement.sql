CREATE TABLE StaffManagement (
  StaffID INT NOT NULL IDENTITY(1,1),
  dateCreated DATE DEFAULT GETDATE(),
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  phone VARCHAR(20),
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  Avatar VARCHAR(MAX) DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w',
  dob DATE DEFAULT NULL,
  sex BIT,
  ratingCount INT DEFAULT 0,
  averageRating FLOAT DEFAULT 0,
  Status VARCHAR(20) DEFAULT 'Active',
  PRIMARY KEY (StaffID)
);

INSERT INTO StaffManagement (email, password, firstName, lastName, phone, sex)
VALUES
('vanhuutoan@gmail.com', '123456', 'Van', 'Huu Toan', '0792766979', 1),
('phamhoaiduy@gmail.com', '123456', 'Pham', 'Hoai Duy', '0123456789', 1),
('nguyentanloc@gmail.com', '123456', 'Nguyen', 'Tan Loc', '0123456789', 1),
('phamhoangthuyan@gmail.com', '123456', 'Pham', 'Hoang Thuy An', '0123456789', 1);