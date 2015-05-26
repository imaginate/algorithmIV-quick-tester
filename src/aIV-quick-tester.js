/** @preserve blank line */

/**
 * -----------------------------------------------------------------------------
 * Algorithm IV Quick Tester (0.0.1)
 * -----------------------------------------------------------------------------
 * @file A JavaScript module used to run quick unit tests with minimal overhead.
 * @module aIVTester
 * @version 0.0.1
 * @author Adam Smith [adamsmith@youlum.com]{@link mailto:adamsmith@youlum.com}
 * @copyright 2015 Adam A Smith [github.com/imaginate]{@link https://github.com/imaginate}
 * @license The Apache License [algorithmiv.com/docs/license]{@link http://algorithmiv.com/docs/license}
 * @desc Details about the used annotations:
 * - [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 * - [JSDoc3]{@link http://usejsdoc.org/}
 */

////////////////////////////////////////////////////////////////////////////////
// The Dependencies
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * Algorithm IV JavaScript Shortcuts (dependencies/algorithmIV-utils.min.js)
 * -------------------------------------------------------------------------- */

/* Algorithm IV JavaScript Shortcuts (v1.0.5) (learn@algorithmiv.com)
 * Author: Adam Smith (adamsmith@youlum.com)
 * Copyright (c) 2015 Adam A Smith (github.com/imaginate)
 * The Apache License (algorithmiv.com/docs/license) */
;(function(u,n){u.aIV=u.aIV||{};aIV.utils=aIV.utils||n})(window,function(u,n,y){var e={},f={checkArgsErrorMsg:"A function call had an invalid parameter data type.",getElemByClassRoot:n,getElemsByClassRoot:n,getElemByTagRoot:n,getElemsByTagRoot:n,types:{checkArgsErrorMsg:"string|function",getElemByClassRoot:"!(Document|Element)",getElemsByClassRoot:"!(Document|Element)",getElemByTagRoot:"!(Document|Element)",getElemsByTagRoot:"!(Document|Element)"}};Object.freeze(f);Object.freeze(f.types);var m={checkArgsErrorMsg:f.checkArgsErrorMsg,
getElemByClassRoot:f.getElemByClassRoot,getElemsByClassRoot:f.getElemsByClassRoot,getElemByTagRoot:f.getElemByTagRoot,getElemsByTagRoot:f.getElemsByTagRoot};e.checkType=function(){var b=/^string$|^number$|^boolean$|^function$|^undefined$/,a=/^string$|^number$|^boolean$|^object$|^function$|^undefined$/,c=/^elem$|^element$|^document$/,e=/^array$|^strings$|^numbers$|^booleans$|^objects$|^arrays$|^elems$|^elements$|^functions$/,z=/^stringmap$|^numbermap$|^booleanmap$|^objectmap$|^arraymap$|^functionmap$|^elemmap$|^elementmap$/,
k=/\!/,m=/\?/,l=/\=/,n=/\*/,f=function(a,b){return null===a?!1:typeof a===b},u=function(a,b){return a&&f(a,"object")&&a.nodeType?a.nodeType==={elem:1,element:1,document:9}[b]:!1};return function(h,d,r){var p,v,q,g;if(!f(d,"string"))throw new TypeError("An aIV.utils.checkType call received an invalid (a non-string) type parameter.");if(p=n.test(d)){if(1<d.length)throw h="An aIV.utils.checkType call received an invalid type string. When using an asterisk, '*', no other values should be given as the asterisk guarantees the check will ",
h+="pass.",Error(h);return!0}if(p=h===y&&l.test(d))g=!0;else{g=d;var t;t=(q=null===h)?k.test(g):!0;q&&m.test(g)&&(t=!t);g=t}q=p||!g||k.test(d)?!1:m.test(d);p=p||q&&g;if(!r||!p)if(d=d.toLowerCase(),d=d.replace(w.exceptLowerAlphaAndPipe,""),v=d.split("|"),!r)for(d=v,t=!0,r=d.length;t&&r--;)if(t=w.allDataTypes.test(d[r]),!t)throw h=void 0,h="An aIV.utils.checkType call received an invalid type ",h+="string. The value '"+d[r]+"' was incorrect. ",h+="Check aIV.utils.checkType's documentation for a ",h+=
"list of acceptable type strings.",Error(h);if(!p){if(null===h){h=v;p=q;d=!1;for(v=h.length;!d&&v--;)g||(p=!b.test(h[v])),d=p;h=d}else{p=v;g=!1;for(v=p.length;!g&&v--;){d=p[v];if("any"===d){g=!0;break}if(a.test(d))g=f(h,d);else if(c.test(d))g=u(h,d);else if(e.test(d))if(g=h,t=q=r=void 0,Array.isArray(g))if("array"===d)g=!0;else{d=d.slice(0,-1);t="array"===d?Array.isArray:c.test(d)?u:f;q=!0;for(r=g.length;q&&r--;)q=t(g[r],d);g=q}else g=!1;else if(z.test(d))if(g=h,t=q=r=void 0,f(g,"object")){d=d.slice(0,
-3);t="array"===d?Array.isArray:c.test(d)?u:f;q=!0;for(r in g)if(g.hasOwnProperty(r)&&(q=t(g[r],d),!q))break;g=q}else g=!1}h=g}p=h}return p}}();e.isValidTypeString=function(b){var a,c;if("string"!==typeof b)throw new TypeError("An aIV.utils.isValidTypeString call received an invalid (a non-string) typeString parameter.");b=b.toLowerCase();b=b.replace(w.exceptLowerAlphaAndPipe,"");c=b.split("|");a=!0;for(b=c.length;a&&b--;)a=w.allDataTypes.test(c[b]);return a};e.checkArgs=function(){var b=e.checkType,
a=e.isValidTypeString;return function(){var c,e,f,k,n,l,u;e=arguments.length;if(2>e||e%2)throw Error("An aIV.utils.checkArgs call was missing parameters.");n=Array.prototype.slice.call(arguments,0);l=!0;for(c=-1;++c<e;)if(c%2){k=n[c];u=(u=b(k,"string",!0))&&a(k);if(!u)throw l=void 0,l="An aIV.utils.checkArgs call received an invalid type ",l+="string. The value '"+k+"' was incorrect. ",l+="Check aIV.utils.checkType's documentation for a ",l+="list of acceptable type strings.",Error(l);l=l&&b(f,k,
!0)}else f=n[c];if(!l&&(k=m.checkArgsErrorMsg,(k=b(k,"string")?k:k())&&b(k,"string")))throw new TypeError(k);return l}}();e.getTypeOf=function(){var b=e.checkType;return function(a){var c;c=typeof a;"object"===c&&b(a,"document|element|array")&&(c=null===a?"null":Array.isArray(a)?"array":1===a.nodeType?"element":"document");return c}}();e.freezeObj=function(){var b=function(a){var c;Object.freeze(a);for(c in a)a.hasOwnProperty(c)&&a[c]&&("object"===typeof a[c]||"function"===typeof a[c])&&b(a[c])};
return function(a,c){if(!a||"object"!==typeof a&&"function"!==typeof a)throw new TypeError("An aIV.utils.freezeObj call received an invalid obj parameter.");"boolean"!==typeof c&&(c=!1);c?b(a):Object.freeze(a);return a}}();e.hasOwnProp=function(b,a){var c;if(!b||"object"!==typeof b&&"function"!==typeof b)throw new TypeError("An aIV.utils.hasOwnProp call received an invalid obj parameter.");if(!a||"string"!==typeof a&&"number"!==typeof a)throw c="An aIV.utils.hasOwnProp call received an invalid prop parameter.",
new TypeError(c);return b.hasOwnProperty(a)};var w={allDataTypes:/^any$|^string$|^number$|^boolean$|^object$|^array$|^function$|^elem$|^element$|^undefined$|^null$|^document$|^strings$|^numbers$|^booleans$|^objects$|^arrays$|^elems$|^elements$|^functions$|^stringmap$|^numbermap$|^booleanmap$|^objectmap$|^arraymap$|^functionmap$|^elemmap$|^elementmap$/,exceptLowerAlphaAndPipe:/[^a-z\|]/g};e.getElemById=function(b){if(!b||"string"!==typeof b)throw new TypeError("An aIV.utils.getElemById call received an invalid id parameter (should be a string).");
b=n.getElementById(b);if(!b)throw b="An aIV.utils.getElemById call received an invalid id parameter (i.e. no element with the id was found).",new RangeError(b);return b};e.getElemByClass=function(b,a,c){if(!b||"string"!==typeof b)throw new TypeError("An aIV.utils.getElemByClass call received an invalid class name parameter.");a="number"!==typeof a||-1>a?0:Math.floor(a);c&&"object"===typeof c&&(c instanceof Element||c instanceof Document)||(c=m.getElemByClassRoot);b=c.getElementsByClassName?c.getElementsByClassName(b):
x.getElementsByClassNameAlt(b,c);if(0>a||a>=b.length)a=b.length-1;a=b[a];if(!a)throw a="An aIV.utils.getElemByClass call received an invalid class name parameter ",a+="(i.e. no element with the class name was found).",new RangeError(a);return a};e.getElemsByClass=function(b,a){if(!b||"string"!==typeof b)throw new TypeError("An aIV.utils.getElemsByClass call received an invalid class name parameter.");a&&"object"===typeof a&&(a instanceof Element||a instanceof Document)||(a=m.getElemsByClassRoot);
return a.getElementsByClassName?a.getElementsByClassName(b):x.getElementsByClassNameAlt(b,a)};e.getElemByTag=function(b,a,c){if(!b||"string"!==typeof b)throw new TypeError("An aIV.utils.getElemByTag call received an invalid tag name parameter.");a="number"!==typeof a||-1>a?0:Math.floor(a);c&&"object"===typeof c&&(c instanceof Element||c instanceof Document)||(c=m.getElemByTagRoot);b=c.getElementsByTagName(b);if(0>a||a>=b.length)a=b.length-1;a=b[a];if(!a)throw a="An aIV.utils.getElemByTag call received an invalid tag name parameter ",
a+="(i.e. no element with the tag name was found).",new RangeError(a);return a};e.getElemsByTag=function(b,a){if(!b||"string"!==typeof b)throw new TypeError("An aIV.utils.getElemsByTag call received an invalid tag name parameter.");a&&"object"===typeof a&&(a instanceof Element||a instanceof Document)||(a=m.getElemsByTagRoot);return a.getElementsByTagName(b)};e.makeElem=function(b){var a;b&&"string"===typeof b?(a=b,b=null):b&&"object"===typeof b?b.hasOwnProperty("tag")&&b.tag&&"string"===typeof b.tag?
a=b.tag:b.hasOwnProperty("tagName")&&b.tagName&&"string"===typeof b.tagName&&(a=b.tagName):b=null;a||(a="div");a=n.createElement(a);b&&(b.hasOwnProperty("text")&&b.text&&"string"===typeof b.text&&(a.textContent?a.textContent=b.text:a.innerText=b.text),b.hasOwnProperty("html")&&b.html&&"string"===typeof b.html&&(a.innerHTML=b.html),b.hasOwnProperty("id")&&b.id&&"string"===typeof b.id&&(a.id=b.id),b.hasOwnProperty("className")&&b.className&&"string"===typeof b.className&&(a.className=b.className));
return a};e.setElemText=function(b,a){var c;if(!(b&&"object"===typeof b&&b instanceof Element))throw new TypeError("An aIV.utils.setElemText call received an invalid elem parameter (should be a DOM Element).");if(!a||"string"!==typeof a)throw c="An aIV.utils.setElemText call received an invalid text parameter (should be a string).",new TypeError(c);b.textContent?b.textContent=a:b.innerText=a;return b};e.addElemText=function(b,a){var c;if(!(b&&"object"===typeof b&&b instanceof Element))throw new TypeError("An aIV.utils.addElemText call received an invalid elem parameter (should be a DOM Element).");
if(!a||"string"!==typeof a)throw c="An aIV.utils.addElemText call received an invalid text parameter (should be a string).",new TypeError(c);b.textContent?b.textContent+=a:b.innerText+=a;return b};var x={getElementsByClassNameAlt:function(b,a){var c,e,f,k,m,l;if(a.querySelectorAll)k=a.querySelectorAll("."+b);else if(n.evaluate)for(k=[],f='"'+(" "+b+" ")+'")]',c=n.evaluate(f,a,null,0,null),f=c.iterateNext();f;)k.push(f),f=c.iterateNext();else for(l=new RegExp("(^|s)"+b+"(s|$)"),m=a.getElementsByTagName("*"),
k=[],e=m.length,c=-1;++c<e;)f=m[c],l.test(f.className)&&k.push(f);return k}};e.freezeObj(x,!0);e.set=function(){var b=e.checkType;return function(a){var c;if(!a||"object"!==typeof a)throw new TypeError("An aIV.utils.set call received an invalid settings parameter (should be an object).");for(c in m)if(m.hasOwnProperty(c)&&a.hasOwnProperty(c))if(b(a[c],f.types[c]))m[c]=a[c];else throw a=void 0,a="An aIV.utils.set call received an invalid "+c,a+=" settings parameter (should be a "+f.types[c],a+=").",
new TypeError(a);return!0}}();e.reset=function(){var b,a,c;b=(b=arguments.length)?1<b?Array.prototype.slice.call(arguments,0):Array.isArray(arguments[0])?arguments[0]:[arguments[0]]:Object.keys(m);if(!e.checkType(b,"!strings"))throw new TypeError("An aIV.utils.reset call received an invalid setting parameter (should be a string or an array of strings).");for(c=b.length;c--;)a=b[c],m.hasOwnProperty(a)&&(m[a]=f[a]);return!0};e.freezeObj(e,!0);return e}(window,document));

////////////////////////////////////////////////////////////////////////////////
// The Public API
////////////////////////////////////////////////////////////////////////////////

(function setupTheTesterPublicAPI(testerModuleAPI, undefined) {
  "use strict";

/* -----------------------------------------------------------------------------
 * The Public API (public-api.js)
 * -------------------------------------------------------------------------- */

  /**
   * ---------------------------------------------------
   * Global Variable (aIV)
   * ---------------------------------------------------
   * @desc Holds the public API for aIV's apps, tools, and libraries.
   * @struct
   * @global
   */
  window.aIV = window.aIV || {};

  /**
   * ---------------------------------------------------
   * Global Property (aIV.tester)
   * ---------------------------------------------------
   * @desc Holds the Quick Tester API.
   * @struct
   * @global
   */
  aIV.tester = {};

  /**
   * ---------------------------------------------------
   * Global Method (aIV.tester.runTests)
   * ---------------------------------------------------
   * @desc Runs the tests given to aIV.tester.
   * @param {number=} startIndex - The index of the test in the tests array to
   *   start with (runs the test and skips all tests before it).
   * @param {number=} endIndex - The index of the test in the tests array to end
   *   with (runs the test and skips all tests after it).
   * @global
   */
  aIV.tester.runTests = testerModuleAPI.runTests;

  /**
   * ---------------------------------------------------
   * Global Method (aIV.tester.addTest)
   * ---------------------------------------------------
   * @desc Adds a new test to the aIV.tester.tests array.
   * @param {string} title - The title for the new test.
   * @param {function} testFunc - The actual test.
   * @global
   */
  aIV.tester.addTest = testerModuleAPI.addTest;

})(

////////////////////////////////////////////////////////////////////////////////
// The Quick Tester Module
////////////////////////////////////////////////////////////////////////////////

(function setupTheTesterModule(undefined) {
  "use strict"; 

/* -----------------------------------------------------------------------------
 * The Tests Module API (module/api.js)
 * -------------------------------------------------------------------------- */

  /**
   * -----------------------------------------------------
   * Public Variable (testerModuleAPI)
   * -----------------------------------------------------
   * @desc Holds the module's public properties and methods.
   * @type {!Object<string, function>}
   * @struct
   */
  var testerModuleAPI = {};

  /**
   * -----------------------------------------------------
   * Public Method (testerModuleAPI.runTests)
   * -----------------------------------------------------
   * @desc Runs the tests given to aIV.tester.
   * @param {number=} startIndex - The index of the test in the tests array to
   *   start with (runs the test and skips all tests before it).
   * @param {number=} endIndex - The index of the test in the tests array to end
   *   with (runs the test and skips all tests after it).
   */
  testerModuleAPI.runTests = function(startIndex, endIndex) {

    /** @type {string} */
    var errorMsg;
    /** @type {number} */
    var len;

    if (testsBeenInitialized) {
      throw new Error('aIV.tester.runTests was called a second time.');
    }

    testsBeenInitialized = true;

    clearUI();

    len = tests.length;

    if (!checkType(startIndex, 'number') || startIndex < 0) {
      startIndex = 0;
    }
    if (!checkType(endIndex, 'number') || endIndex < 0) {
      endIndex = len - 1;
    }

    if (endIndex >= len) {
      errorMsg = 'aIV.tester.runTests was called with an invalid endIndex.';
      throw new Error(errorMsg);
    }
    if (startIndex >= len || startIndex > endIndex) {
      errorMsg = 'aIV.tester.runTests was called with an invalid startIndex.';
      throw new Error(errorMsg);
    }

    len = endIndex + 1;
    testIndex = startIndex - 1;
    while (++testIndex < len) {
      try {
        tests[ testIndex ]();
      }
      catch(error) {
        errorMsg = error.name + ': ' + error.message;
        recordError(errorMsg);
        errorMsg += '; STACK TRACE: %O';
        console.error(errorMsg, error.stack);
      }
    }

    showResults(startIndex, endIndex);
  };

  /**
   * -----------------------------------------------------
   * Public Method (testerModuleAPI.addTest)
   * -----------------------------------------------------
   * @desc Adds a new test to the aIV.tester.tests array.
   * @param {string} title - The title for the new test.
   * @param {function} testFunc - The actual test.
   */
  testerModuleAPI.addTest = function(title, testFunc) {

    /** @type {string} */
    var errorMsg;

    if ( !checkType(title, 'string') ) {
      errorMsg = 'aIV.tester.addTest was called with an invalid title.';
      throw new TypeError(errorMsg);
    }

    if ( !checkType(testFunc, 'function') ) {
      errorMsg = 'aIV.tester.addTest was called with an invalid testFunc.';
      throw new TypeError(errorMsg);
    }

    tests.push(testFunc);
    results.push({
      title : title,
      errors: []
    });
  };

/* -----------------------------------------------------------------------------
 * The Module Helpers (module/helpers.js)
 * -------------------------------------------------------------------------- */

  /**
   * ---------------------------------------------
   * Public Method (getElemById)
   * ---------------------------------------------
   * @desc A shortcut for the native DOM method - document.getElementById.
   * @param {string} id - The id of the element to select.
   * @return {!HTMLElement} The DOM element with the given id.
   */
  var getElemById = aIV.utils.getElemById;

  /**
   * ---------------------------------------------------
   * Public Method (setElemText)
   * ---------------------------------------------------
   * @desc A shortcut that sets the native DOM property - Element.textContent
   *   or Element.innerText.
   * @param {!Element} elem - The DOM element.
   * @param {string} text - The text to set the DOM element's textContent or
   *   innerText to.
   * @return {!Element} The updated DOM element.
   */
  var setElemText = aIV.utils.setElemText;

  /**
   * ---------------------------------------------------
   * Public Method (freezeObj)
   * ---------------------------------------------------
   * @desc A shortcut for the Object.freeze method with a deep freeze option.
   * @param {!(Object|function)} obj - The object to freeze.
   * @param {boolean=} deep - Deep freeze the object. The default is false.
   * @return {!(Object|function)} The frozen object.
   */
  var freezeObj = aIV.utils.freezeObj;

  /**
   * ---------------------------------------------------
   * Public Method (hasOwnProp)
   * ---------------------------------------------------
   * @desc A shortcut for the Object.prototype.hasOwnProperty method.
   * @param {!object|function} obj - The object to check.
   * @param {string} prop - The property to check.
   * @return {boolean} The result of the check.
   */
  var hasOwnProp = aIV.utils.hasOwnProp;

  /**
   * ---------------------------------------------------
   * Public Method (checkType)
   * ---------------------------------------------------
   * @desc Checks a value's data type against the given optional types.
   * @param {*} val - The value to be evaluated.
   * @param {string} type - A string of the data types to evaluate the value
   *   against. For a complete list of acceptable strings
   *   [see aIV.utils.checkType]{@link https://github.com/imaginate/algorithmIV-javascript-shortcuts/blob/master/src/pre-compiled-parts/methods/checkType.js}.
   * @param {boolean=} noTypeValCheck - If true skips the data type string checks.
   *   The default is false. Use to avoid duplicating checks.
   * @return {boolean} The evaluation result.
   */
  var checkType = aIV.utils.checkType;

  /**
   * ---------------------------------------------------
   * Public Method (isValidTypeString)
   * ---------------------------------------------------
   * @desc Evaluates whether a string is a valid data type string.
   * @param {string} type - The string to evaluate.
   * @return {boolean} The evaluation result.
   */
  var isValidTypeString = aIV.utils.isValidTypeString;

/* -----------------------------------------------------------------------------
 * The Module Variables (module/vars.js)
 * -------------------------------------------------------------------------- */

  /**
   * -----------------------------------------------------
   * Public Variable (testsBeenInitialized)
   * -----------------------------------------------------
   * @desc Indicates whether the tests have been ran.
   * @type {boolean}
   */
  var testsBeenInitialized = false;

  /**
   * -----------------------------------------------------
   * Public Variable (testIndex)
   * -----------------------------------------------------
   * @desc The current index of the tests array being processed.
   * @type {number}
   */
  var testIndex = 0;

  /**
   * -----------------------------------------------------
   * Public Variable (tests)
   * -----------------------------------------------------
   * @desc The user provided tests.
   * @type {!Array<function>}
   */
  var tests = [];

  /**
   * -----------------------------------------------------
   * Public Variable (results)
   * -----------------------------------------------------
   * @desc The test results.
   * @type {!Array<!{
   *   title : string,
   *   errors: !Array<string>
   * }>}
   */
  var results = [];

  /**
   * -----------------------------------------------------
   * Public Variable (elems)
   * -----------------------------------------------------
   * @desc The DOM Elements for the tester's UI.
   * @type {!Object<string, !Element>}
   */
  var elems = {
    msg  : getElemById('msg'),
    ui   : getElemById('ui'),
    start: getElemById('start')
  };

/* -----------------------------------------------------------------------------
 * The Module Methods (module/methods.js)
 * -------------------------------------------------------------------------- */

  /**
   * ---------------------------------------------
   * Public Method (clearUI)
   * ---------------------------------------------
   * @desc Clears the current UI.
   * @type {function}
   */
  function clearUI() {

    elems.ui.style.opacity = '0';

    setTimeout(function() {
      elems.msg.innerHTML = 'Tests are running ... ';
      elems.start.style.display = 'none';
      elems.ui.style.opacity = '1';
    }, 500);
  }

  /**
   * -----------------------------------------------
   * Public Method (recordError)
   * -----------------------------------------------
   * @desc Records an error for a test.
   * @param {string} errorMsg - The error message.
   */
  function recordError(errorMsg) {
    results[ testIndex ].errors.push(errorMsg);
  }

  /**
   * -----------------------------------------------
   * Public Method (showResults)
   * -----------------------------------------------
   * @desc Shows all of the results for the tests.
   * @param {number=} startIndex - The index of the test in the results
   *   array to start with (skips all tests before it).
   * @param {number=} endIndex - The index of the test in the results array
   *   to end with (skips all tests after it).
   */
  function showResults(startIndex, endIndex) {

    /** @type {string} */
    var result;
    /** @type {boolean} */
    var pass;
    /** @type {boolean} */
    var fail;
    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    // Show the results
    result = '<h2>Results</h2>';
    result += '<ol id="results">';

    fail = false;
    len = endIndex + 1;
    i = startIndex - 1;
    while (++i < len) {
      pass = !!results[i].errors.length;
      result += getResultHtmlString(results[i].title, pass);
      if (pass) {
        fail = true;
      }
    }

    result += '</ol>';

    // Show the errors
    if (fail) {
      result += '<h2>Errors</h2>';
      result += '<ol id="errors">';

      i = startIndex - 1;
      while (++i < len) {
        pass = !!results[i].errors.length;
        if (pass) {
          result += getErrorHtmlString(results[i].title, results[i].errors);
        }
      }

      result += '</ol>';
    }

    // Update the UI with the results
    elems.ui.style.opacity = '0';

    setTimeout(function() {
      elems.ui.innerHTML = result;
      elems.ui.style.opacity = '1';
    }, 500);
  }

  /**
   * -----------------------------------------------
   * Public Method (getResultHtmlString)
   * -----------------------------------------------
   * @desc Gets the result string for the test.
   * @param {string} title - The test's title.
   * @param {boolean} hasError - Indicates if the test has an error.
   * @return {string} The result string for the test.
   */
  function getResultHtmlString(title, hasError) {

    /** @type {string} */
    var classname;
    /** @type {string} */
    var result;

    classname = (hasError) ? 'red' : 'green';
    result = (hasError) ? 'Fail' : 'Pass';

    result = '<li class="' + classname + '">' +
              title + ' =&gt; ' + result + '</li>';

    return result;
  }

  /**
   * -----------------------------------------------
   * Public Method (getErrorHtmlString)
   * -----------------------------------------------
   * @desc Gets the error string for the test.
   * @param {string} title - The test's title.
   * @param {!Array<string>} errors - The test's errors.
   * @return {string} The error string for the test.
   */
  function getErrorHtmlString(title, errors) {

    /** @type {string} */
    var result;
    /** @type {number} */
    var len;
    /** @type {number} */
    var i;

    result = '<li>' + title + '<ol id="subErrors">';

    len = errors.length;
    i = -1;
    while (++i < len) {
      result += '<li>' + errors[i] + '</li>';
    }

    result += '</ol></li>';

    return result;
  }

////////////////////////////////////////////////////////////////////////////////
// The Quick Tester Module End
////////////////////////////////////////////////////////////////////////////////

  return testerModuleAPI;

})());