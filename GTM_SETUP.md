# Google Tag Manager Setup Guide

This project is configured with Google Tag Manager (GTM) using `@next/third-parties/google`.

## Setup Instructions

### 1. Get Your GTM Container ID

1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Create a new container or select an existing one
3. Copy your Container ID (format: `GTM-XXXXXXX`)

### 2. Configure Environment Variable

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Replace the placeholder with your GTM ID:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-YOUR-ID-HERE
   ```

### 3. Events Being Tracked

The following events are automatically sent to GTM:

#### Booking Events
- **`check_availability`** - When users click "Check Availability"
  - Properties: `room_id`, `room_name`, `check_in_date`, `check_out_date`
  
- **`book_now`** - When users click "Book Now" buttons
  - Properties: `room_id`, `room_name`, `location`

#### Engagement Events
- **`view_room`** - When a room detail page is viewed
  - Properties: `room_id`, `room_name`, `room_slug`

- **`gallery_interaction`** - Gallery navigation (next/previous/thumbnail clicks)
  - Properties: `action`, `room_name`, `image_index`

#### Navigation Events
- **`navigation_click`** - Internal navigation clicks
  - Properties: `destination`, `link_text`

- **`external_link_click`** - External link clicks (booking platform, social media)
  - Properties: `external_url`, `link_text`, `link_type`

### 4. Setting Up Tags in GTM

#### Basic Setup

1. **Enable Built-in Variables**:
   - Go to Variables → Configure
   - Enable all Page Variables and Click Variables

2. **Create Triggers** for each event:
   - Trigger Type: Custom Event
   - Event Name: Match the event names above (e.g., `check_availability`)

3. **Create Tags** based on your needs:
   - Google Analytics 4 Event tags
   - Facebook Pixel events
   - Conversion tracking pixels
   - etc.

#### Example: Google Analytics 4 Event Tag

1. Create a new Tag
2. Tag Type: Google Analytics: GA4 Event
3. Configuration Tag: Select your GA4 Configuration tag
4. Event Name: `{{Event}}` (use the dataLayer event name)
5. Event Parameters:
   - Add parameters like `room_id`, `room_name`, etc. from dataLayer
6. Trigger: Custom Event trigger matching the event name

### 5. Testing Your Setup

1. Enable Preview Mode in GTM
2. Visit your website
3. Perform actions (click booking buttons, navigate, view rooms)
4. Verify events appear in GTM Preview panel

### 6. Common GTM Configurations

#### Track Booking Conversions

Create a trigger for `book_now` events and connect to:
- Google Ads conversion tracking
- Facebook conversion pixel
- LinkedIn Insight Tag

#### Track Engagement Metrics

Use `view_room` and `gallery_interaction` events to:
- Measure user engagement
- Create remarketing audiences
- Track popular rooms

#### Ecommerce Tracking

The events include room information that can be mapped to ecommerce data:
- `room_name` → Product Name
- `room_id` → Product ID
- Date parameters → Booking details

### 7. Event Data Reference

All events include these standard properties:
- `event`: Event name
- `event_category`: Category grouping
- `event_label`: Human-readable description

Room-specific parameters:
- `room_id`: RoomRaccoon room identifier
- `room_name`: Display name of the room
- `room_slug`: URL-friendly room identifier
- `location`: Where the event occurred (e.g., `room_detail_page`, `homepage`)

Booking-specific parameters:
- `check_in_date`: Selected check-in date (YYYY-MM-DD)
- `check_out_date`: Selected check-out date (YYYY-MM-DD)

### 8. Data Layer Structure

Events are pushed to `window.dataLayer` in this format:

```javascript
{
  event: 'check_availability',
  room_id: '8931',
  room_name: 'Classic Suite',
  check_in_date: '2026-04-15',
  check_out_date: '2026-04-17',
  event_category: 'booking',
  event_label: 'Check Availability Clicked'
}
```

### 9. Privacy Considerations

- No personally identifiable information (PII) is tracked
- All data is anonymized
- Complies with GDPR requirements
- Consider adding cookie consent banner for EU visitors

### 10. Troubleshooting

**Events not appearing in GTM Preview?**
- Check that GTM ID is correctly set in `.env.local`
- Verify the site is running (`pnpm dev`)
- Clear browser cache and reload
- Check browser console for errors

**Data not flowing to Google Analytics?**
- Ensure GA4 configuration tag is set up in GTM
- Verify triggers are firing
- Check GA4 DebugView for real-time events

### Support

For issues or questions about GTM integration, refer to:
- [GTM Documentation](https://developers.google.com/tag-manager)
- [Next.js Third Parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
