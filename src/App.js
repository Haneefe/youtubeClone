import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ChannelDetail,NavBar,Feed,VideoDetail,SearchFeed} from './components'
import { Box } from '@mui/material'
const App = () => {
    return(

    <Box>
        
        <NavBar/>
        <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
           
            
        </Routes>
    </Box>
   )
}

export default App