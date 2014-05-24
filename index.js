#!/usr/bin/env node

var fs  = require('fs');
var pkg = require('./package.json');

var argv = require('minimist')(process.argv.slice(2));
if (argv.version) return console.log(pkg.version);
if (argv.help) return console.log(
    'Usage: hostme [options]\n ' +
    '\n ' +
    'Options:\n ' +
    '\n ' +
    '   --config <file>  Config file. Defaults to ".hostme".\n',
    '   --hosts <path>   Path to host file. Defaults to "/etc/hosts".\n',
    '   --version        Outputs the current version.\n'
);

var config = (argv.config || '.hosts');
var hosts = (argv.hosts || '/etc/hosts');

fs.readFile(__dirname + '/' + config, function (err, data) {
    if (err) {
        if (err.code === 'ENOENT') return console.error('Config file (' + config + ') does not exist.');
        else throw err;
    }

    fs.appendFile(hosts, '\n' + data.toString(), function (err) {
        if (err) {
            if (err.code === 'EACCES') return console.error('Unable to write to the host file. You may need to run hostme as root.');
            else throw err;
        }

        console.log('Added the following data to your host file: \n\n' + data.toString());
    });
});
