﻿using System.ComponentModel.DataAnnotations;

namespace ReminderAPI
{
    public class Status
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string StatusName { get; set; } = string.Empty;
    }
}
