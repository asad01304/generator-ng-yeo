var app = require('angular').module('<%= moduleName %>.module',[
    <% if (includeUtils) { %>require('../utils-module'), <% } %>
    <% if (includeCore) { %>require('../core-module') <% } %>
]);

<% if (generateConfig) { %>require('./config')(app);  <% } %>
<% if (generateService) { %>require('./service')(app);  <% } %>
<% if (generateDirective) { %>require('./directive')(app);  <% } %>
<% if (generateController) { %>require('./controller')(app);  <% } %>

module.exports = '<%= moduleName %>.module';
