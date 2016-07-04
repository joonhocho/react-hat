import React from 'react';
import Helmet from 'react-helmet';
import {PT} from 'proptypes-parser';
import {forEach, truncate, findIndex} from './util';
import addFavicon from './favicon';

const twitterTitleMaxLen = 70;
const twitterDescMaxLen = 200;

const hasObjectItem = (arr, name, value) =>
  findIndex(arr, ({[name]: val}) => val === value) >= 0;

const toHelmetProps = ({
  base,
  defaultTitle,
  description,
  favicon,
  image,
  link,
  meta,
  og,
  property,
  siteName,
  title,
  titleTemplate,
  twitter,
  url,
  ...rest,
}) => {
  link = link || [];
  meta = meta || [];
  og = og || {};
  twitter = twitter || {};

  // TODO: itemProp

  // siteName
  if (siteName != null) {
    if (defaultTitle == null) defaultTitle = siteName;
    if (titleTemplate === true) titleTemplate = `%s | ${siteName}`;
    if (og.site_name == null) og.site_name = siteName;
    if (!hasObjectItem(meta, 'name', 'application-name')) {
      meta.push({name: 'application-name', content: siteName});
    }
  }


  // favicon
  if (favicon) {
    addFavicon(favicon, meta, link);
  }


  // title
  if (title != null) {
    if (og.title == null) og.title = title;
    if (twitter.title == null) twitter.title = title;
  }
  if (twitter.title) {
    twitter.title = truncate(twitter.title, twitterTitleMaxLen, '...');
  }


  // description
  if (description != null) {
    if (og.description == null) og.description = description;
    if (twitter.description == null) twitter.description = description;
    if (!hasObjectItem(meta, 'name', 'description')) {
      meta.push({name: 'description', content: description});
    }
  }
  if (twitter.description) {
    twitter.description = truncate(twitter.description, twitterDescMaxLen, '...');
  }


  // image
  if (image != null) {
    if (og.image == null) og.image = image;
    if (twitter.image == null) twitter.image = image;
    if (!hasObjectItem(link, 'rel', 'apple-touch-startup-image')) {
      link.push({rel: 'apple-touch-startup-image', href: image});
    }
  }


  // url
  if (url != null) {
    if (og.url == null) og.url = url;
    if (twitter.url == null) twitter.url = url;
    if (!hasObjectItem(link, 'rel', 'canonical')) {
      link.push({rel: 'canonical', href: url});
    }
  }


  // og
  forEach(og, (content, prop) => content != null &&
    meta.push({property: `og:${prop}`, content}));


  // twitter
  forEach(twitter, (content, prop) => content != null &&
    meta.push({property: `twitter:${prop}`, content}));


  // property
  if (property) {
    forEach(property, (props, namespace) =>
      forEach(props, (content, prop) => content != null &&
        meta.push({property: `${namespace}:${prop}`, content})
      )
    );
  }


  // rest
  if (base != null) rest.base = typeof base === 'string' ? {href: base} : base;
  if (defaultTitle != null) rest.defaultTitle = defaultTitle;
  if (link.length) rest.link = link;
  if (meta.length) rest.meta = meta;
  if (title != null) rest.title = title;
  if (titleTemplate != null) rest.titleTemplate = titleTemplate;

  /**
   * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
   * @param {String} title: "Title"
   * @param {String} defaultTitle: "Default Title"
   * @param {String} titleTemplate: "MySite.com - %s"
   * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
   * @param {Array} meta: [{"name": "description", "content": "Test description"}]
   * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
   * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
   * @param {Array} style: [{"type": "text/css", "cssText": "div{ display: block; color: blue; }"}]
   * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
   */
  return rest;
};


const Hat = (props) => <Helmet {...toHelmetProps(props)} />;

Hat.propTypes = PT`{
  base: String | {
    target: String
    href: String
  }
  defaultTitle: String
  description: String
  favicon: Object
  image: String
  link: [{
    rel: String
    href: String
  }!]
  meta: [{
    name: String
    content: String
  }!]
  og: Object
  property: Object
  siteName: String
  title: String
  titleTemplate: String
  twitter: Object
  url: String
}`;


export {
  toHelmetProps,
  Hat,
};

export default Hat;
