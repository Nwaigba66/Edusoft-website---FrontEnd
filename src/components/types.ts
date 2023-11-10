
interface CourseType {
	id:string;
	name:string;
	university_id:string;
	university:string;
	department:string;
	department_id:string;
}

interface EdusoftOptionType {
	name:string;
	code2?:string
}

export type Courses = {
	count:number;
	next: string | null;
	prev: string| null;
	results: CourseType[];
}

export type FilterOptions = {
	[key:string]: EdusoftOptionType[];
}

export type TypeCoursesDetail = {
	id:string;
	name:string;
	university:string;
	university_id:string;
	department_id:string;
	department: string;
	about:string;
	degrees: string[];
}