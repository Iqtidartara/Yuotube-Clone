
import { Stack } from '@mui/material';
import { categories } from '../utils/constants'


const selectedCategory = 'New';
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
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
    onClick={() => setSelectedCategory(Category.name)}
    style={{
        background: Category.name === selectedCategory && '#fc1503',color: 'white'
    }}
    key={Category.name}
    >
        <span style={{
            color:Category.name === selectedCategory ? 'white' : 'red',marginRight: '15px' 
        }}>{Category.icon}</span>
        <span style={{
            opacity : Category.name=== selectedCategory ? '1' : '0.8'
        }}>{Category.name}</span>

    </button>
))}
    </Stack>
  )
}

export default Sidebar