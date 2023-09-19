//function named 'createClassRoom'

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
  
    const students = [];
  
    for (let i = 1; i <= numberOfStudents; i++) {
      students.push(studentSeat(i));
    }
  
    return students;
  }
  
  const classRoom = createClassRoom(10);