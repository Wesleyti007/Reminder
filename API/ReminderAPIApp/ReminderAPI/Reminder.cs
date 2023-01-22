using System.ComponentModel.DataAnnotations;

namespace ReminderAPI
{
    public class Reminder
    {
        public int Id { get; set; }
        
        [StringLength(10)]
        public string Status { get; set; } = string.Empty;
        
        [StringLength(200)]
        public string Coments { get; set; } = string.Empty;
        public int ReminderTypeId { get; set; }
        public ReminderType? ReminderType { get; set; }
    }
}
