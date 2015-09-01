/**
 * Module dependencies
 */

import Color from 'ui-kit/utils/color.js';
import * as branding from 'ui-kit/utils/branding.js';

exports = module.exports = branding;

// colors

var color = exports.color;

for (var key in color)
  color[key] = new Color(color[key]);


// Set app's Primary and Accent colors for use with skins
color['primary'] = color['blue'];
color['accent'] = color['yellow'];

export var color = color;
