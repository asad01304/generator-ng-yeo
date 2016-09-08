# generator-ng-yeo

<pre>
npm install -g yo
sudo npm link
</pre>
## create module
<pre>
yo ng-yeo
</pre>
## create module controller
<pre>
yo ng-yeo:controller
</pre>
The prompt will ask for `moduleName.ctrlName`

e.g., There is a module named `foo` and folder named `foo-module`,
and the controller is to be named `helloWorld`.

The correct prompt answer should then be `foo.helloWorld`; this will create a controller file `hello-world-controller.js`.
