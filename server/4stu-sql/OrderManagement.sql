﻿CREATE TABLE OrderManagement (
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
	NOTE VARCHAR(100),
    Status VARCHAR(20) DEFAULT 'Pending', -- Processing or Completed 
	PRIMARY KEY(OrderId),
);

INSERT INTO OrderManagement (dateCreated, CustomerId, CustomerName, Email, Phone, Address, Price, paymentMethod, ServiceId, ServiceName, NOTE, Status)
VALUES
    ('2023-05-11', 14, 'Dinh Tri Hung', 'dinhtrihung@gmail.com', '0339380738', '12 Nguyen Van A, Quan 1, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Please vacuum and mop the floors', 'Completed'),
    ('2023-08-06', 6, 'Bui Huy Hoang', 'buihuyhoang@gmail.com', '0878784494', '45 Tran Hung Dao, Quan Hoan Kiem, Ha Noi', '100000', 'momo', 5, 'Electrical And Plumbing', 'Buy electronics', 'Completed'),
    ('2023-01-03', 34, 'Thach Minh Quoc', 'thacminhquoc@gmail.com', '0851894702', '78 Le Loi, Quan Thanh Khe, Da Nang', '100000', 'momo', 3, 'Laundry', 'The dryer sheets are in the laundry room', 'Completed'),
    ('2023-09-28', 38, 'Do Hong Dang', 'dohongdang@gmail.com', '0850148960', '23 Duong Ly Thuong Kiet, Quan Binh Thanh, TP. Ho Chi Minh', '50000', 'not-yet', 2, 'Booking Meals', 'Lunch for 3 people, including meat, vegetables, rice, and drinks', 'Completed'),
    ('2023-10-22', 33, 'Do Dinh Don', 'dodinhdon@gmail.com', '0598116162', '56 Phan Dinh Phung, Quan Ba Dinh, Ha Noi', '50000', 'momo', 4, 'Shopping For Customers', 'Buy school supplies', 'Completed'),
	('2023-02-11', 18, 'Nguyen Luong Quyen', 'nguyenluongquyen@gmail.com', '0882112255', '99 Duong 30/4, Quan Ninh Kieu, Can Tho', '50000', 'not-yet', 2, 'Booking Meals', '', 'Completed'),
	('2023-05-11', 36, 'Van Tuan Khanh', 'vantuankhanh@gmail.com', '0328000308', '14 Dinh Cong Trang, Quan Son Tra, Da Nang', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the bathroom and kitchen', 'Completed'),
	('2023-09-19', 10, 'Trinh Viet Duong', 'trinhvietduong@gmail.com', '0925358212', '67 Le Duan, Quan Tan Binh, TP. Ho Chi Minh', '50000', 'momo', 9, 'Gas Refill', 'Please fill up my gas tank', 'Completed'),
	('2023-05-20', 3, 'Phan Thanh Thien', 'phanthanhthien@gmail.com', '0824057331', '31 Dien Bien Phu, Quan Ba Ria - Vung Tau', '200000', 'momo', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-01-12', 13, 'Hoang Dinh Trung', 'hoangdinhtrung@gmail.com', '0877131826', '88 Hung Vuong, Quan Hai Chau, Da Nang', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-02-11', 7, 'Ngo The Trung', 'ngothetrung@gmail.com', '0300421253', '34 Nguyen Van B, Quan Go Vap, TP. Ho Chi Minh', '100000', 'momo', 5, 'Electrical And Plumbing repair', '', 'Completed'),
	('2023-02-11', 9, 'Do Lien Huong', 'dolienhuong@gmail.com', '0787553019', '72 Tran Phu, Quan Hai Ba Trung, Ha Noi', '50000', 'not-yet', 4, 'Shopping For Customers', 'Buy daily necessities', 'Completed'),
	('2023-05-15', 4, 'Dam My Phung', 'dammyphung@gmail.com', '0336644248', '50 Ham Nghi, Quan Thanh Khe, Da Nang', '50000', 'momo', 11, 'Washing Machine Cleaning', '', 'Completed'),
	('2023-06-11', 32, 'Ngo Phuong Dung', 'ngophuongdung@gmail.com', '0833320984', '11 Nguyen Dinh Chinh, Quan Tan Phu, TP. Ho Chi Minh', '100000', 'not-yet', 5, 'Electrical And Plumbing repair', '', 'Completed'),
	('2023-05-12', 35, 'Ngo Xuan Nhi', 'ngoxuannhi@gmail.com', '0886618277', '64 Pham Ngu Lao, Quan Hoan Kiem, Ha Noi', '50000', 'momo', 9, 'Gas Refill', '', 'Completed'),
	('2023-07-01', 19, 'Truong Huong Tra', 'truonghuongtra@gmail.com', '0373014572', '27 Le Lai, Quan Bac Tu Liem, Ha Noi', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-04-24', 37, 'Pham Quynh Tho', 'phamquynhtho@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-07-22', 31, 'Le Tam Nhu', 'letamthu@gmail.com', '0920163082', '19 Hai Ba Trung, Quan Le Chan, Hai Phong', '100000', 'momo', 12, 'Refrigerator Cleaning', '', 'Completed'),
	('2023-06-11', 1, 'Ly Nhu Quynh', 'lenhuquynh@gmail.com', '0325654330', '48 Ly Thuong Kiet, Quan Thu Duc, TP. Ho Chi Minh', '50000', 'momo', 4, 'Shopping For Customers', 'Buy toys for children', 'Completed'),
	('2023-05-26', 8, 'Bui Huong Xuan', 'buihuongxuan@gmail.com', '0836701993', '70 Hoang Hoa Tham, Quan Hai An, Hai Phong', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-08-11', 16, 'Phung Thanh Huyen', 'phungthanhhuyen@gmail.com', '0868599374', '43 Truong Chinh, Quan Tay Ho, Ha Noi', '50000', 'not-yet', 11, 'Washing Machine Cleaning', '', 'Completed'),
	('2023-03-11', 2, 'Bui Quoc Huy', 'buiquochuy@gmail.com', '0904716364', '82 Nguyen Duc Canh, Quan Ha Dong, Ha Noi', '100000', 'momo', 3, 'Laundry', 'The detergent is under the sink', 'Completed'),
	('2023-03-22', 5, 'Kim Phuong Trieu', 'kimphuongtrieu@gmail.com', '0567538602', '62 Dong Da, Quan Dong Da, Ha Noi', '50000', 'momo', 4, 'Shopping For Customers', 'Buy daily necessities', 'Completed'),
	('2023-05-27', 29, 'Bui Minh Ky', 'buiminhky@gmail.com', '0580923115', '35 Le Quy Don, Quan Binh Thanh, TP. Ho Chi Minh', '50000', 'momo', 2, 'Booking Meals', 'Lunch for 3 people, including meat, vegetables, rice, and drinks', 'Completed'),
	('2023-07-24', 17, 'Phung Phu Hung', 'phungphuhung@gmail.com', '0816931480', '55 Ham Tu Quan, Quan Cau Giay, Ha Noi', '50000', 'momo', 9, 'Gas Refill', '', 'Completed'),
	('2023-04-14', 30, 'Trieu Dinh Don', 'trieudinhdon@gmail.com', '0312488737', '26 Hung Vuong, Quan Le Chan, Hai Phong', '200000', 'not-yet', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-05-20', 12, 'Mai Quoc Binh', 'maiquocbinh@gmail.com', '0816221427', '91 Le Loi, Quan Hai Chau, Da Nang', '50000', 'momo', 15, 'Bathroom Cleaning', '', 'Completed'),
	('2023-05-17', 11, 'Dang Canh Tuan', 'dangcanhtuan@gmail.com', '0811765136', '71 Ba Trieu, Quan Hoan Kiem, Ha Noi', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-06-21', 15, 'Ha Tien Dung', 'hatiendung@gmail.com', '0874136752', '59 Dinh Cong Trang, Quan Tan Binh, TP. Ho Chi Minh', '100000', 'not-yet', 3, 'Laundry', 'The dryer sheets are in the laundry room', 'Completed'),
	('2023-08-15', 20, 'Hoang Viet Cuong', 'hoangvietcuong@gmail.com', '0880384649', '84 Tran Hung Dao, Quan Hai Ba Trung, Ha Noi', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Put away any clutter', 'Completed');
