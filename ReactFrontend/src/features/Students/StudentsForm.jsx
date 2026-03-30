function StudentsForm(){
    
    return(
        <div className="myBox">
            <form className="myForm">
            <h1>Students Form</h1>
            <label>Enter Your FirstName</label>
            <input type="text" name="firstname" placeholder="Vyshnavi" />
            <br />
            <label >Enter your SurName</label>
            <input type="text" name="lastname" placeholder="Narala"/>
            <br />
            <label>Enter your Age</label>
            <input type="text" name="age" placeholder="18" />
            <br />
            <button>Register</button>
            </form>

        </div>
    )
}
export default StudentsForm