import css from './Form.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import addContact from 'redux/contsctsReducers';
import { nanoid } from 'nanoid';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const isExsist = contacts.find(
      el => el.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isExsist) {
      form.reset();
      return alert(isExsist.name + ' is already in contacts.');
    }

    dispatch(
      addContact({
        name: form.elements.name.value,
        phone: form.elements.number.value,
        id: nanoid(5),
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label}>Number</label>
      <input
        className={css.formInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

// import css from './Form.module.css';
// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import addContact from 'redux/contsctsReducers';
// import { nanoid } from 'nanoid';

// export const Form = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.items);
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//      const contact = {
//        name: name,
//        number: number,
//      };
//     const form = event.currentTarget;

//     const isExsist = contacts.find(
//       el => el.name.toLowerCase() === form.elements.name.value.toLowerCase()
//     );

//     if (isExsist) {
//       form.reset();
//       return alert(isExsist.name + ' is already in contacts.');
//     }

//     dispatch(
//       addContact({
//         createdAt: nanoid(5),
//         name: form.elements.name.value,
//         phone: form.elements.number.value,
//         id: nanoid(5),
//       })
//     );
//   console.log();
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.label}>Name</label>
//       <input
//         className={css.formInput}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <label className={css.label}>Number</label>
//       <input
//         className={css.formInput}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//       <button className={css.submitBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// Form.protoTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

// import css from './Form.module.css';
// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import addContact from 'redux/contsctsReducers';
// import { nanoid } from 'nanoid';

// export const Form = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.items);
//  const [name, setName] = useState('');
//  const [number, setNumber] = useState('');

//  const handleSubmit = event => {
//    event.preventDefault();

//    const contact = {
//      name: name,
//      phone: number,
//      id: nanoid(5),
//    };

//    const isContactExist = contacts.find(
//      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//    );

//    if (isContactExist) {

//       alert(`${contact.name} is already in contacts.`);

//      return;
//    }
// console.log(contact);
//  dispatch(addContact(contact));
//    setName('');
//    setNumber('');
//  };

//  const handleNameChange = event => {
//    setName(event.target.value);
//  };

//  const handleNumberChange = event => {
//    setNumber(event.target.value);
//  };
//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.label}>Name</label>
//       <input
//         className={css.formInput}
//         type="text"
//         name="name"
//         value={name}
//         onChange={handleNameChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <label className={css.label}>Number</label>
//       <input
//         className={css.formInput}
//         type="tel"
//         name="number"
//         value={number}
//         onChange={handleNumberChange}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//       <button className={css.submitBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// Form.protoTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

// import css from './Form.module.css';
// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import addContact from 'redux/contsctsReducers';
// import { nanoid } from 'nanoid';
// export const Form = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.items);
//   const [name, setName] = useState('');
//   const [phone, setNumber] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();

//         const form = event.currentTarget;

//         const isExsist = contacts.find(
//           el => el.name.toLowerCase() === form.elements.name.value.toLowerCase()
//         );

//         if (isExsist) {
//           form.reset();
//           return alert(isExsist.name + ' is already in contacts.');
//         }

//         dispatch(
//           addContact({
//             createdAt: nanoid(5),
//             name: form.elements.name.value,
//             phone: form.elements.number.value,
//             id: nanoid(5),
//           })
//         );

//         form.reset();
//     setName('');
//     setNumber('');
//   };

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = event => {
//     setNumber(event.target.value);
//   };
//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.label}>Name</label>
//       <input
//         className={css.formInput}
//         type="text"
//         name="name"
//         value={name}
//         onChange={handleNameChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <label className={css.label}>Number</label>
//       <input
//         className={css.formInput}
//         type="tel"
//         name="number"
//         value={phone}
//         onChange={handleNumberChange}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//       <button className={css.submitBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// Form.protoTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };
