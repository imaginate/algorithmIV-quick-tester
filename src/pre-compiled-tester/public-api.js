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
