import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = () => {
  return (
        <>
      <form className='search'>
        <GoogleInput>
        <SearchIcon/>
        <input/>
        <MicIcon/>
        </GoogleInput>
        
      </form>
    </>
  )
}

export default Search;