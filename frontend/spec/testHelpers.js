var testHelpers = {

    asyncExpect: function asyncExpect(callback, time) {
        time = time || 1000;
        setTimeout(callback, time);
    }
    
};

module.exports = testHelpers;
