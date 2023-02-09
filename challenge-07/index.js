const classroom = {
  hasTeachingAssistant: true,
  classlist: ["matilda", "john", "mike", "bose"],
};

function getStudents(classroom) {
  if (classroom.hasTeachingAssistant === true) {
    return;
  } else {
    const list = classroom.classlist.slice(1, 4);
    console.log(list);
  }
}
