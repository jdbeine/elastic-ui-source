let Connection = require('tedious').Connection;
let TYPES = require('tedious').TYPES;
let Request = require('tedious').Request;
let devConfig = require('./config/devConfig')
let async = require('async');


exports.stockTicker = function (req, res) {
    let responseData = [];
    let rawData;
    async.auto({
        getDataFromDb: function (cb) {
            let conn = new Connection(devConfig.databaseConfig);
            conn.on('connect', function (err) {
                if (err) {
                    cb(err)
                } else {
                    console.log('=====================DB CONNECTED')

                    let request = new Request(
                        "spStockTicker",
                        function (err, rowCount, row) {
                            cb(null)
                        }
                    );

                    request.on('row', function (columns) {
                        let prepObj = {};
                        for (i = 0; i < columns.length; i++) {
                            prepObj[columns[i].metadata.colName] = columns[i].value;
                        };
                        responseData.push(prepObj);
                    });
                    conn.callProcedure(request);
                }
            });
        }
    }, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(responseData);
        }
    })
}

exports.calculateReturn = function (req, res) {
    let responseData = [];
    async.auto({
        getDataFromDb: function (cb) {
            let conn = new Connection(devConfig.databaseConfig);
            conn.on('connect', function (err) {
                if (err) {
                    cb(err)
                }
                else {
                    console.log('=====================DB CONNECTED')
                    let request = new Request(
                        "spCalculateReturn",
                        function (err, rowCount, row) {
                            cb(null)
                        }
                    );
                    console.log('req',req.body)
                    request.addParameter('pmtTicker', TYPES.VarChar, req.body.pmtTicker);
                    request.addParameter('pmtStartCapital', TYPES.Int, req.body.pmtStartCapital);
                    request.addParameter('pmtWithDividendReinvestment', TYPES.Bit, req.body.pmtWithDividendReinvestment)

                    request.on('row', function (columns) {
                        let prepObj = {};
                        for (i = 0; i < columns.length; i++) {
                            prepObj[columns[i].metadata.colName] = columns[i].value;
                        };
                        responseData.push(prepObj);
                    });
                    conn.callProcedure(request);
                }
            });
        }
    }, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(JSON.stringify(responseData))
        }
    })
}

exports.spCalculateReturnDetails = function (req, res) {
    let responseData = [];
    async.auto({
        getDataFromDb: function (cb) {
            let conn = new Connection(devConfig.databaseConfig);
            conn.on('connect', function (err) {
                if (err) {
                    console.log(err)
                    cb(err)
                }
                else {
                    console.log('=====================DB CONNECTED')
                    let request = new Request(
                        "spCalculateReturnDetails",
                        function (err, rowCount, row) {
                            cb(null)
                        }
                    );

                    request.addParameter('pmtTicker', TYPES.VarChar, req.body.pmtTicker);
                    request.addParameter('pmtStartCapital', TYPES.Int, req.body.pmtStartCapital);
                    request.addParameter('pmtWithDividendReinvestment', TYPES.Bit, req.body.pmtWithDividendReinvestment)

                    request.on('row', function (columns) {
                        let prepObj = {};
                        for (i = 0; i < columns.length; i++) {
                            prepObj[columns[i].metadata.colName] = columns[i].value;
                        };
                        responseData.push(prepObj);
                    });
                    conn.callProcedure(request);
                }
            });
        }
    }, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(JSON.stringify(responseData))
        }
    })
}
