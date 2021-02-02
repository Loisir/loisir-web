/* Svg avatar background size */
export const AVATAR_SVG_SIZE = 128;

/**
 * Creates an SVG with a avatar icon over a color background
 * based on a hash string.
 * 
 * @param {string} color Background color of the svg avatar
 * @returns {string} Svg string source
 */
export function generateAvatarSvg(color: string): string {
  // TODO: needs major fix on avatar image
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"',
    ` style="isolation:isolate" viewBox="0 0 ${AVATAR_SVG_SIZE} ${AVATAR_SVG_SIZE}">`,
    `<path d="M0 0h${AVATAR_SVG_SIZE}v${AVATAR_SVG_SIZE}H0V0z" fill="${color}" />`,
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24pt" height="24pt" viewBox="0 0 24 24" version="1.1">`,
    `<g id="surface1">`,
    `<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 12 12.03125 C 5.675781 12.03125 0.53125 17.175781 0.53125 23.5 C 0.53125 23.777344 0.753906 24 1.027344 24 C 1.304688 24 1.527344 23.777344 1.527344 23.5 C 1.527344 17.726562 6.226562 13.027344 12 13.027344 C 17.773438 13.027344 22.472656 17.726562 22.472656 23.5 C 22.472656 23.777344 22.695312 24 22.972656 24 C 23.246094 24 23.46875 23.777344 23.46875 23.5 C 23.46875 17.175781 18.324219 12.03125 12 12.03125 Z M 12 12.03125 "/>`,
    `<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 12 0 C 8.976562 0 6.515625 2.460938 6.515625 5.484375 C 6.515625 8.511719 8.976562 10.972656 12 10.972656 C 15.023438 10.972656 17.484375 8.511719 17.484375 5.484375 C 17.484375 2.460938 15.023438 0 12 0 Z M 12 9.972656 C 9.523438 9.972656 7.511719 7.960938 7.511719 5.484375 C 7.511719 3.011719 9.523438 0.996094 12 0.996094 C 14.472656 0.996094 16.488281 3.011719 16.488281 5.484375 C 16.488281 7.960938 14.472656 9.972656 12 9.972656 Z M 12 9.972656 "/>`,
    `</g>`,
    `</svg>`,
    `</svg>`
  ].join('');
};