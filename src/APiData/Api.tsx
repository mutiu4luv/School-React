import { Base_Url } from "./BaseUrl";

// for school registration & auth
export const RegisterSchool = `${Base_Url}/api/AuthSchool/`;
export const LoginSchool = `${Base_Url}/api/AuthSchool/schoolLogin/`;
export const getAllSchools = `${Base_Url}/api/School/`;

///User Api
export const UserApi = `${Base_Url}/api/Users/`;
export const StudentLoginApi = `${Base_Url}/api/auth/student-login/`;
export const StaffLoginApi = `${Base_Url}/api/auth/login/`;
export const RegisterStudentApi = `${Base_Url}/api/auth/registers/`;

/////Class APi
export const ClassApi = `${Base_Url}/api/Class/`;
export const UpdateClassApi = `${Base_Url}/api/Class/update/`;
export const DeleteClassApi = `${Base_Url}/api/Class/delete/`;

/////Subjects APi
export const SubjectsApi = `${Base_Url}/api/Subjects/`;
export const UpdateSubjectsApi = `${Base_Url}/api/Subjects/update/`;
export const DeleteSubjectsApi = `${Base_Url}/api/Subjects/delete/`;

/////Subjects Markks APi
export const SubjectMarksApi = `${Base_Url}/api/SubjectMarks/`;
export const UpdateSubjectMarksApi = `${Base_Url}/api/SubjectMarks/update/`;
export const DeleteSubjectMarksApi = `${Base_Url}/api/SubjectMarks/delete/`;

////Result Api
export const ResultApi = `${Base_Url}/api/Results/`;

// country api
export const countryApi = "https://restcountries.com/v3.1/all";
