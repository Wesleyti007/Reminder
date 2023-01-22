using System.ComponentModel.DataAnnotations;

namespace ReminderAPI
{
    public class ReminderType
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string ReminderName { get; set; } = string.Empty;

    }
}
