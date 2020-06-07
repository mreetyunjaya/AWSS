module.exports = {
	// is web app using dbms?
	IS_DBMS_USED: true, // true or false
	DBMS: "mysql", // This is important // might use PostgreSQL or others, not implemented for now
	
	// if above true, bellow settings are enabled and must be set
	YOUR_WEBAPP_DBMS_SERVER_IP: "localhost",
	YOUR_WEBAPP_DBMS_DB_NAME: "22ndcenturyenglish",
	YOUR_WEBAPP_DBMS_USERNAME: "root",
	YOUR_WEBAPP_DBMS_PASSWORD: "",
	
	YOUR_WEBAPP_DBMS_USER_TABLE_NAME: "22_admin",
	YOUR_WEBAPP_DBMS_USER_TABLE_PASSWORD_COLUMN_NAME: "password",
	YOUR_WEBAPP_DBMS_USER_TABLE_SALT_COLUMN_NAME: "salt", // if not existed or used bcrypt or don't know what it is, leave it empty text: ""

	YOUR_WEBAPP_DBMS_ADMIN_TABLE_NAME: "22_admin", // maybe same of user table, so write same table name
	YOUR_WEBAPP_DBMS_ADMIN_TABLE_PASSWORD_COLUMN_NAME: "password", // maybe same of user table, so write same column name
	YOUR_WEBAPP_DBMS_ADMIN_TABLE_SALT_COLUMN_NAME: "salt", // if not existed or used bcrypt or don't know what it is, leave it empty text: "" // maybe same of user table, so write same column name

	PHP_EXE_BIN_PATH: "C:\\xampp\\php\\php.exe", // leave it empty "" if not set
};
