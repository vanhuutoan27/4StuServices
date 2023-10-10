using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class OrderManagementTest
{
    public int OrderId { get; set; }

    public DateTime? DateCreated { get; set; }

    public DateTime? DateCompleted { get; set; }

    public int CustomerId { get; set; }

    public string CustomerName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string PaymentMethod { get; set; } = null!;

    public string? Status { get; set; }

    public int StaffId { get; set; }
}
