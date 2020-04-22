var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
	user: "tc-landscaping.co.uk",                   // NOTE that this was username in 1.x
    password: "Spaniels8881#",           // optional, prompted if none given
	host: "tc-landscaping.co.uk",
	port: 21,
	localRoot: __dirname + '/build',
	remoteRoot: '/public',
	// include: ['*', '**/*'],      // this would upload everything except dot files
	include: ['*'],
    exclude: [],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: false,              // delete ALL existing files at destination before uploading, if true
    forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
}

// use with callback
ftpDeploy.deploy(config, function(err, res) {
	if (err) console.log(err)
	else {
    console.log('finished:', res);
    console.log('App Deployed with New Photos');
    process.exit();
  }
});
