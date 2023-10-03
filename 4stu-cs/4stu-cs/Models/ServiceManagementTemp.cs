using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class ServiceManagementTemp
{
    public int ServiceId { get; set; }

    public string ServiceName { get; set; } = null!;

    public string ServiceDesc { get; set; } = null!;

    public string Time { get; set; } = null!;

    public string Price { get; set; } = null!;

    public int? FeedbackId { get; set; }

    public int? OrderId { get; set; }

    public string Tag { get; set; } = null!;

    public string? Image { get; set; }

    public string? Status { get; set; }

    public virtual ICollection<PackageServiceManagement> PackageServiceManagements { get; set; } = new List<PackageServiceManagement>();
}
