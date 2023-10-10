using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class ServiceManagement
{
    public int ServiceId { get; set; }

    public string ServiceName { get; set; } = null!;

    public string ServiceDesc { get; set; } = null!;

    public string Time { get; set; } = null!;

    public string Price { get; set; } = null!;

    public string Tag { get; set; } = null!;

    public string? Status { get; set; }

    public string? Image { get; set; }

    public string? LongImage { get; set; }

    public decimal? Rating { get; set; }
}
