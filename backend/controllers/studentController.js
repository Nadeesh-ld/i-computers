import Student from '../models/student.js';

export function createstudents(req, res) {
   if(req.user==null){
        res.status(403).json({
            message:"Unauthorized access please login"
        })
        return
    }
    if(!req.user.isAdmin){
        res.status(403).json({
            message:"Only admin can create students"
        })
        return
    }
    const newStudent = new Student({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    });
    newStudent.save()
        .then(() => {
            res.json({
                message: "Student created successfully"
            });
       
        });
}
 export function getStudents(req, res) {
    Student.find()
        .then((students) => {
            res.json(students);
        });
                                      
}