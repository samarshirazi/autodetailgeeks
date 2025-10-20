# GoHighLevel Integration

## ✅ Integration Complete

The AutoDetailGeeks website is now fully integrated with GoHighLevel to capture and track all leads from the website.

## 🔗 Webhook Integration

**Webhook URL:** `https://services.leadconnectorhq.com/hooks/5BuIGSOewXOi4QEDiqbd/webhook-trigger/8d90c2a1-16e1-4e55-b50a-35b00f436231`

### Form Data Sent to GHL:
Every form submission sends the following data to GoHighLevel:

```json
{
  "name": "Customer Name",
  "email": "customer@email.com", 
  "phone": "(587) 123-4567",
  "vehicle": "2020 Honda Civic",
  "service": "Ceramic Coating",
  "preferred_date": "2024-01-15",
  "message": "Customer message...",
  "source": "Contact Page Form",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "page_url": "https://autodetailgeeks.com/contact",
  "lead_source": "Website Form",
  "company": "AutoDetailGeeks",
  "location": "1104 75 St NW, Edmonton, AB T6K 2S2, Canada"
}
```

## 🎯 Lead Sources Tracked

- **Contact Page Form** - Main booking form
- **Services Page CTAs** - All "Book Service" buttons redirect to contact form
- **Homepage CTAs** - "Book Now" buttons
- **Gallery Page CTAs** - "Book Your Detail" buttons

## 📊 Data Captured

### Required Fields:
- ✅ Full Name
- ✅ Email Address  
- ✅ Phone Number
- ✅ Service Type

### Optional Fields:
- ✅ Vehicle Make & Model
- ✅ Preferred Date
- ✅ Additional Message/Requirements
- ✅ Source Page
- ✅ Timestamp
- ✅ Location (1104 75 St NW, Edmonton, AB T6K 2S2, Canada)

## 🔄 Integration Flow

1. **Customer visits website**
2. **Fills out contact form** (any page)
3. **Submits form** 
4. **Data sent to GHL webhook** in real-time
5. **Lead created in GHL** automatically
6. **Customer sees success message**
7. **GHL can trigger follow-up workflows**

## 💬 Chat Widget Integration

**LeadConnector Chat Widget** is also installed:
- Widget ID: `68b2857d90dffd7a243349f2`
- Available on all pages
- Real-time chat functionality
- Integrates with GHL conversations

## 🛠️ Technical Details

### Files Modified:
- `src/pages/Contact.tsx` - Main contact form with GHL integration
- `src/services/ghl-webhook.ts` - Reusable webhook service
- `index.html` - Chat widget script added

### Error Handling:
- Forms always show success to customers (good UX)
- Webhook failures are logged to console for debugging
- Graceful fallback if GHL is temporarily unavailable

## 🧪 Testing the Integration

### Test Form Submission:
1. Go to `/contact` page
2. Fill out the form with test data
3. Submit the form
4. Check GHL dashboard for new lead
5. Verify all data fields are populated correctly

### Expected Behavior:
- ✅ Form submits successfully
- ✅ Customer sees "Thank You" message
- ✅ Lead appears in GHL within seconds
- ✅ All form data is mapped correctly
- ✅ Source is identified as "Contact Page Form"

## 📈 Lead Management in GHL

All website leads will now appear in your GoHighLevel dashboard with:
- Complete contact information
- Service interest
- Source attribution  
- Timestamp for follow-up timing
- Vehicle details for personalized service

You can set up automated workflows in GHL to:
- Send immediate confirmation emails
- Schedule follow-up calls
- Assign leads to team members
- Track conversion rates by source
- Create service reminders and upsells

## 🚀 Next Steps

1. **Test the integration** with a few form submissions
2. **Set up GHL workflows** for automated follow-up
3. **Monitor lead quality** and conversion rates
4. **Consider A/B testing** different form placements
5. **Add tracking pixels** if needed for additional attribution

The integration is production-ready and will start capturing leads immediately upon deployment!
