CREATE TABLE CustomerManagement (
  CustomerID INT NOT NULL IDENTITY(1,1),
  dateCreated DATE DEFAULT GETDATE(),
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  phone VARCHAR(20),
  Avatar VARCHAR(MAX) NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w',
  dob DATE DEFAULT NULL,
  sex BIT,
  totalOrders INT DEFAULT 0 NULL,
  Status VARCHAR(20) DEFAULT 'Active' NULL,
  PRIMARY KEY (CustomerID)
);

INSERT INTO CustomerManagement (email, password, firstName, lastName, phone, dob, sex)
VALUES
('nguyenvana@gmail.com', '123456', 'Nguyen', 'Van A', '0123456789', '2000-03-15', 0),
('tranthib@gmail.com', '123456', 'Tran', 'Thi B', '0123456789', '2001-05-20', 1),
('leducthanhc@gmail.com', '123456', 'Le', 'Duc Thanh C', '0123456789', '2002-07-30', 0),
('phamvand@gmail.com', '123456', 'Pham', 'Van D', '0123456789', '2003-09-10', 1),
('hoangthie@gmail.com', '123456', 'Hoang', 'Thi E', '0123456789', '2004-11-25', 1),
('nguyenxuanf@gmail.com', '123456', 'Nguyen', 'Xuan F', '0123456789', '2005-02-14', 0),
('doanthig@gmail.com', '123456', 'Doan', 'Thi G', '0123456789', '2006-04-05', 1),
('truongminhh@gmail.com', '123456', 'Truong', 'Minh H', '0123456789', '2000-06-15', 0),
('phanthii@gmail.com', '123456', 'Phan', 'Thi I', '0123456789', '2001-01-20', 1),
('hoangvank@gmail.com', '123456', 'Hoang', 'Van K', '0123456789', '2002-08-30', 0),
('nguyenthij@gmail.com', '123456', 'Nguyen', 'Thi J', '0123456789', '2003-11-10', 1),
('tranthil@gmail.com', '123456', 'Tran', 'Thi L', '0123456789', '2004-03-25', 1),
('lehoangm@gmail.com', '123456', 'Le', 'Hoang M', '0123456789', '2005-07-14', 0),
('phanhieun@gmail.com', '123456', 'Phan', 'Hieu N', '0123456789', '2006-10-05', 1),
('nguyenminho@gmail.com', '123456', 'Nguyen', 'Minh O', '0123456789', '2000-01-15', 0),
('hoangthanhp@gmail.com', '123456', 'Hoang', 'Thanh P', '0123456789', '2001-04-20', 1),
('doanvanq@gmail.com', '123456', 'Doan', 'Van Q', '0123456789', '2002-07-30', 0),
('lethir@gmail.com', '123456', 'Le', 'Thi R', '0123456789', '2003-02-10', 1),
('tranthanhs@gmail.com', '123456', 'Tran', 'Thanh S', '0123456789', '2004-09-25', 0),
('nguyenvant@gmail.com', '123456', 'Nguyen', 'Van T', '0123456789', '2005-06-14', 1),
('user1@gmail.com', '123456', 'u', 'ser1', '0123456789', '2003-01-01', 1),
('admin1@gmail.com', '123456', 'a', 'min1', '0123456789', '2003-01-01', 1),
('staff1@gmail.com', '123456', 's', 'taff1', '0123456789', '2003-01-01', 1);