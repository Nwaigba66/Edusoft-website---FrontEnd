
export function textValidator(value:string){
	// validate texts by checking the its not empty and not contain space characters
	// return error text if there is an error else empty string

	if (value.length === 0) return "This Field is required";
	if (/\s/.test(value)) return "space character not allowed";
	return ""  // text is valid
}


export function emailValidator(value:string){
	// validates the email by checking if it matches a format of email
	// return error text if there is an error else empty string

	if (value.length === 0) return "This Field is required";
	if (/\s/.test(value)) return "space character not allowed";
	if (/^[a-zA-z0-9]+\@\w+(\.com|\.co\.uk)$/.test(value)) return "";  // email is valid
    return "invalid email"
}

export function passwordValidator(value:string){
	// validates the password based on stated requirements
	// return error text if there is an error else empty string
	
	if (value.length === 0) return "This Field is required";
	if (value.length < 9 ) return "password too short";
	if (/\s/.test(value)) return "space character not allowed";
	if (!/[a-z]/.test(value)) return "password must include lower case";
	if (!/[A-Z]/.test(value)) return "password must include Upper case";
	if (!/[0-9]/.test(value)) return "password must include number";
	if (!/[^a-zA-z0-9]/.test(value)) return "password must include special character"	
	return ""  // password is valid
}