using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class StaffOrderManagement
{
    public int TaskId { get; set; }

    public int? OrderId { get; set; }

    public int? StaffId { get; set; }

    public DateTime? DateShipping { get; set; }
}
