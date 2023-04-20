// import { Component } from 'react';
import { Formik,Field } from 'formik';
import { FormOfContacts } from './Form.styled';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';


// nameId = nanoid();
// numberId = nanoid();


const initialValues ={
  name:'',
  number:'',
}

export const ContactForm = () => {
 

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

 const handleSubmit=(values,{resetForm}) =>{
resetForm()
 }


    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormOfContacts onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name </label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameId}
        />

        <label htmlFor={this.numberId}>Number</label>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id={this.numberId}
        />

        <button type="submit">Add contact</button>
      </FormOfContacts>
      </Formik>
    );
  }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
