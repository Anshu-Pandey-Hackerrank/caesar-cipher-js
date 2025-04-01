const fs = require('fs');
const { execSync } = require('child_process');

try {
    // Run the original test file and capture output
    const output = execSync('node caesar_cipher_tests.js').toString();
    
    // Parse the test results
    const failures = output.split('\n').filter(line => line.startsWith('FAILED:'));
    const totalTests = 19; // Based on the test file
    const passedTests = totalTests - failures.length;

    // Generate JUnit XML format
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<testsuites>
    <testsuite name="Caesar Cipher Tests" tests="${totalTests}" failures="${failures.length}" errors="0" skipped="0" timestamp="${new Date().toISOString()}">
        ${failures.map(failure => {
            const match = failure.match(/FAILED: (.*) -- (.*) != (.*)/);
            const testName = match[1];
            const actual = match[2];
            const expected = match[3];
            return `
        <testcase classname="CaesarCipher" name="${testName}">
            <failure message="Values do not match" type="AssertionError">
Expected: ${expected}
Actual: ${actual}
            </failure>
        </testcase>`;
        }).join('')}
        ${Array(passedTests).fill().map((_, i) => `
        <testcase classname="CaesarCipher" name="test_${i + 1}_passed" />`).join('')}
    </testsuite>
</testsuites>`;

    // Write the XML report
    fs.writeFileSync('report.xml', xmlContent);
    
    // Output the original test results
    console.log(output);
    
    // Exit with appropriate code
    process.exit(failures.length > 0 ? 1 : 0);
} catch (error) {
    console.error('Test execution failed:', error);
    process.exit(1);
} 