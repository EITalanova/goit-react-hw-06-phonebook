import css from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      <span className={css.text}>Find contact by name</span>
      <input
        className={css.input}
        type="text"
        name="name"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
