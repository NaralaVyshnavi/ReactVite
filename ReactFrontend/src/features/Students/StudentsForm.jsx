import { useFormik} from 'formik'
import * as yup from 'yup';
import { useAddStudentMutation } from '../../services/studentsAPI';
function StudentsForm(){

    const [addStudent,{isLoading,error}]=useAddStudentMutation()
    const sform= useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            age:'',
            gender:'',
            course:''

        },
        validationSchema:yup.object({
            firstname:yup.string().required("mi peru matrame type cheyandi"),
            age:yup.number().required("Age type cheydaniki kuda raadha!! Sarigga type chey")
        }),
        onSubmit:()=>{
            addStudent(sform.values)
            alert("Data added Successfully")
        }
    })
    return(
        <div className="myBox">
            <form className="myForm" onSubmit={sform.handleSubmit}>
            <h1>Students Form</h1>
            <label>Enter Your FirstName</label>
            <input type="text" name="firstname" placeholder="Vyshnavi" onChange={sform.handleChange} onBlur={sform.handleBlur} />
            { sform.touched.firstname && <div>{sform.errors.firstname}</div>}
            <br />
            <label >Enter your SurName</label>
            <input type="text" name="lastname" placeholder="Narala" onChange={sform.handleChange} onBlur={sform.handleBlur}/>
            <br />
            <label>Gender</label>
            <br />
            <label>Female</label> <input type="radio" name='gender' value='Female' onChange={sform.handleChange}  onBlur={sform.handleBlur}/><br />
            <label>Male</label>  <input type="radio" name='gender' value='Male' onChange={sform.handleChange}  onBlur={sform.handleBlur} /><br />
            <label>Others</label>  <input type="radio" name='gender' value='Others' onChange={sform.handleChange}  onBlur={sform.handleBlur}/><br />
            <label>Enter your Age</label>
            <input type="text" name="age" placeholder="18" onChange={sform.handleChange}  onBlur={sform.handleBlur}/>
            {sform.touched.age && <div>{sform.errors.age}</div>}
            <br />
            <label>Select Your Course</label>
            <br />
            CME
            <input type="checkBox"    value="CME"name="course" onChange={sform.handleChange}  onBlur={sform.handleBlur}/>
            ECE
            <input type="checkBox"  value="ECE" name='course' onChange={sform.handleChange}  onBlur={sform.handleBlur}/>
            EEE
            <input type="checkBox"  value="EEE"name='course' onChange={sform.handleChange}  onBlur={sform.handleBlur}/>
            MEC<input type="checkBox"  value="MEC"name='course' onChange={sform.handleChange}  onBlur={sform.handleBlur}/>
            <button type='submit'>Register</button>
            </form>

        </div>
    )
}
export default StudentsForm