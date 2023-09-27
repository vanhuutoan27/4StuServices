using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class CustomerManagement
{
    public int CustomerId { get; set; }

    public string Email { get; set; } = null!;

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Phone { get; set; }

    public string? Avatar { get; set; }

    public DateTime? Dob { get; set; }

    public bool? Sex { get; set; }
}
