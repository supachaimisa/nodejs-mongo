const functionalTest = {
    // fail function data format //// must be return { message: 'success' }
    functionDataFormatFail: () => {
        return [1,2,3]
    },
    // success function data format //// must be return { message: 'success' }
    functionDataFormatSuccess: () => {
        return { message: 'success' }
    },
    // is not throw error function
    functionIsNotThrowErr: () => {
        console.log('Is not throw error');
    },
    // is throw error function
    functionIsThrowErr: () => {
        throw new Error('Is throw error')
    },
}
module.exports = functionalTest