'use strict';

var topLeft = ['display: block; ', 'padding: 1rem 2rem;', 'position: fixed;', 'font-size: 0.8em;', 'font-family: SF Mono, Menlo, Monaco, sans-serif;', 'z-index: 9999;', 'right: 1rem;', 'top: 1rem;', 'color: rgb(74, 74, 74);', 'background-color: transparent;', 'color: #7ED321;'];

var bottomLeft = ['display: block; ', 'padding: 1rem 2rem;', 'position: fixed;', 'font-size: 0.8em;', 'z-index: 9999;', 'right: 0px;', 'bottom: 0px;', 'color: rgb(74, 74, 74);', 'background-color: #333;', 'color: rgb(229, 229, 229);'];

var bottomRight = ['display: block; ', 'padding: 1rem 2rem;', 'position: fixed;', 'font-size: 0.8em;', 'z-index: 9999;', 'right: 0;', 'bottom: 0;', 'color: #333', 'background-color: transparent;'];

var top = ['display: block; ', 'padding: .5rem 1rem;', 'position: fixed;', 'font-size: 0.75em;', 'z-index: 9999;', 'right: 0;', 'top: 0;', 'color: white;', 'width: 100%;', 'background-color: #1BB954;', 'text-align: center;'];

module.exports = {
  BottomLeft: bottomLeft,
  BottomRight: bottomRight,
  TopLeft: topLeft,
  Top: top
};