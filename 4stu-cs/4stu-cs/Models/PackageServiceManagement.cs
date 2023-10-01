using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class PackageServiceManagement
{
    public int PackageServiceId { get; set; }

    public string PackageServiceName { get; set; } = null!;

    public string PackageServiceDesc { get; set; } = null!;

    public int Time { get; set; }

    public decimal Price { get; set; }

    public string? RepetitionCycle { get; set; }

    public int ServiceId { get; set; }

    public string? Image { get; set; }

    public string? Status { get; set; }

    public virtual ServiceManagement Service { get; set; } = null!;
}
