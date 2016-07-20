/**
 * Created by redmachine2 on 7/19/2016.
 */
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
	// map tells the System loader where to look for things
	var map = {
		'app':                        'app', // 'dist'
	};
	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app':                        { main: 'main.js',  defaultExtension: 'js' }
	};
	var config = {
		map: map,
		packages: packages
	};
	System.config(config);
})(this);
