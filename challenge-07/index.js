console.log(
  getStudents({
    hasTeachingAssistant: true,
    classlist: ["matilda", "john", "mike", "bose"],
  })
);

function getStudents(classroom) {
  let { hasTeachingAssistant, classlist } = classroom;
  let teacher, teachingStudent, students;
  if (hasTeachingAssistant) {
    [teacher, teachingStudent, ...students] = classlist;
  } else {
    [teacher, ...students] = classlist;
  }
  return students;
}
