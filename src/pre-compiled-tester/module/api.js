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
        recordError( error.toString() );
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
