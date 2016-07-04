import {describe, it} from 'mocha';
import {expect} from 'chai';
import {
  toHelmetProps,
  Hat,
} from '../lib';


describe('toHelmetProps', () => {
  it('adds og and twitter props', () => {
    const props = toHelmetProps({
      base: 'http://example.com',
      description: 'description text',
      favicon: {
        ico: '/favicon.ico',
        s16: '/favicon-16.png',
        s70: '/favicon-70.png',
        s144: '/favicon-144.png',
      },
      image: '/image.jpg',
      link: [
        {rel: 'link rel', href: 'link href'},
        {rel: 'canonical', href: '/canonical'},
      ],
      meta: [{name: 'meta name', content: 'meta content'}],
      og: {
        k1: 'v1',
      },
      property: {
        ns: {
          k2: 'v2',
        },
      },
      siteName: 'site name',
      title: 'page title',
      twitter: {
        k3: 'v3',
      },
      url: '/page.url',
    });

    expect(props).to.eql({
      base: {href: 'http://example.com'},
      defaultTitle: 'site name',
      link: [
        {rel: 'link rel', href: 'link href'},
        {rel: 'canonical', href: '/canonical'},
        {rel: 'shortcut icon', href: '/favicon.ico'},
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-16.png',
          sizes: '16x16',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/favicon-144.png',
          sizes: '144x144',
        },
        {rel: 'apple-touch-startup-image', href: '/image.jpg'},
      ],
      meta: [
        {name: 'meta name', content: 'meta content'},
        {name: 'application-name', content: 'site name'},
        {name: 'msapplication-TileImage', content: '/favicon-144.png'},
        {name: 'msapplication-square70x70logo', content: '/favicon-70.png'},
        {name: 'description', content: 'description text'},
        {property: 'og:k1', content: 'v1'},
        {property: 'og:site_name', content: 'site name'},
        {property: 'og:title', content: 'page title'},
        {property: 'og:description', content: 'description text'},
        {property: 'og:image', content: '/image.jpg'},
        {property: 'og:url', content: '/page.url'},
        {property: 'twitter:k3', content: 'v3'},
        {property: 'twitter:title', content: 'page title'},
        {property: 'twitter:description', content: 'description text'},
        {property: 'twitter:image', content: '/image.jpg'},
        {property: 'twitter:url', content: '/page.url'},
        {property: 'ns:k2', content: 'v2'},
      ],
      title: 'page title',
    });
  });
});
