const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    try {
        console.log("Creating test account...");
        let testAccount = await nodemailer.createTestAccount();
        console.log("Test account created:", testAccount);

        console.log("Creating transporter...");
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            auth: {
                user: 'herbert.senger@ethereal.email', // replace with your Ethereal email
                pass: 'mJjmAfCDWGRPtU3dU3' // replace with your Ethereal password
            },
        });
        console.log("Transporter created");

        console.log("Sending mail...");
        const info = await transporter.sendMail({
            from: '"Kaushik Mandavkar 👻" <kaushik@gmail.com>', 
            to: "kaushikmandavkar6@gmail.com", 
            subject: "Hello ✔ kaushik", 
            text: "Hello world?", 
            html: "<b>Hello world?</b>", 
        });

        console.log("Message sent: %s", info.messageId);
        console.log("sendMail endpoint hit");

        res.json(info);
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

module.exports = sendMail;
