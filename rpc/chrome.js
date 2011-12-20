// Google BSD license http://code.google.com/google_bsd_license.html
// Copyright 2011 Google, Inc. johnjbarton@johnjbarton.com

/*global define*/
define([], function () {

  // Restricted function from chrome.* API made available to Web apps
  // http://code.google.com/chrome/extensions/dev/api_index.html
  
  var chrome = {};
  chrome.windows = {
    name: "chrome.windows",  // this will be the target
    api: { // These will be mapped to functions returning promises
      create: function(createData, callback){},
      getAll: function(getInfo, callback){}
    },
    events: {
      onCreated: function(Window){},
      onRemoved: function(windowId){}
    },
    types: {
      Window: {
        id: 'number', 
        focused: 'boolean',
        top: 'number',
        left: 'number',
        width: 'number',
        height: 'number',
        tabs: [/*Tabs*/],
        incognito: 'boolean',
        type: ['normal', 'popup', 'panel', 'app'],
        state: ['normal', 'minimized', 'maximized']
      }
    }
  };

  chrome.tabs = {
    name: "chrome.tabs",
    api: { // These will be mapped to functions returning promises
      create: function(createProperties, callback){},
      remove: function(tabIds, callback){},
      update: function(tabId, updateProperties, callback){}
    },
    events: {
      onCreated: function(Tab) {},
      onRemoved: function(tabId, removeInfo) {}
    },
    types: {
      Tab: {
        id: 'number',
        index: 'number',
        windowId: 'integer',
        highlighted: 'boolean',
        active: 'boolean',
        pinned: 'boolean',
        url: 'string',
        title: 'string',
        favIconUrl: 'string',
        status: ['loading', 'complete'],
        incognito: 'boolean'
      }
    }
  };
  
  return chrome;
});     
     
    