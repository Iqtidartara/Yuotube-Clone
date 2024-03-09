
import { Stack } from '@mui/material';
import { categories } from '../utils/constants'


const selectedCategory = 'New';
const Sidebar = () => {
  return (
    <Stack
    direction="row"
    sx={{
        overflow: "auto",
        height : {
            sx : 'auto',
            md: '95%'
        },
        flexDirection : { md: 'column'},
    }}>
{categories.map((Category)=> (
    <button className='category-btn'
    
    style={{
        background: Category.name === selectedCategory && '#fc1503',color: 'white'
    }}
    key={Category.name}
    >
        <span>{Category.icon}</span>
        <span>{Category.name}</span>

    </button>
))}
    </Stack>
  )
}

export default Sidebar