var config = require('../test/config.json');
var operation = require('../lib/confirm_reports/confirm_reports.js');

exports.t1 = function(test, callback) {
  operation.confirmReports(config.userId, config.password, [ {
    receiptId : 13067831
  }, {
    receiptId : 13067832
  }, {
    receiptId : 13067833
  }, {
    receiptId : 13067834
  }, {
    receiptId : 13067835
  }, ], function(result) {

    test.ok(result.faultstring === undefined, result.faultstring);

    // Type check
    test.equals(typeof result.confirmed, 'number', "ConfirmReports response 'confirmed' is not a number");

    callback();
  });
};