CREATE TABLE UserTable (
  UserID INT NOT NULL IDENTITY(1,1),
  dateCreated DATE DEFAULT GETDATE(),
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  phone VARCHAR(20),
  Avatar VARCHAR(MAX) NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w',
  dob DATE DEFAULT NULL,
  sex BIT,
  Status VARCHAR(20) DEFAULT 'Active' NULL,
  Role VARCHAR(20) DEFAULT 'Customer', -- Staff or Admin ,
  PRIMARY KEY (UserID)
);

INSERT INTO UserTable (email, password, firstName, lastName, phone, dob, sex)
VALUES
('admin1@gmail.com', '123456', 'a', 'min1', '0123456789', '2003-01-01', 1),
('staff1@gmail.com', '123456', 's', 'taff1', '0123456789', '2003-01-01', 1),
('user1@gmail.com', '123456', 'u', 'ser1', '0123456789', '2003-01-01', 1),
('vhtoan27@gmail.com', '123456', 'Van', 'Huu Toan', '0792766979', '2003-01-01', 1),
('phta020503@gmail', '123456', 'Pham', 'Hoang Thuy An', '0898132737', '2003-01-01', 1),
('nlocnguyen9@gmail.com', '123456', 'Nguyen', 'Tan Loc', '0965706048', '2003-01-01', 1),
('saophadao1472@gmail.com', '123456', 'Pham', 'Hoai Duy', '0967588443', '2003-01-01', 1);