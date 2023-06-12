import './search-box.styles.css';

const SearchBox = ({ onSearchFieldChange, className, placeholder }) => (
    <input 
        className={`search-box ${className}`} 
        type='search' 
        placeholder={placeholder}
        onChange={onSearchFieldChange}
    />
);

export default SearchBox;