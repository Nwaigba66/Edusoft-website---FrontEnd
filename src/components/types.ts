
interface CourseType {
	id:string;
	name:string;
	university_id:string;
	university:string;
	department:string;
	department_id:string;
}

export type Courses = {
	count:number;
	next: string | null;
	prev: string| null;
	results: CourseType[];
}