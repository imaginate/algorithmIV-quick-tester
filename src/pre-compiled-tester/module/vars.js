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
