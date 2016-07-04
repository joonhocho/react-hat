const appleIconRel = 'apple-touch-icon-precomposed';
const pngType = 'image/png';

export function iconLink(href, size, type = pngType) {
  return {rel: 'icon', type, href, sizes: `${size}x${size}`};
}

export function appleIconLink(href, size) {
  return {rel: appleIconRel, href, sizes: `${size}x${size}`};
}

export function msSquare(content, size) {
  return {name: `msapplication-square${size}x${size}logo`, content};
}

export default function addFavicon({
  ico,
  s16,
  s32,
  s57,
  s60,
  s70,
  s72,
  s76,
  s96,
  s114,
  s120,
  s128,
  s144,
  s150,
  s152,
  s196,
  s310,
  s310x150,
}, meta, link) {
  if (ico) link.push({rel: 'shortcut icon', href: ico});
  // <link rel="icon" sizes="16x16 32x32" href="/favicon.ico?v=2">

  if (s16) link.push(iconLink(s16, 16));
  if (s32) link.push(iconLink(s32, 32));
  if (s96) link.push(iconLink(s96, 96));
  if (s128) link.push(iconLink(s128, 128));
  if (s196) link.push(iconLink(s196, 196));

  if (s57) link.push(appleIconLink(s57, 57));
  if (s60) link.push(appleIconLink(s60, 60));
  if (s72) link.push(appleIconLink(s72, 72));
  if (s76) link.push(appleIconLink(s76, 76));
  if (s114) link.push(appleIconLink(s114, 114));
  if (s120) link.push(appleIconLink(s120, 120));
  if (s144) link.push(appleIconLink(s144, 144));
  if (s152) link.push(appleIconLink(s152, 152));

  // TODO <meta name="msapplication-TileColor" content="#FFFFFF" />
  if (s144) meta.push({name: 'msapplication-TileImage', content: s144});

  if (s70) meta.push(msSquare(s70, 70));
  if (s150) meta.push(msSquare(s150, 150));
  if (s310) meta.push(msSquare(s310, 310));

  if (s310x150) meta.push({name: 'msapplication-wide310x150logo', content: s310x150});
}
