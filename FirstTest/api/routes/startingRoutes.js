module.exports = function(app) {
    var testingController = require('../controllers/startingController');
  
    // test Routes
    app.route('/tests')
      .get(testingController.list_all_tests)
      .post(testingController.create_a_test);

    app.route('/tests/:testId')
    .get(testingController.read_a_test)
    .put(testingController.update_a_test)
    .delete(testingController.delete_a_test);
  };
  //testing someting