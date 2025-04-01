const fs = require('fs');

const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<testsuites>
    <testsuite name="Sample Test Suite" tests="1" failures="1" errors="0" skipped="0" timestamp="${new Date().toISOString()}">
        <testcase classname="SampleClass" name="sampleTest">
            <failure message="Sample failure" type="AssertionError">
Expected: true
Actual: false
            </failure>
        </testcase>
    </testsuite>
</testsuites>`;

fs.writeFileSync('report.xml', xmlContent);
