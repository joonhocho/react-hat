# react-hat
[![Build Status](https://travis-ci.org/joonhocho/react-hat.svg?branch=master)](https://travis-ci.org/joonhocho/react-hat)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/react-hat/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/react-hat?branch=master)
[![npm version](https://badge.fury.io/js/react-hat.svg)](https://badge.fury.io/js/react-hat)
[![Dependency Status](https://david-dm.org/joonhocho/react-hat.svg)](https://david-dm.org/joonhocho/react-hat)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

A higher order component for react-helmet that auto fills favicon, og, twitter meta tags for SEO.

Checkout [react-hat](https://github.com/joonhocho/react-hat) for validating string inputs.


### Install
```
npm install --save react-hat
```


### Usage
```javascript
import React from "react";
import Hat from "react-hat";

<div className="application">
  <Hat title="My Title" description="My desc" />
  ...
</div>
```


### Credits
[react-helmet](https://github.com/nfl/react-helmet)


### License
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
