export const basename = "events"
export const type = "event";
export const layout = "layouts/event.vto";
export const templateEngine = "vto,md";
export const description = "Evenementen";

export function url(page) {
  return `/events/${page.data.basename}/`;
}