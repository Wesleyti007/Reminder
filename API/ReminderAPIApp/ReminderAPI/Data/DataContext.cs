using Microsoft.EntityFrameworkCore;

namespace ReminderAPI.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Reminder> Reminders { get; set; }
        public DbSet<ReminderType> RemindersType { get; set; }
        public DbSet<Status> Status { get; set; }
    }
}
