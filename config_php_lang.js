module.exports = {
	PHP_EXE_BIN_PATH: "C:\\xampp\\php\\php.exe", // You should have PHP Binary installed somewhere, XAMPP works! // leave it empty "" if not set (if you don't have PHP binary) \\ XAMPP PHP Binary for linux is located in /opt/lampp/bin/php \\ XAMPP PHP Binary for MacOSX is located in /Applications/XAMPP/bin/php
	
	// is web app using DBMS?
	IS_DBMS_USED: true, // true or false // DBMS System must be installed, for an example: for MySQL, XAMPP works great.
	DBMS: "mysql",  // only MySQL Supported for Now! // might use PostgreSQL or other DBMS in the future but not implemented for now.
	
	// if above IS_DBMS_USED = true, bellow settings are enabled and must be set
	YOUR_WEBAPP_DBMS_SERVER_IP: "127.0.0.1", // or localhost // or other ip
	YOUR_WEBAPP_DBMS_DB_NAME: "hostel_management_system",
	YOUR_WEBAPP_DBMS_USERNAME: "root",
	YOUR_WEBAPP_DBMS_PASSWORD: "",
	
	YOUR_WEBAPP_DBMS_USER_TABLE_NAME: "student",
	YOUR_WEBAPP_DBMS_USER_TABLE_PASSWORD_COLUMN_NAME: "pwd_hash",
	YOUR_WEBAPP_DBMS_USER_TABLE_SALT_COLUMN_NAME: "salt", // if not existed or used bcrypt or don't know what it is, leave it empty text: ""

	YOUR_WEBAPP_DBMS_ADMIN_TABLE_NAME: "admin", // maybe same of user table, so write same table name // if hardcoded admin credentials or doesn't exist, leave it empty text: ""
	YOUR_WEBAPP_DBMS_ADMIN_TABLE_PASSWORD_COLUMN_NAME: "pwd_hash", // maybe same of user table, so write same column name
	YOUR_WEBAPP_DBMS_ADMIN_TABLE_SALT_COLUMN_NAME: "salt", // if not existed or used bcrypt or don't know what it is, leave it empty text: "" // maybe same of user table, so write same column name
};
