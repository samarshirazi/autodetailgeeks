// GoHighLevel Webhook Service
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  vehicle?: string;
  service: string;
  preferred_date?: string;
  message?: string;
  source?: string;
  page_url?: string;
}

export interface WebhookResponse {
  success: boolean;
  error?: string;
}

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/5BuIGSOewXOi4QEDiqbd/webhook-trigger/8d90c2a1-16e1-4e55-b50a-35b00f436231';

export const sendToGHL = async (formData: ContactFormData): Promise<WebhookResponse> => {
  try {
    // Prepare webhook payload
    const webhookData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      vehicle: formData.vehicle || 'Not specified',
      service: formData.service,
      preferred_date: formData.preferred_date || 'Not specified',
      message: formData.message || 'No additional message',
      source: formData.source || 'AutoDetailGeeks Website',
      timestamp: new Date().toISOString(),
      page_url: formData.page_url || window.location.href,
      // Additional fields that GHL might find useful
      lead_source: 'Website Form',
      company: 'AutoDetailGeeks',
      location: 'Edmonton, Alberta'
    };

    console.log('Sending to GHL webhook:', webhookData);

    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (response.ok) {
      console.log('Successfully sent to GHL webhook');
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error('GHL webhook error:', response.status, errorText);
      return { 
        success: false, 
        error: `HTTP ${response.status}: ${errorText}` 
      };
    }
  } catch (error) {
    console.error('Error sending to GHL webhook:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Alternative function for simple form submissions (for other forms on the site)
export const sendSimpleContact = async (
  name: string, 
  email: string, 
  phone: string, 
  message: string,
  source: string = 'Website Contact'
): Promise<WebhookResponse> => {
  return sendToGHL({
    name,
    email,
    phone,
    service: 'General Inquiry',
    message,
    source
  });
};