import React from 'react'
import { withStyles } from '@material-ui/core'

const style = {
    font404: {
        color: 'black',
        fontSize: '3em',
    }
}

const FormNotFound = (props) => {
    const { classes } = props
    return (
        <div>
            <h1 className={classes.font404}>Page non trouvée</h1>
        </div>
    )
}
export default withStyles(style)(FormNotFound)