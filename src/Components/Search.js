import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { GoogleInput } from './GoogleInput';
import { GoogleButton } from './GoogleButton';
import './Search.css'



const Search = ({hideButtons = false}) => {
  return (
        <>
      <form className='search'>
        <GoogleInput>
        <SearchIcon className='search__inputIcon'/>
        <input/>
        <MicIcon/>
        </GoogleInput>
       <div className='search__buttons'>
        <GoogleButton type='submit' className={hideButtons ? 'search__hideButtons ' : ''}>Buscar con Google</GoogleButton>
        <GoogleButton className={hideButtons ? 'search__hideButtons ' : ''}>Voy a tener suerte</GoogleButton>
       </div>
      </form>
    </>
  )
}

export default Search;