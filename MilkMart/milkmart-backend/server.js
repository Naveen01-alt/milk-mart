const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-order", async (req, res) => {
  const { name, phone, address, pincode, cart, totalAmount } = req.body;

  const orderDetails = cart.map(item =>
    `${item.name} (${item.quantity}L) - ₹${item.price * item.quantity}`
  ).join(", ");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"MilkMart Orders" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New MilkMart Order",
    text: `
📦 New Order:

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}
📮 Pincode: ${pincode}
🛒 Items: ${orderDetails}
💰 Total: ₹${totalAmount}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Order email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Email sending failed" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});
