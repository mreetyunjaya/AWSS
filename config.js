module.exports = {
	// Global Configs
	THIS_PROJECT_FOLDER_NAME: "AWSS", // Change it only if you changed this project's folder name, // case sensitive // Used in core/index.js
	IS_DEBUG_MODE_ENABLED: false, // For Debugging this Toolkit
	
	DEFAULT_PROJECT_PATH_TO_SCAN: "../ProjectToScan/", // `../` means one level up from the toolkit's folder, you can replace it with full path such as C:\\Users\\YourUsername\\Desktop\\ProjectToScan
	USED_PROGRAMMING_LANGUAGE: "php", // choose php or nodejs maybe // not empty! // Used in main.js // for now only PHP supported
	HTML_REPORT_FILE_NAME_AND_PATH: "report.html", // default path is next to the main.js of the toolkit // you can specify full path such as C:\\Users\\YourUsername\\Desktop\\report.html
};
