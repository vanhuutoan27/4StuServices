﻿using System;
using System.Collections.Generic;

namespace _4stu_cs.Models;

public partial class UserManagement
{
    public int UserId { get; set; }

    public DateTime? DateCreated { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Phone { get; set; }

    public string? Avatar { get; set; }

    public DateTime? Dob { get; set; }

    public bool? Sex { get; set; }

    public int? TotalOrders { get; set; }

    public string? Status { get; set; }

    public string? Role { get; set; }
}
