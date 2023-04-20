// import { Component } from 'react';
import { Formik,Field, } from 'formik';
import { Form,ErrorMessage } from './Form.styled';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';




// const validationSchema= Yup.object().shape({
//          firstName: Yup.string()
//            .max(15, 'Must be 15 characters or less')
//            .required('Required'),
//          lastName: Yup.string()
//            .max(20, 'Must be 20 characters or less')
//            .required('Required'),
//          email: Yup.string().email('Invalid email address').required('Required'),
//        })

       const ContactsSchema= Yup.object().shape({
        name:Yup.string().required('Required field'),
         number:Yup.number().min(6,'this number must be longer then 3 symbols').required('Required field'),
       })


export const ContactForm = ({onAdd}) => {
 
// const nameId = nanoid();
// const numberId = nanoid();
  // state = {
  //   name: '',
  //   number: '',
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  

  // render() {

//  const handleSubmit=(values,{resetForm}) =>{
//   console.log(values);
// resetForm()
//  }

const handleSubmit =(values,actions) =>{
  onAdd(values);
  actions.resetForm()
}


    return (
      <Formik initialValues={{
   name:'',
  number:'',
 }}
 validationSchema={ContactsSchema}
 onSubmit={handleSubmit}>
      <Form>
        <label
        // htmlFor={nameId}
        >Name </label>
        <Field
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // value={this.state.name}
          // onChange={this.handleChange}
          // id={nameId}
        />
<ErrorMessage name='name' component='span'/>
        <label 
        // htmlFor={numberId}
        >Number</label>
        <Field
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          // value={this.state.number}
          // onChange={this.handleChange}
          // id={numberId}
        />
<ErrorMessage name='number' component='span'/>
        <button type="submit">Add contact</button>
      </Form>
      </Formik>
    );
  }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
