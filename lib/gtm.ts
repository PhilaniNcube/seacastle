/**
 * Google Tag Manager event tracking utilities
 */

type GTMEvent = {
  event: string;
  [key: string]: unknown;
};

/**
 * Send a custom event to Google Tag Manager
 */
export function sendGTMEvent(eventData: GTMEvent): void {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
}

/**
 * Track booking widget interactions
 */
export function trackCheckAvailability(params: {
  roomId?: string;
  roomName?: string;
  startDate: string;
  endDate: string;
}) {
  sendGTMEvent({
    event: 'check_availability',
    room_id: params.roomId || 'general',
    room_name: params.roomName || 'All Rooms',
    check_in_date: params.startDate,
    check_out_date: params.endDate,
    event_category: 'booking',
    event_label: 'Check Availability Clicked',
  });
}

/**
 * Track direct booking button clicks
 */
export function trackBookNow(params: {
  roomId?: string;
  roomName?: string;
  location: string;
}) {
  sendGTMEvent({
    event: 'book_now',
    room_id: params.roomId || 'general',
    room_name: params.roomName || 'All Rooms',
    location: params.location,
    event_category: 'booking',
    event_label: 'Book Now Button Clicked',
  });
}

/**
 * Track room page views
 */
export function trackRoomView(params: {
  roomId?: string;
  roomName: string;
  roomSlug: string;
}) {
  sendGTMEvent({
    event: 'view_room',
    room_id: params.roomId || '',
    room_name: params.roomName,
    room_slug: params.roomSlug,
    event_category: 'engagement',
    event_label: 'Room Page Viewed',
  });
}

/**
 * Track navigation clicks
 */
export function trackNavigation(params: {
  destination: string;
  linkText: string;
}) {
  sendGTMEvent({
    event: 'navigation_click',
    destination: params.destination,
    link_text: params.linkText,
    event_category: 'navigation',
    event_label: 'Navigation Link Clicked',
  });
}

/**
 * Track image gallery interactions
 */
export function trackGalleryInteraction(params: {
  action: 'next' | 'previous' | 'thumbnail_click';
  roomName?: string;
  imageIndex: number;
}) {
  sendGTMEvent({
    event: 'gallery_interaction',
    action: params.action,
    room_name: params.roomName || 'general',
    image_index: params.imageIndex,
    event_category: 'engagement',
    event_label: 'Gallery Interaction',
  });
}

/**
 * Track external link clicks (social media, booking platform)
 */
export function trackExternalLink(params: {
  url: string;
  linkText: string;
  linkType: 'social' | 'booking' | 'other';
}) {
  sendGTMEvent({
    event: 'external_link_click',
    external_url: params.url,
    link_text: params.linkText,
    link_type: params.linkType,
    event_category: 'outbound_link',
    event_label: 'External Link Clicked',
  });
}

/**
 * Track scroll depth on key pages
 */
export function trackScrollDepth(params: {
  page: string;
  depth: number;
}) {
  sendGTMEvent({
    event: 'scroll_depth',
    page: params.page,
    depth_percentage: params.depth,
    event_category: 'engagement',
    event_label: `Scrolled ${params.depth}%`,
  });
}
