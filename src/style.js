import React from "react";
import{Container,Title,Box,Des} from './styled_components'

class Student extends React.Component{
    render(){
        return(
            <Container>
                <Box type='Large'>
                    Large
                </Box>
                <Box type='Medium'>
                    Meium
                </Box>
                <Box type='Small'>
                    Small
                </Box>
                <Title>Have a Nice day</Title>
                <Des> Nice day</Des>
            </Container>
        )
    }
}
export default Student;