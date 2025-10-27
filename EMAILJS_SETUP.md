# EmailJS Setup Guide

This guide will walk you through setting up EmailJS for your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID** (you'll need this later)

### For Gmail Users:
- You may need to enable "Less secure app access" or use an App Password
- [Gmail App Passwords Guide](https://support.google.com/accounts/answer/185833)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template structure:

### Template Content:

**Subject:**
```
New Contact from {{from_name}} - {{subject}}
```

**Body:**
```
You have a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save your template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following variables with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with:
   - `your_service_id_here` → Your Service ID from Step 2
   - `your_template_id_here` → Your Template ID from Step 3
   - `your_public_key_here` → Your Public Key from Step 4

## Step 6: Test Your Contact Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email to confirm the message was received

## Email Template Variables

The contact form sends the following variables to your EmailJS template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (hardcoded as "Portfolio Owner")

You can customize these in `src/components/sections/contact.tsx`.

## Troubleshooting

### "EmailJS configuration is missing" Error
- Make sure all three environment variables are set in `.env.local`
- Restart your development server after adding environment variables
- Check that variable names start with `NEXT_PUBLIC_`

### Emails Not Sending
- Verify your Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for service status
- Make sure your email service is properly connected and verified
- Check browser console for detailed error messages

### Rate Limiting
- EmailJS free tier has limits:
  - 200 emails/month
  - 2 emails/second
- Consider upgrading for higher limits if needed

## Security Notes

- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- The `NEXT_PUBLIC_` prefix makes these variables accessible in the browser
- EmailJS Public Key is safe to expose as it's designed for client-side use
- Additional security can be configured in EmailJS dashboard settings

## Additional Configuration

### Custom Reply-To
To make replies go directly to the sender's email, update your EmailJS template settings:
1. Go to your template in EmailJS dashboard
2. Under **Settings** → **Reply To**, enter: `{{from_email}}`

### Auto-Reply
You can create a second template to send an auto-reply to users who contact you:
1. Create a new template with a message to the sender
2. Add another `emailjs.send()` call in the contact form after the first one succeeds

## Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
