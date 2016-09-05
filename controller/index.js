var generators = require('yeoman-generator');
var options = {};


module.exports = generators.Base.extend({

    prompting : function() {
        /* Prompt for module name and basic structuring */
        return this.prompt([{
            type : 'input',
            name : 'ctrlNamespace',
            message : 'Type module.controller name '
        }]).then(function(answers) {
            options = answers;
            var ctrlNames = options.ctrlNamespace.split('.');
            options.moduleName = ctrlNames[0];
            options.ctrlName = ctrlNames[1];
        }.bind(this));
    },
    generateController : function(){
        var modulePath = options.moduleName + '-module';

        this.fs.copyTpl(
            this.templatePath('controller.js'),
            this.destinationPath(modulePath + '/controller/' + options.ctrlName + '-controller.js'),
            options
        );

    }
});
