const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendWelcomeEmail = async (email, username, password) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Serenity Meditation App! 🧘',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background: linear-gradient(135deg, #a2d2ff 0%, #cdb4db 100%); padding: 30px; border-radius: 10px; text-align: center;">
                    <h1 style="color: white; margin: 0;">Welcome to Serenity! 🧘</h1>
                </div>
                <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px;">
                    <h2 style="color: #1d3557;">Hello ${username}!</h2>
                    <p style="color: #666; line-height: 1.6;">Thank you for joining Serenity Meditation App. We're excited to have you on your journey to inner peace.</p>
                    
                    <div style="background: #f1faee; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1d3557; margin-top: 0;">Your Account Details:</h3>
                        <p style="margin: 10px 0;"><strong>Username:</strong> ${username}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Password:</strong> ${password}</p>
                    </div>
                    
                    <p style="color: #666; line-height: 1.6;">Please keep this information secure and consider changing your password after your first login.</p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="http://localhost:5173/login" style="background: linear-gradient(135deg, #a2d2ff 0%, #cdb4db 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">Start Meditating</a>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                    <p>This is an automated message from Serenity Meditation App</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Welcome email sent to:', email);
    } catch (error) {
        console.error('Error sending email:', error.message);
        // Don't throw error - allow registration to succeed even if email fails
    }
};

module.exports = { sendWelcomeEmail };
