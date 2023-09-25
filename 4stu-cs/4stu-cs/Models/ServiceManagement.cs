using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class ServiceManagement
{
    public int ServiceId { get; set; }

    public string ServiceName { get; set; } = null!;

    public string ServiceDesc { get; set; } = null!;

    public int Time { get; set; }

    public decimal Price { get; set; }

    public int? FeedbackId { get; set; }

    public int? OrderId { get; set; }

    public string Tag { get; set; } = null!;
}
