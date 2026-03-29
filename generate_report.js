const reporter = require('k6-html-reporter');

const options = {
    jsonFile: 'C:/k6/summary.json',
    output: 'C:/k6/report'
}
reporter.generateSummaryReport(options)