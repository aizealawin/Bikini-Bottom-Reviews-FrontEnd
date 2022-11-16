import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    username: '',
    email: '',
    profilePic: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      email: formValues.email,
      username: formValues.username,
      profilePic: formValues.profilePic,
      password: formValues.password,
      confirmPassword: formValues.password
    })
    setFormValues(initialFormValues)
    navigate('/login')
  }
  return (
    <div className="register-form">
      <h1>Register to create account</h1>
      <div className="form">
        <form className="register" onSubmit={handleSubmit}>
          <div className="input-container">
            <ul>
            <li><label>Email: </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formValues.email}
              placeholder="email"
              required
            ></input></li>
            <li><label>Username: </label>
            <input
              type="text"
              onChange={handleChange}
              value={formValues.username}
              placeholder="username"
              name="username"
              required
            /></li>
            <li><label>Picture: </label>
            <input
              type="text"
              onChange={handleChange}
              value={formValues.profilePic}
              placeholder="image-url"
              name="profilePic"
              required
            /></li></ul>
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <ul>
            <li><label>Password: </label>
            <input
              type="password"
              onChange={handleChange}
              value={formValues.password}
              placeholder="password"
              name="password"
              required
            /></li>
            <li><label>Confirm Password: </label>
            <input
              type="password"
              onChange={handleChange}
              value={formValues.password}
              placeholder="password"
              name="password"
              required
            /></li></ul>
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="button-container">
            <ul>
            <input
              type="submit"
              disabled={!formValues.email || !formValues.password}
            />
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register