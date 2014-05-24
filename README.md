## hostme

Simple hosts file setup.

[![NPM](https://nodei.co/npm/hostme.png?compact=true)](https://nodei.co/npm/hostme/)

### Installation

```bash
npm install -g hostme
```

### Usage

Create a file called `.hosts` in your current directory. In there, put anything you wish to add to your hosts file. Example:

```
# Add comments like this

192.0.2.111 example.dev
198.51.100.42 sub.example.dev
```

Then, just run `hostme` in that directory. The definitions will be added to your hosts file. Tada!

#### CLI:

```
Usage: hostme [options]

 Options:

    --config <file>  Config file. Defaults to ".hostme".
    --hosts <path>   Path to host file. Defaults to "/etc/hosts".
    --version        Outputs the current version.
```
