import { useFormik } from 'formik';
import * as yup from 'yup';


function Signup() {




  const myFormik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema:
      yup.object({
        Email: yup
          .string('Enter your email')
          .email("enter valid email address")
          .required('email is required'),

        Password: yup
          .string('Enter your password')
          .required('password is required')
          .min(6, "please enter more then 3 characters "),

      }),
    onSubmit: (values) => {
      console.log("values: ", values);
      myFormik.resetForm({ values: '' });


    },
  });





  return (
    <>
      <div className='container'>
        <div class="header">
          <h1 class="heading">Login</h1>
        </div>
        <form className='inputf' onSubmit={myFormik.handleSubmit}>
          <input
            id="Email"
            placeholder="Email Address"
            value={myFormik.values.Email}
            onChange={myFormik.handleChange}
          />
          {
            (myFormik.touched.Email && Boolean(myFormik.errors.Email)) ?
              <span style={{ color: "red" }}>{myFormik.errors.Email}</span>
              :
              null
          }

          <br />
          <input
            id="Password"
            placeholder="Password"
            value={myFormik.values.Password}
            onChange={myFormik.handleChange}
          />
          {
            (myFormik.touched.Password && Boolean(myFormik.errors.Password)) ?
              <span style={{ color: "red" }}>{myFormik.errors.Password}</span>
              :
              null
          }

          <br />
          <div className="button">
            <button type="submit"> Submit </button>
          </div>

        </form>

        <br />
        <br />

      </div>




    </>

  );
}

export default Signup;