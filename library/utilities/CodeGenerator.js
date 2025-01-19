/*
*
* All kind of code generation will done here
*
*/

// Create a container
const CodeGenerator = {};

// 8 digit random number code generator
// CodeGenerator.eightOTPGen = () => Math.floor(10000000 + Math.random() * 99999999);

// OTP Generator of Variable Length - code from mjs (stackoverflow)
CodeGenerator.OTPGenerator = (digits) => {
    const min = 10 ** (digits - 1);
    const max = (10 ** digits) - 1;
    

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}


// Export
export default CodeGenerator;