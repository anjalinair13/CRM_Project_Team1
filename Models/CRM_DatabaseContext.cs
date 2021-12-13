using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CRM_Web_Api.Models
{
    public partial class CRM_DatabaseContext : DbContext
    {
        public CRM_DatabaseContext()
        {
        }

        public CRM_DatabaseContext(DbContextOptions<CRM_DatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Batch> Batch { get; set; }
        public virtual DbSet<CourseEnquiry> CourseEnquiry { get; set; }
        public virtual DbSet<CoursePurchase> CoursePurchase { get; set; }
        public virtual DbSet<Courses> Courses { get; set; }
        public virtual DbSet<Lead> Lead { get; set; }
        public virtual DbSet<PageVisit> PageVisit { get; set; }
        public virtual DbSet<Qualification> Qualification { get; set; }
        public virtual DbSet<ResourceEnquiry> ResourceEnquiry { get; set; }
        public virtual DbSet<ResourcePurchase> ResourcePurchase { get; set; }
        public virtual DbSet<Resources> Resources { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<Trainee> Trainee { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        /*
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=YADHUKRISHNANEM\\SQLEXPRESS;Initial Catalog=CRM_Database;Integrated Security=True");
            }
        }
        */
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Batch>(entity =>
            {
                entity.Property(e => e.BatchId).HasColumnName("batchId");

                entity.Property(e => e.BatchName)
                    .IsRequired()
                    .HasColumnName("batchName")
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.BatchStartDate)
                    .HasColumnName("batchStartDate")
                    .HasColumnType("date");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Batch)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__Batch__courseId__35BCFE0A");
            });

            modelBuilder.Entity<CourseEnquiry>(entity =>
            {
                entity.ToTable("courseEnquiry");

                entity.Property(e => e.CourseEnquiryId).HasColumnName("courseEnquiryId");

                entity.Property(e => e.AdminReply)
                    .HasColumnName("adminReply")
                    .IsUnicode(false);

                entity.Property(e => e.AdminReplyDate)
                    .HasColumnName("adminReplyDate")
                    .HasColumnType("date");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EnquirerName)
                    .HasColumnName("enquirerName")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EnquiryDate)
                    .HasColumnName("enquiryDate")
                    .HasColumnType("date");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.QualificationId).HasColumnName("qualificationId");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CourseEnquiry)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__courseEnq__cours__49C3F6B7");

                entity.HasOne(d => d.Qualification)
                    .WithMany(p => p.CourseEnquiry)
                    .HasForeignKey(d => d.QualificationId)
                    .HasConstraintName("FK__courseEnq__quali__5FB337D6");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.CourseEnquiry)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("FK__courseEnq__statu__5DCAEF64");
            });

            modelBuilder.Entity<CoursePurchase>(entity =>
            {
                entity.HasKey(e => e.PurchaseId)
                    .HasName("PK__coursePu__0261226C26143361");

                entity.ToTable("coursePurchase");

                entity.Property(e => e.PurchaseId).HasColumnName("purchaseId");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.PurchaseDate)
                    .HasColumnName("purchaseDate")
                    .HasColumnType("date");

                entity.Property(e => e.TraineeId).HasColumnName("traineeId");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CoursePurchase)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__coursePur__cours__3C69FB99");

                entity.HasOne(d => d.Trainee)
                    .WithMany(p => p.CoursePurchase)
                    .HasForeignKey(d => d.TraineeId)
                    .HasConstraintName("FK__coursePur__train__3D5E1FD2");
            });

            modelBuilder.Entity<Courses>(entity =>
            {
                entity.HasKey(e => e.CourseId)
                    .HasName("PK__Courses__2AA84FD163EE5592");

                entity.HasIndex(e => e.CourseName)
                    .HasName("UQ__Courses__BEEA9EEC1686A3C3")
                    .IsUnique();

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.CourseDescription)
                    .HasColumnName("courseDescription")
                    .IsUnicode(false);

                entity.Property(e => e.CourseName)
                    .IsRequired()
                    .HasColumnName("courseName")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.CoursePrice)
                    .HasColumnName("coursePrice")
                    .HasColumnType("money");

                entity.Property(e => e.IsAvailable).HasColumnName("isAvailable");

                entity.Property(e => e.IsPublic).HasColumnName("isPublic");

                entity.Property(e => e.QualificationId).HasColumnName("qualificationId");

                entity.Property(e => e.UrlString)
                    .HasColumnName("urlString")
                    .IsUnicode(false);

                entity.HasOne(d => d.Qualification)
                    .WithMany(p => p.Courses)
                    .HasForeignKey(d => d.QualificationId)
                    .HasConstraintName("FK__Courses__qualifi__2E1BDC42");
            });

            modelBuilder.Entity<Lead>(entity =>
            {
                entity.Property(e => e.LeadId).HasColumnName("leadId");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.LeadEmail)
                    .IsRequired()
                    .HasColumnName("leadEmail")
                    .IsUnicode(false);

                entity.Property(e => e.LeadName)
                    .IsRequired()
                    .HasColumnName("leadName")
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PageVisit>(entity =>
            {
                entity.HasKey(e => e.PageId)
                    .HasName("PK__pageVisi__54B1FF7449C9DADA");

                entity.ToTable("pageVisit");

                entity.Property(e => e.PageId).HasColumnName("pageId");

                entity.Property(e => e.PageCount)
                    .HasColumnName("pageCount")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.PageName)
                    .HasColumnName("pageName")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Qualification>(entity =>
            {
                entity.HasIndex(e => e.QualificationName)
                    .HasName("UQ__Qualific__493E4398EDE0D806")
                    .IsUnique();

                entity.Property(e => e.QualificationId).HasColumnName("qualificationId");

                entity.Property(e => e.QualificationName)
                    .HasColumnName("qualificationName")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ResourceEnquiry>(entity =>
            {
                entity.ToTable("resourceEnquiry");

                entity.Property(e => e.ResourceEnquiryId).HasColumnName("resourceEnquiryId");

                entity.Property(e => e.AdminReply)
                    .HasColumnName("adminReply")
                    .IsUnicode(false);

                entity.Property(e => e.AdminReplyDate)
                    .HasColumnName("adminReplyDate")
                    .HasColumnType("date");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EnquirerName)
                    .HasColumnName("enquirerName")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EnquiryDate)
                    .HasColumnName("enquiryDate")
                    .HasColumnType("date");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.QualificationId).HasColumnName("qualificationId");

                entity.Property(e => e.ResourceId).HasColumnName("resourceId");

                entity.Property(e => e.StatusId).HasColumnName("statusId");

                entity.HasOne(d => d.Qualification)
                    .WithMany(p => p.ResourceEnquiry)
                    .HasForeignKey(d => d.QualificationId)
                    .HasConstraintName("FK__resourceE__quali__60A75C0F");

                entity.HasOne(d => d.Resource)
                    .WithMany(p => p.ResourceEnquiry)
                    .HasForeignKey(d => d.ResourceId)
                    .HasConstraintName("FK__resourceE__resou__4CA06362");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.ResourceEnquiry)
                    .HasForeignKey(d => d.StatusId)
                    .HasConstraintName("FK__resourceE__statu__5EBF139D");
            });

            modelBuilder.Entity<ResourcePurchase>(entity =>
            {
                entity.HasKey(e => e.PurchaseId)
                    .HasName("PK__resource__0261226C9872108A");

                entity.ToTable("resourcePurchase");

                entity.Property(e => e.PurchaseId).HasColumnName("purchaseId");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.PeriodOfPurchase).HasColumnName("periodOfPurchase");

                entity.Property(e => e.PurchaseDate)
                    .HasColumnName("purchaseDate")
                    .HasColumnType("date");

                entity.Property(e => e.ResourceId).HasColumnName("resourceId");

                entity.Property(e => e.TraineeId).HasColumnName("traineeId");

                entity.HasOne(d => d.Resource)
                    .WithMany(p => p.ResourcePurchase)
                    .HasForeignKey(d => d.ResourceId)
                    .HasConstraintName("FK__resourceP__resou__4316F928");

                entity.HasOne(d => d.Trainee)
                    .WithMany(p => p.ResourcePurchase)
                    .HasForeignKey(d => d.TraineeId)
                    .HasConstraintName("FK__resourceP__train__440B1D61");
            });

            modelBuilder.Entity<Resources>(entity =>
            {
                entity.HasKey(e => e.ResourceId)
                    .HasName("PK__Resource__D8867D32B6ADC15C");

                entity.HasIndex(e => e.ResourceName)
                    .HasName("UQ__Resource__47AE2F639CBD45F8")
                    .IsUnique();

                entity.Property(e => e.ResourceId).HasColumnName("resourceId");

                entity.Property(e => e.Capacity).HasColumnName("capacity");

                entity.Property(e => e.IsAvailable).HasColumnName("isAvailable");

                entity.Property(e => e.IsPublic).HasColumnName("isPublic");

                entity.Property(e => e.ResourceCost)
                    .HasColumnName("resourceCost")
                    .HasColumnType("money");

                entity.Property(e => e.ResourceDescription)
                    .HasColumnName("resourceDescription")
                    .IsUnicode(false);

                entity.Property(e => e.ResourceName)
                    .HasColumnName("resourceName")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.UrlString)
                    .HasColumnName("urlString")
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.HasKey(e => e.RoleId)
                    .HasName("PK__Roles__CD98462A776C79A6");

                entity.HasIndex(e => e.Role)
                    .HasName("UQ__Roles__863D2148BF1F07D1")
                    .IsUnique();

                entity.Property(e => e.RoleId).HasColumnName("roleId");

                entity.Property(e => e.Role)
                    .HasColumnName("role")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("status");

                entity.Property(e => e.StatusId)
                    .HasColumnName("statusId")
                    .ValueGeneratedNever();

                entity.Property(e => e.Status1)
                    .HasColumnName("status")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Trainee>(entity =>
            {
                entity.Property(e => e.TraineeId).HasColumnName("traineeId");

                entity.Property(e => e.BatchId).HasColumnName("batchId");

                entity.Property(e => e.IsActive)
                    .HasColumnName("isActive")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.HasOne(d => d.Batch)
                    .WithMany(p => p.Trainee)
                    .HasForeignKey(d => d.BatchId)
                    .HasConstraintName("FK__Trainee__batchId__38996AB5");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Trainee)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Trainee__userId__398D8EEE");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Users__CB9A1CFF31E60ABB");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasColumnName("isActive")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.RoleId)
                    .HasColumnName("roleId")
                    .HasDefaultValueSql("((4))");

                entity.Property(e => e.UserContact)
                    .HasColumnName("userContact")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserEmail)
                    .HasColumnName("userEmail")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasColumnName("userName")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Users__roleId__2A4B4B5E");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
