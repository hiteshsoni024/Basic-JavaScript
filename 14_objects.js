// object distracturing
const course = {
    courseName: 'Javascript',
    price: "1000",
    courseInstructor:"Hitesh Soni"
}
//by invoke the keys of object => course.courseInstructor
// but by object distructor ->
// const {courseInstructor} = course;
// console.log(courseInstructor);
const {courseInstructor: Instructor} = course;
console.log(Instructor);
// concept of react.ja (distracturing)
// const navbar = ({company}) => {
// }
// navbar(company="hitesh")
//JSON -> javascript object notation