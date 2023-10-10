using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class PackageServiceManagement
{
    public int PackageServiceId { get; set; }

    public string PackageServiceName { get; set; } = null!;

    public string PackageServiceDesc { get; set; } = null!;

    public string Time { get; set; } = null!;

    public string Price { get; set; } = null!;

    public string RepetitionCycle { get; set; } = null!;

    public string? Status { get; set; }

    public string? Image { get; set; }
}
