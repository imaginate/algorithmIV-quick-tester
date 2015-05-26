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
