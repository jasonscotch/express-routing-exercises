const express = require('express');
const ExpressError = require('./expressError');
const { onlyNums, calculateMean, calculateMedian, calculateMode } = require('./operations');

const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    try {
        let check = onlyNums(req.query.nums);
        if (!req.query.nums) {
            return next(new ExpressError('nums must be a comma-separated list of numbers.', 400));
          }
        else if (!check) {
            return next(new ExpressError("not all inputs are numbers", 400));
        } else {
            let response = {
                operation: "mean",
                    value: calculateMean(req.query.nums)
            }
            return res.send(response);
        }
        
    } catch (e) {
        return next(new ExpressError("nums are required", 400));
    }
})

app.get('/median', (req, res, next) => {
    try {
        let check = onlyNums(req.query.nums);
        if (!req.query.nums) {
            return next(new ExpressError('nums must be a comma-separated list of numbers.', 400));
          }
        else if (!check) {
            return next(new ExpressError("not all inputs are numbers", 400));
        } else {
            let response = {
                operation: "median",
                    value: calculateMedian(req.query.nums)
            }
            return res.send(response);
        }
    } catch (e) {
        return next(new ExpressError("nums are required", 400));
    }
})

app.get('/mode', (req, res, next) => {
    try {
        let check = onlyNums(req.query.nums);
        if (!req.query.nums) {
            return next(new ExpressError('nums must be a comma-separated list of numbers.', 400));
          }
        else if (!check) {
            return next(new ExpressError("not all inputs are numbers", 400));
        } else {
            let response = {
                operation: "mode",
                    value: calculateMode(req.query.nums)
            }
            return res.send(response);
        }
    } catch (e) {
        return next(new ExpressError("nums are required", 400));
    }
})

app.get('/all', (req, res, next) => {
    try {
        let check = onlyNums(req.query.nums);
        if (!req.query.nums) {
            return next(new ExpressError('nums must be a comma-separated list of numbers.', 400));
          }
        else if (!check) {
            return next(new ExpressError("not all inputs are numbers", 400));
        } else {
            let response = {
                operation: "all",
                    mean: calculateMean(req.query.nums),
                    median: calculateMedian(req.query.nums),
                    mode: calculateMode(req.query.nums)
            };
            return res.send(response);
        }
    } catch (e) {
        return next(new ExpressError("nums are required", 400));
    }
})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});