USE [4StuDB];

CREATE TABLE CustomerManagement (
	CustomerID INT NOT NULL IDENTITY(1,1),
  email VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  phone VARCHAR(20),
  avatar VARCHAR(50),
  dob DATE,
  sex BIT,
  PRIMARY KEY (CustomerID)
);

INSERT INTO CustomerManagement (email, username, password, firstName, lastName, phone, avatar, dob, sex)
VALUES
('nguyenvana@gmail.com', 'nguyenvana', '123456', 'Nguyen', 'Van A', '0123456789', 'avatar1.png', '2000-03-15', 0),
('tranthib@gmail.com', 'tranthib', '123456', 'Tran', 'Thi B', '0123456789', 'avatar2.png', '2001-05-20', 1),
('leducthanhc@gmail.com', 'leducthanhc', '123456', 'Le', 'Duc Thanh C', '0123456789', 'avatar3.png', '2002-07-30', 0),
('phamvand@gmail.com', 'phamvand', '123456', 'Pham', 'Van D', '0123456789', 'avatar4.png', '2003-09-10', 1),
('hoangthie@gmail.com', 'hoangthie', '123456', 'Hoang', 'Thi E', '0123456789', 'avatar5.png', '2004-11-25', 1),
('nguyenxuanf@gmail.com', 'nguyenxuanf', '123456', 'Nguyen', 'Xuan F', '0123456789', 'avatar6.png', '2005-02-14', 0),
('doanthig@gmail.com', 'doanthig', '123456', 'Doan', 'Thi G', '0123456789', 'avatar7.png', '2006-04-05', 1),
('truongminhh@gmail.com', 'truongminhh', '123456', 'Truong', 'Minh H', '0123456789', 'avatar8.png', '2000-06-15', 0),
('phanthii@gmail.com', 'phanthii', '123456', 'Phan', 'Thi I', '0123456789', 'avatar9.png', '2001-01-20', 1),
('hoangvank@gmail.com', 'hoangvank', '123456', 'Hoang', 'Van K', '0123456789', 'avatar10.png', '2002-08-30', 0),
('nguyenthij@gmail.com', 'nguyenthij', '123456', 'Nguyen', 'Thi J', '0123456789', 'avatar11.png', '2003-11-10', 1),
('tranthil@gmail.com', 'tranthil', '123456', 'Tran', 'Thi L', '0123456789', 'avatar12.png', '2004-03-25', 1),
('lehoangm@gmail.com', 'lehoangm', '123456', 'Le', 'Hoang M', '0123456789', 'avatar13.png', '2005-07-14', 0),
('phanhieun@gmail.com', 'phanhieun', '123456', 'Phan', 'Hieu N', '0123456789', 'avatar14.png', '2006-10-05', 1),
('nguyenminho@gmail.com', 'nguyenminhp', '123456', 'Nguyen', 'Minh O', '0123456789', 'avatar15.png', '2000-01-15', 0),
('hoangthanhp@gmail.com', 'hoangthanhp', '123456', 'Hoang', 'Thanh P', '0123456789', 'avatar16.png', '2001-04-20', 1),
('doanvanq@gmail.com', 'doanvanq', '123456', 'Doan', 'Van Q', '0123456789', 'avatar17.png', '2002-07-30', 0),
('lethir@gmail.com', 'lethir', '123456', 'Le', 'Thi R', '0123456789', 'avatar18.png', '2003-02-10', 1),
('tranthanhs@gmail.com', 'tranthanhs', '123456', 'Tran', 'Thanh S', '0123456789', 'avatar19.png', '2004-09-25', 0),
('nguyenvant@gmail.com', 'nguyenvant', '123456', 'Nguyen', 'Van T', '0123456789', 'avatar20.png', '2005-06-14', 1),
('user1@gmail.com', 'user1', '123456', 'u', 'ser1', '0123456789', 'avatar21.png', '2003-01-01', 1);