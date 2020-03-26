const keytar = require("keytar")

try {
    const testService = "TEST_SERVICE"
    const testAccount = "TEST_ACCOUNT"
    const testPassword = "TEST_PASSWORD"
    let addResult = keytar.addPassword(testService, testAccount, testPassword)
    if (!addResult) {
        throw new Error("Unable to access password manager service")
    }
    const getResult = keytar.getPassword(testService, testAccount)
    if (getResult !== testPassword) {
        throw new Error("Unexpected password from password manager service")
    }
} catch( error) {
    console.error(error)
    ProcessingInstruction.exit(1)
}
