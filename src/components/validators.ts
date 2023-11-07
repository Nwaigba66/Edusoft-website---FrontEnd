export function textValidator(value:string){
	if (value.length === 0) return "This Field is required";
	if (/\s/.test(value)) return "space character not allowed";
	return ""
}
export function emailValidator(value:string){
	if (value.length === 0) return "This Field is required";
	if (/\s/.test(value)) return "space character not allowed";
	if (/^[a-zA-z]+[0-9]*\@\w+(\.com|\.co\.uk)$/.test(value)) return "";
    return "invalid email"
}

export function passwordValidator(value:string){
	if (value.length === 0) return "This Field is required";
	if (value.length < 9 ) return "password too short";
	if (/\s/.test(value)) return "space character not allowed";
	if (!/[a-z]/.test(value)) return "password must include lower case";
	if (!/[A-Z]/.test(value)) return "password must include Upper case";
	if (!/[0-9]/.test(value)) return "password must include number";
	if (!/[^a-zA-z0-9]/.test(value)) return "password must include special character"	
	return ""
}