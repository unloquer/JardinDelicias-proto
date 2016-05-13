/*
 * jquery-html
 * https://github.com/andrea/jquery-html
 *
 * Copyright (c) 2013 Andrea Amerigo Aristodemo Gariboldi
 * Licensed under the MIT license.
 */

var jsdom= require('../node_modules/jquery-loader/node_modules/jsdom'),
    jquery= require('jquery-loader');

exports.source= function(window) 
{
    var doc= window.document,
    // The non-standard window.document.outerHTML also exists,
    // but currently does not preserve source code structure as well

    // The following two operations are non-standard
    retval= doc.doctype.toString()+doc.innerHTML;
    return retval;
};

exports.create= function(/* source, cb(window,$,free) */) 
{
    var source, cb;

    if (typeof arguments[0]==='function')
    {
       source= "<!DOCTYPE html>\n<html><body></body></html>";
       cb= arguments[0];
    }
    else
    {
       source= arguments[0];
       cb= arguments[1];
    }

    jsdom.env({ html: source, done: function(errors, window) 
    {
      if (errors) 
        throw new Error("There were errors: "+errors);
      else  
        cb(window,jquery.create(window),function ()
        {
           setTimeout(function ()
           {
                  window.close();
           },1000); //@FIXME: hack to avoid jsdom seg fault
        });
    } });
};
