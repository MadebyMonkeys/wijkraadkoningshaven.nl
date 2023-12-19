export const basename = "nieuws"
export const type = "post";
export const layout = "layouts/post.vto";
export const templateEngine = "vto,md";
export const description = "Nieuws artiekelen";

export function url(page) {
  return `/nieuws/${page.data.basename}/`;
}