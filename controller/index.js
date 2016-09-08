const generators = require('yeoman-generator');
const _ = require('lodash');

let options = {};

module.exports = generators.Base.extend({

    prompting: function() {
        /* Prompt for module name and basic structuring */
        return this.prompt([{
            type: 'input',
            name: 'ctrlNamespace',
            message: 'Type module.controller name '
        }]).then(function(answers) {
            options = answers;
            let ctrlNames = options.ctrlNamespace.split('.');
            options.moduleName = ctrlNames[0];
            options.ctrlName = _.camelCase(ctrlNames[1]);
            options.ctrlFileName = `${_.kebabCase(ctrlNames[1])}-controller.js`;
        }.bind(this));
    },
    generateController: function() {
        let modulePath = options.moduleName + '-module';

        // Copy ctrl template.
        this.fs.copyTpl(
            this.templatePath('controller.js'),
            this.destinationPath(modulePath + '/controller/' + options.ctrlFileName),
            options
        );

        // Initialize the ctrl in the module's controller index file.
        let ctrlIndexFilePath = `${modulePath}/controller/index.js`;
        let ctrlIndexFile = this.fs.read(ctrlIndexFilePath);
        let lastLinePos = ctrlIndexFile.lastIndexOf('}');

        // Read the last '}' character and
        // insert the ctrl init code on the line before it.
        let indexOutput = ctrlIndexFile.substr(0, lastLinePos) + `    app.controller('${options.moduleName}.${_.camelCase(options.ctrlName)}Controller', require('./${_.kebabCase(options.ctrlName)}-controller'));\n` + ctrlIndexFile.substr(lastLinePos);

        this.fs.write(ctrlIndexFilePath, indexOutput);
    }
});
