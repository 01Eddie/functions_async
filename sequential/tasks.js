const util = require('util')
const sleep = util.promisify(setTimeout)//esto maneja con callback o promise asyn await

module.exports = {

    async tasksOne() {
        try {
            throw new Error('Some problem')         
        await sleep(3000);
        return 'ONE VALUE'   
        } catch (e) {
            console.log(e)
        }
    },

    async tasksTwo() {
        try {
        await sleep(2000)
        return 'TWO VALUE'   
        } catch (e) {
            console.log(e)
        }
    }
}