using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace _4stu_cs.Models;

public partial class _4stuDbContext : DbContext
{
    public _4stuDbContext()
    {
    }

    public _4stuDbContext(DbContextOptions<_4stuDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<FeedbackManagement> FeedbackManagements { get; set; }

    public virtual DbSet<OrderManagement> OrderManagements { get; set; }

    public virtual DbSet<PackageServiceManagement> PackageServiceManagements { get; set; }

    public virtual DbSet<ServiceManagement> ServiceManagements { get; set; }

    public virtual DbSet<StaffManagement> StaffManagements { get; set; }

    public virtual DbSet<StaffOrderManagement> StaffOrderManagements { get; set; }

    public virtual DbSet<UserManagement> UserManagements { get; set; }

    private string GetConnectionString()
    {
        IConfiguration config = new ConfigurationBuilder()
             .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json", true, true)
                    .Build();
        var strConn = config["ConnectionStrings:DefaultConnection"];

        return strConn;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(GetConnectionString());

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FeedbackManagement>(entity =>
        {
            entity.HasKey(e => e.FeedbackId).HasName("PK__Feedback__6A4BEDF6F55E1751");

            entity.ToTable("FeedbackManagement");

            entity.Property(e => e.FeedbackId).HasColumnName("FeedbackID");
            entity.Property(e => e.Comment)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CustomerId).HasColumnName("CustomerID");
            entity.Property(e => e.DateFeedback)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.ServiceId).HasColumnName("ServiceID");
        });

        modelBuilder.Entity<OrderManagement>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PK__OrderMan__C3905BCFC7471820");

            entity.ToTable("OrderManagement");

            entity.Property(e => e.Address).HasColumnType("text");
            entity.Property(e => e.CustomerName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DateCompleted)
                .HasColumnType("date")
                .HasColumnName("dateCompleted");
            entity.Property(e => e.DateCreated)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("dateCreated");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Note)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("NOTE");
            entity.Property(e => e.PaymentMethod)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("paymentMethod");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Price)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.ServiceName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Status)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("('Pending')");
        });

        modelBuilder.Entity<PackageServiceManagement>(entity =>
        {
            entity.HasKey(e => e.PackageServiceId).HasName("PK__PackageS__5EAFC210E66994B4");

            entity.ToTable("PackageServiceManagement");

            entity.Property(e => e.PackageServiceId).HasColumnName("PackageServiceID");
            entity.Property(e => e.AverageRating)
                .HasDefaultValueSql("((0))")
                .HasColumnName("averageRating");
            entity.Property(e => e.Image)
                .IsUnicode(false)
                .HasDefaultValueSql("('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w')");
            entity.Property(e => e.LongImage)
                .IsUnicode(false)
                .HasDefaultValueSql("('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w')");
            entity.Property(e => e.PackageServiceDesc).HasColumnType("text");
            entity.Property(e => e.PackageServiceName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Price)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.RatingCount)
                .HasDefaultValueSql("((0))")
                .HasColumnName("ratingCount");
            entity.Property(e => e.RepetitionCycle)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Status)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("('Active')");
            entity.Property(e => e.Time)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ServiceManagement>(entity =>
        {
            entity.HasKey(e => e.ServiceId).HasName("PK__ServiceM__C51BB0EAF24B08D7");

            entity.ToTable("ServiceManagement");

            entity.Property(e => e.ServiceId).HasColumnName("ServiceID");
            entity.Property(e => e.AverageRating)
                .HasDefaultValueSql("((0))")
                .HasColumnName("averageRating");
            entity.Property(e => e.Image)
                .IsUnicode(false)
                .HasDefaultValueSql("('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w')");
            entity.Property(e => e.LongImage)
                .IsUnicode(false)
                .HasDefaultValueSql("('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w')");
            entity.Property(e => e.Price)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.RatingCount)
                .HasDefaultValueSql("((0))")
                .HasColumnName("ratingCount");
            entity.Property(e => e.ServiceDesc).HasColumnType("text");
            entity.Property(e => e.ServiceName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Status)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("('Active')");
            entity.Property(e => e.Tag)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Time)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StaffManagement>(entity =>
        {
            entity.HasKey(e => e.StaffId).HasName("PK__StaffMan__96D4AAF76B2C5EE7");

            entity.ToTable("StaffManagement");

            entity.Property(e => e.StaffId)
                .ValueGeneratedNever()
                .HasColumnName("StaffID");
            entity.Property(e => e.Avatar)
                .IsUnicode(false)
                .HasDefaultValueSql("('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w')");
            entity.Property(e => e.AverageRating)
                .HasDefaultValueSql("((0))")
                .HasColumnName("averageRating");
            entity.Property(e => e.DateCreated)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("dateCreated");
            entity.Property(e => e.Dob)
                .HasColumnType("date")
                .HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("firstName");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("lastName");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.RatingCount)
                .HasDefaultValueSql("((0))")
                .HasColumnName("ratingCount");
            entity.Property(e => e.Sex).HasColumnName("sex");
            entity.Property(e => e.Status)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("('Active')");
            entity.Property(e => e.Tag)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StaffOrderManagement>(entity =>
        {
            entity.HasKey(e => e.TaskId).HasName("PK__StaffOrd__7C6949D1EA7BC80F");

            entity.ToTable("StaffOrderManagement");

            entity.Property(e => e.TaskId).HasColumnName("TaskID");
            entity.Property(e => e.DateShipping)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.StaffId).HasColumnName("StaffID");
        });

        modelBuilder.Entity<UserManagement>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__UserMana__1788CCACA95A14E1");

            entity.ToTable("UserManagement");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.Avatar)
                .IsUnicode(false)
                .HasDefaultValueSql("('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w')");
            entity.Property(e => e.DateCreated)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date")
                .HasColumnName("dateCreated");
            entity.Property(e => e.Dob)
                .HasColumnType("date")
                .HasColumnName("dob");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("firstName");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("lastName");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Role)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("('Customer')");
            entity.Property(e => e.Sex).HasColumnName("sex");
            entity.Property(e => e.Status)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("('Active')");
            entity.Property(e => e.TotalOrders)
                .HasDefaultValueSql("((0))")
                .HasColumnName("totalOrders");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
