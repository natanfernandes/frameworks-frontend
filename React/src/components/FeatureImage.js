import React from 'react'
import {Container, Typography, Slide, Tooltip, IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FeatureImage = (props) => {
    return (
        <Slide in={true} direction="right">
            <Container className="Container FeatureImage">
                <Container>
                    <Container>
                        <Typography 
                        variant="h1" 
                        color="inherit"
                        >
                            {props.title}
                        </Typography>
                        <Typography 
                        variant="h5" 
                        color="inherit"
                        >
                            {props.text}
                        </Typography>
                    </Container>
                    <Container 
                    className="ExpandMoreIcon"
                    >
                        <Tooltip 
                        title="Ver mais" 
                        color="primary"
                        >
                            <IconButton 
                            aria-label="Ver mais" disabled="true"
                            >
                                <ExpandMoreIcon 
                                style={{ fontSize: 60 }} 
                                />
                            </IconButton>
                        </Tooltip>
                    </Container>
                </Container>
            </Container>
        </Slide>
    )
}

export default FeatureImage;