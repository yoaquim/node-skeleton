describe('dummy', function() {

    var testHelpers = require('./testHelpers');
    var subject = {
        dummyDo: function () {
            return 1;
        }
    };

    describe('#dummyDo', function () {
        it('is a dummy test and just returns  1', function() {
            expect(subject.dummyDo()).toBe(1);
        });
    });

});

