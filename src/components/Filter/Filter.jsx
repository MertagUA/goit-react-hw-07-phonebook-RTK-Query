import { FilterInput, FilterLabel } from './Filter.styled';
import { getFilter } from 'redux/Slices/filterSlice';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const Filter = ({ OnChange }) => {
  const filter = useSelector(getFilter);

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={OnChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
