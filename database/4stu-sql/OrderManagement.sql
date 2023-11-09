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
	('2023-06-11', 1, 'Ly Nhu Quynh', 'lenhuquynh@gmail.com', '0325654330', '48 Ly Thuong Kiet, Quan Thu Duc, TP. Ho Chi Minh', '50000', 'momo', 4, 'Shopping For Customers', 'Buy toys for children', 'Completed'),
	('2023-03-11', 2, 'Bui Quoc Huy', 'buiquochuy@gmail.com', '0904716364', '14 Nguyen Hue, Phuong 5, Thanh pho Ben Tre', '100000', 'momo', 3, 'Laundry', 'The detergent is under the sink', 'Completed'),
	('2023-05-20', 3, 'Phan Thanh Thien', 'phanthanhthien@gmail.com', '0824057331', '31 Dien Bien Phu, Quan Ba Ria - Vung Tau', '200000', 'momo', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-05-15', 4, 'Dam My Phung', 'dammyphung@gmail.com', '0336644248', 'Tinh lo 8, Bien Hoa, Đong Nai ', '50000', 'momo', 11, 'Washing Machine Cleaning', '', 'Completed'),
	('2023-03-22', 5, 'Kim Phuong Trieu', 'kimphuongtrieu@gmail.com', '0567538602', '11 Vo Van Kiet, Phuong 7, Thanh pho Tan An, Long An', '50000', 'momo', 4, 'Shopping For Customers', 'Buy daily necessities', 'Completed'),
    ('2023-08-06', 6, 'Bui Huy Hoang', 'buihuyhoang@gmail.com', '0878784494', '30 Vo Van Ngan, Tp. Thu Duc, TP. Ho Chi Minh', '100000', 'momo', 5, 'Electrical And Plumbing', 'Buy electronics', 'Completed'),
	('2023-02-11', 7, 'Ngo The Trung', 'ngothetrung@gmail.com', '0300421253', '34 Nguyen Van B, Quan Go Vap, TP. Ho Chi Minh', '100000', 'momo', 5, 'Electrical And Plumbing repair', '', 'Completed'),
	('2023-05-26', 8, 'Bui Huong Xuan', 'buihuongxuan@gmail.com', '0836701993', '40 Nguyen Trai, Phuong 1, Thanh pho Vinh Long', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-02-11', 9, 'Do Lien Huong', 'dolienhuong@gmail.com', '0787553019', '72 Nguyen Thi Lang, Xa Phuoc Vinh An, Cu Chi', '50000', 'not-yet', 4, 'Shopping For Customers', 'Buy daily necessities', 'Completed'),
	('2023-09-19', 10, 'Trinh Viet Duong', 'trinhvietduong@gmail.com', '0925358212', '67 Le Duan, Quan Tan Binh, TP. Ho Chi Minh', '50000', 'momo', 9, 'Gas Refill', 'Please fill up my gas tank', 'Completed'),
	
	('2023-05-17', 11, 'Dang Canh Tuan', 'dangcanhtuan@gmail.com', '0811765136', '2 Nam Ky Khoi Nghia, Phuong Vo Thi Sau, Quan 3, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-05-20', 12, 'Mai Quoc Binh', 'maiquocbinh@gmail.com', '0816221427', '12 Hung Vuong, Phuong Hiep An, Thanh pho Thu Dau Mot, Binh Duong', '50000', 'momo', 15, 'Bathroom Cleaning', '', 'Completed'),
	('2023-01-12', 13, 'Hoang Dinh Trung', 'hoangdinhtrung@gmail.com', '0877131826', '68 Vo Thi Sau, Phuong Long, Bien Hoa, Dong Nai', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
    ('2023-05-11', 14, 'Dinh Tri Hung', 'dinhtrihung@gmail.com', '0339380738', '12 Nguyen Van A, Quan 1, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Please vacuum and mop the floors', 'Completed'),
	('2023-06-21', 15, 'Ha Tien Dung', 'hatiendung@gmail.com', '0874136752', '59 Dinh Cong Trang, Quan Tan Binh, TP. Ho Chi Minh', '100000', 'not-yet', 3, 'Laundry', 'The dryer sheets are in the laundry room', 'Completed'),
	('2023-08-11', 16, 'Phung Thanh Huyen', 'phungthanhhuyen@gmail.com', '0868599374', '5 Duong 30/4, Phuong 5, Thanh pho Vinh Long', '50000', 'not-yet', 11, 'Washing Machine Cleaning', '', 'Completed'),
	('2023-07-24', 17, 'Phung Phu Hung', 'phungphuhung@gmail.com', '0816931480', '36 Duong Cach Mang Thang Tam, Phuong 1, Thanh pho Tay Ninh', '50000', 'momo', 9, 'Gas Refill', '', 'Completed'),
	('2023-02-11', 18, 'Nguyen Luong Quyen', 'nguyenluongquyen@gmail.com', '0882112255', '99 Duong 30/4, Quan Ninh Kieu, Can Tho', '50000', 'not-yet', 2, 'Booking Meals', '', 'Completed'),
	('2023-07-01', 19, 'Truong Huong Tra', 'truonghuongtra@gmail.com', '0373014572', '90 Le Duan, Phuong 3, Thanh pho Tay Ninh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-08-15', 20, 'Hoang Viet Cuong', 'hoangvietcuong@gmail.com', '0880384649', '78 Nguyen Thi Dinh, Phuong Thao Đien, Quan 2, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Put away any clutter', 'Completed'),
	
	('2023-05-27', 28, 'Nguyen Nhat Trang', 'nguyennhattram@gmail.com', '0785482549', '', '50000', 'momo', 2, 'Booking Meals', 'Lunch for 3 people, including meat, vegetables, rice, and drinks', 'Completed'),
	('2023-05-27', 29, 'Bui Minh Ky', 'buiminhky@gmail.com', '0580923115', '35 Le Quy Don, Quan Binh Thanh, TP. Ho Chi Minh', '50000', 'momo', 2, 'Booking Meals', 'Lunch for 3 people, including meat, vegetables, rice, and drinks', 'Completed'),
	('2023-04-14', 30, 'Trieu Dinh Don', 'trieudinhdon@gmail.com', '0312488737', '4 Mai Chi Tho, Phuong An Phu, Quan 2, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Please vacuum and mop the floors', 'Completed'),
	('2023-07-22', 31, 'Le Tam Nhu', 'letamthu@gmail.com', '0920163082', '13 Ly Thuong Kiet, Phuong 5, Thanh pho My Tho', '100000', 'momo', 12, 'Refrigerator Cleaning', '', 'Completed'),
	('2023-06-11', 32, 'Ngo Phuong Dung', 'ngophuongdung@gmail.com', '0833320984', '11 Nguyen Dinh Chinh, Quan Tan Phu, TP. Ho Chi Minh', '100000', 'not-yet', 5, 'Electrical And Plumbing repair', '', 'Completed'),
    ('2023-10-22', 33, 'Do Dinh Don', 'dodinhdon@gmail.com', '0598116162', '202 Ha Long, Phuong 2, Thanh pho Vung Tau', '50000', 'momo', 4, 'Shopping For Customers', 'Buy school supplies', 'Completed'),
    ('2023-01-03', 34, 'Thach Minh Quoc', 'thacminhquoc@gmail.com', '0851894702', '101 Truong Cong Dinh, Phuong 3, Thanh pho Vung Tau', '100000', 'momo', 3, 'Laundry', 'The dryer sheets are in the laundry room', 'Completed'),
	('2023-05-12', 35, 'Ngo Xuan Nhi', 'ngoxuannhi@gmail.com', '0886618277', '11 My Phuoc Tan Van, Phuong Phu Tan, Thanh pho Thu Dau Mot, Binh Duong', '50000', 'momo', 9, 'Gas Refill', '', 'Completed'),
	('2023-05-11', 36, 'Van Tuan Khanh', 'vantuankhanh@gmail.com', '0328000308', '51 Vo Nguyen Giap, Phuong Long Binh, Thanh pho Bien Hoa, Dong Nai', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the bathroom and kitchen', 'Completed'),
	('2023-04-14', 37, 'Pham Quynh Tho', 'phamquynhtho@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	
	('2023-03-23', 38, 'Pham Quynh Tho', 'dohongdang@gmail.com', '0958937019', '12 Nam Ky Khoi Nghia, Phuong Vo Thi Sau, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-02-21', 39, 'Nguyen Minh Trang', 'nguyenminhtrang@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'credit-card', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-01-16', 40, 'Tran Van Duc', 'tranvanduc@gmail.com', '0958937019', '68 Vo Thi Sau, Phuong Long, Bien Hoa, Dong Nai', '200000', 'credit-card', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-06-19', 41, 'Le Thi Thao', 'lethithao@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-06-20', 42, 'Pham Quang Huy', 'phamquanghuy@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-05-12', 43, 'Bui Hong Linh', 'buihonglinh@gmail.com', '0958937019', '78 Nguyen Thi Dinh, Phuong Thao Đien, Quan 2, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Please vacuum and mop the floors', 'Completed'),
	('2023-04-23', 44, 'Vu Van Anh', 'vuvananh@gmail.com', '0958937019', '48 Ly Thuong Kiet, Quan Thu Duc, TP. Ho Chi Minh', '200000', 'credit-card', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-06-11', 45, 'Hoang Anh Duc', 'hoanganhduc@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-10-24', 46, 'Nguyen Hong Quyen', 'nguyenhongquyen@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-08-24', 47, 'Dinh Quoc Hung', 'dinhquochung@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'credit-card', 1, 'Apartment Cleaning', '', 'Completed'),
	
	('2023-06-24', 48, 'Phuong Thi Kim', 'phuongthikim@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-07-23', 49, 'Tran Van Khoi', 'tranvankhoi@gmail.com', '0958937019', '78 Nguyen Thi Dinh, Phuong Thao Đien, Quan 2, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', 'Clean the bathroom and kitchen', 'Completed'),
	('2023-09-10', 50, 'Huong Thi Mai', 'huongthimai@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'credit-card', 1, 'Apartment Cleaning', 'Clean the bathroom and kitchen', 'Completed'),
	('2023-07-02', 51, 'Luong Quang Hieu', 'luongquanghieu@gmail.com', '0958937019', '5 Duong 30/4, Phuong 5, Thanh pho Vinh Long', '200000', 'credit-card', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-03-06', 52, 'Hoai Tran Duc', 'hoaitranduc@gmail.com', '0958937019', '202 Ha Long, Phuong 2, Thanh pho Vung Tau', '200000', 'not-yet', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-04-07', 53, 'Hoang Thi Phuong', 'hoangthiphuong@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-02-24', 54, 'Van Thi Thuy', 'vanthithuy@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-01-01', 55, 'Vu Hoai Nam', 'vuhoainam@gmail.com', '0958937019', '31 Dien Bien Phu, Quan Ba Ria - Vung Tau', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-02-26', 56, 'Minh Thi Anh', 'minhthianh@gmail.com', '0958937019', '40 Nguyen Trai, Phuong 1, Thanh pho Vinh Long', '200000', 'credit-card', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-03-11', 57, 'Nguyen Tan Phat', 'nguyentanphat@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),

	('2023-04-24', 58, 'Huong Thi Thu', 'huongthithu@gmail.com', '0958937019', '99 Duong 30/4, Quan Ninh Kieu, Can Tho', '200000', 'credit-card', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-05-22', 59, 'Truong Van Thu', 'truongvanthu@gmail.com', '0958937019', '13 Ly Thuong Kiet, Phuong 5, Thanh pho My Tho', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the bathroom and kitchen', 'Completed'),
	('2023-06-24', 60, 'Binh Quang Minh', 'binhquangminh@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'not-yet', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-07-21', 61, 'Tu Thi Huong', 'tuthihuong@gmail.com', '0958937019', '11 My Phuoc Tan Van, Phuong Phu Tan, Thanh pho Thu Dau Mot, Binh Duong', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-08-24', 62, 'Dai Thi Thanh', 'daithithanh@gmail.com', '0958937019', '30 Vo Van Ngan, Tp. Thu Duc, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', 'Clean the bathroom and kitchen', 'Completed'),
	('2023-09-04', 63, 'Cuong Van Hung', 'cuongvanhung@gmail.com', '0958937019', '101 Truong Cong Dinh, Phuong 3, Thanh pho Vung Tau', '200000', 'not-yet', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-10-24', 64, 'Hoang Thanh Truc', 'hoangthanhtruc@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'credit-card', 1, 'Apartment Cleaning', 'Clean the living room, bedroom, and kitchen', 'Completed'),
	('2023-11-22', 65, 'Anh Duy Minh', 'anhduyminh@gmail.com', '0958937019', '39 Le Thanh Ton, Quan 3, TP. Ho Chi Minh', '200000', 'momo', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-12-15', 66, 'Viet Thi Anh', 'vietthianh@gmail.com', '0958937019', '8 Nguyen Thi Dinh, Phuong Thao Đien, Quan 2, TP. Ho Chi Minh', '200000', 'credit-card', 1, 'Apartment Cleaning', '', 'Completed'),
	('2023-05-11', 67, 'My Thi Huong', 'mythihuong@gmail.com', '0328000308', '51 Vo Nguyen Giap, Phuong Long Binh, Thanh pho Bien Hoa, Dong Nai', '200000', 'not-yet', 1, 'Apartment Cleaning', 'Clean the bathroom and kitchen', 'Completed');