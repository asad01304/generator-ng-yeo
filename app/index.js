var generators = require('yeoman-generator');
var options = {};


module.exports = generators.Base.extend({

    prompting: function() {
        /* Prompt for module name and basic structuring */
        return this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: 'Type ng module name'
        }, {
            type: 'confirm',
            name: 'includeUtils',
            message: 'Requires utils-module ?'
        }, {
            type: 'confirm',
            name: 'includeCore',
            message: 'Requires core-module ?'
        }, {
            type: 'confirm',
            name: 'generateConfig',
            message: 'Generate default config file ?'
        }, {
            type: 'confirm',
            name: 'generateService',
            message: 'Generate default service file ?'
        }, {
            type: 'confirm',
            name: 'generateDirective',
            message: 'Generate default directive file ?'
        }, {
            type: 'confirm',
            name: 'generateAssets',
            message: 'Generate default assets structure ?'
        }, {
            type: 'confirm',
            name: 'generateController',
            message: 'Generate default controller file ?'
        }]).then(function(answers) {

            if (!answers.moduleName) {
                throw Exception('No module name provided');
            }
            options = answers;
        }.bind(this));
    },
    generateDefaults: function() {

        var modulePath = options.moduleName + '-module';
        if (options.generateConfig) {
            this.fs.copyTpl(
                this.templatePath('config/index.js'),
                this.destinationPath(modulePath + '/config/index.js')
            );
        }

        if (options.generateService) {
            this.fs.copyTpl(
                this.templatePath('service/index.js'),
                this.destinationPath(modulePath + '/service/index.js')
            );
        }

        if (options.generateDirective) {
            this.fs.copyTpl(
                this.templatePath('directive/index.js'),
                this.destinationPath(modulePath + '/directive/index.js')
            );
        }

        if (options.generateAssets) {
            this.fs.copyTpl(
                this.templatePath('asset/partial/hello.html'),
                this.destinationPath(modulePath + '/asset/partial/hello.html')
            );
        }

        if (options.generateController) {
            this.fs.copyTpl(
                this.templatePath('controller/index.js'),
                this.destinationPath(modulePath + '/controller/index.js')
            );
        }

        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath(modulePath + '/index.js'),
            options
        );

    }
});
