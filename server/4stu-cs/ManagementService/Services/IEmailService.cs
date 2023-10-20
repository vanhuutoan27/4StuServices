using ManagementService.Models;
using MimeKit;

namespace ManagementService.Services.Impl
{
    public interface IEmailService
    {
        void SendEmail(EmailMessage message);
        MimeMessage CreateEmailMessage(EmailMessage message);
        void Send(MimeMessage mailMessage);
    }
}
