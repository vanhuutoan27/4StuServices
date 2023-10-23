using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class OrderManagementTemp
{
    public int OrderId { get; set; }

    public DateTime? DateCreated { get; set; }

    public DateTime? DateCompleted { get; set; }

    public int CustomerId { get; set; }

    public string CustomerName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string Price { get; set; } = null!;

    public string PaymentMethod { get; set; } = null!;

    public int ServiceId { get; set; }

    public string ServiceName { get; set; } = null!;

    public string? Note { get; set; }

    public string? Status { get; set; }
}
