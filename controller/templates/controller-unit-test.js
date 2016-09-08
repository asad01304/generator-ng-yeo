(function() {

    'use strict';

    var <%= ctrlName %>Controller = require('../../../controller/<%= ctrlFileName %>');

    describe('<%= moduleName %>.<%= ctrlName %>', function() {

        beforeEach(function() {

            <%= ctrlName %>Controller();

        });

        it('should fail because tests for the ctrl not implemented yet', function() {

            expect(true).toBe(false);

        });

    });

})();
