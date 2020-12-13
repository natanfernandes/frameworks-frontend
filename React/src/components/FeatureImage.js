import React from 'react'
import {Container, Typography, Slide, Tooltip, IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from './Form'

const FeatureImage = (props) => {
    return (
        <Slide in={true} 
        direction="right"
        >
            <Container 
            className="FeatureImage"
            >
                <Container>
                    <Typography 
                    variant="h5" 
                    color="inherit"
                    >
                        As coisas mais legais sobre seu 
                        nome diretamente do site do IBGE.
                    </Typography>
                    <Form getNome={props.getNome} />
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
        </Slide>
    )
}

export default FeatureImage;