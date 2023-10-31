using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class FeedbackManagement
{
    public int FeedbackId { get; set; }

    public int OrderId { get; set; }

    public int ServiceId { get; set; }

    public int CustomerId { get; set; }

    public int Rating { get; set; }

    public string Comment { get; set; } = null!;

    public DateTime? DateFeedback { get; set; }
}
