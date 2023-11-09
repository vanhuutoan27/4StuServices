IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    CREATE TABLE [FeedbackManagement] (
        [FeedbackID] int NOT NULL IDENTITY,
        [OrderID] int NOT NULL,
        [ServiceID] int NOT NULL,
        [CustomerID] int NOT NULL,
        [Rating] int NOT NULL,
        [Comment] varchar(100) NOT NULL,
        [DateFeedback] datetime NULL DEFAULT ((getdate())),
        CONSTRAINT [PK__Feedback__6A4BEDF6F55E1751] PRIMARY KEY ([FeedbackID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    CREATE TABLE [OrderManagement] (
        [OrderId] int NOT NULL IDENTITY,
        [dateCreated] date NULL DEFAULT ((getdate())),
        [dateCompleted] date NULL,
        [CustomerId] int NOT NULL,
        [CustomerName] varchar(50) NOT NULL,
        [Email] varchar(50) NOT NULL,
        [Phone] varchar(20) NOT NULL,
        [Address] text NOT NULL,
        [Price] varchar(20) NOT NULL,
        [paymentMethod] varchar(50) NOT NULL,
        [ServiceId] int NOT NULL,
        [ServiceName] varchar(50) NOT NULL,
        [NOTE] varchar(100) NULL,
        [Status] varchar(20) NULL DEFAULT (('Pending')),
        CONSTRAINT [PK__OrderMan__C3905BCFC7471820] PRIMARY KEY ([OrderId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    CREATE TABLE [PackageServiceManagement] (
        [PackageServiceID] int NOT NULL IDENTITY,
        [PackageServiceName] varchar(50) NOT NULL,
        [PackageServiceDesc] text NOT NULL,
        [Time] varchar(10) NOT NULL,
        [Price] varchar(20) NOT NULL,
        [RepetitionCycle] varchar(50) NOT NULL,
        [Status] varchar(20) NULL DEFAULT (('Active')),
        [Image] varchar(max) NULL DEFAULT (('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w')),
        [LongImage] varchar(max) NULL DEFAULT (('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w')),
        [ratingCount] int NULL DEFAULT (((0))),
        [averageRating] float NULL DEFAULT (((0))),
        CONSTRAINT [PK__PackageS__5EAFC210E66994B4] PRIMARY KEY ([PackageServiceID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    CREATE TABLE [ServiceManagement] (
        [ServiceID] int NOT NULL IDENTITY,
        [ServiceName] varchar(50) NOT NULL,
        [ServiceDesc] text NOT NULL,
        [Time] varchar(10) NOT NULL,
        [Price] varchar(20) NOT NULL,
        [Tag] varchar(50) NOT NULL,
        [Status] varchar(20) NULL DEFAULT (('Active')),
        [Image] varchar(max) NULL DEFAULT (('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w')),
        [LongImage] varchar(max) NULL DEFAULT (('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w')),
        [ratingCount] int NULL DEFAULT (((0))),
        [averageRating] float NULL DEFAULT (((0))),
        CONSTRAINT [PK__ServiceM__C51BB0EAF24B08D7] PRIMARY KEY ([ServiceID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    CREATE TABLE [StaffManagement] (
        [StaffID] int NOT NULL,
        [dateCreated] date NULL DEFAULT ((getdate())),
        [email] varchar(50) NOT NULL,
        [password] varchar(50) NOT NULL,
        [phone] varchar(20) NULL,
        [firstName] varchar(50) NOT NULL,
        [lastName] varchar(50) NOT NULL,
        [Avatar] varchar(max) NULL DEFAULT (('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w')),
        [dob] date NULL,
        [sex] bit NULL,
        [ratingCount] int NULL DEFAULT (((0))),
        [averageRating] float NULL DEFAULT (((0))),
        [Tag] varchar(50) NULL,
        [Status] varchar(20) NULL DEFAULT (('Active')),
        CONSTRAINT [PK__StaffMan__96D4AAF76B2C5EE7] PRIMARY KEY ([StaffID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    CREATE TABLE [StaffOrderManagement] (
        [TaskID] int NOT NULL IDENTITY,
        [OrderID] int NULL,
        [StaffID] int NULL,
        [DateShipping] datetime NULL DEFAULT ((getdate())),
        CONSTRAINT [PK__StaffOrd__7C6949D1EA7BC80F] PRIMARY KEY ([TaskID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    CREATE TABLE [UserManagement] (
        [UserID] int NOT NULL IDENTITY,
        [dateCreated] date NULL DEFAULT ((getdate())),
        [email] varchar(50) NOT NULL,
        [password] varchar(50) NOT NULL,
        [firstName] varchar(50) NOT NULL,
        [lastName] varchar(50) NOT NULL,
        [phone] varchar(20) NULL,
        [Avatar] varchar(max) NULL DEFAULT (('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w')),
        [dob] date NULL,
        [sex] bit NULL,
        [totalOrders] int NULL DEFAULT (((0))),
        [Status] varchar(20) NULL DEFAULT (('Active')),
        [Role] varchar(20) NULL DEFAULT (('Customer')),
        CONSTRAINT [PK__UserMana__1788CCACA95A14E1] PRIMARY KEY ([UserID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231109013118_InitialDBSetup')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231109013118_InitialDBSetup', N'7.0.11');
END;
GO

COMMIT;
GO

