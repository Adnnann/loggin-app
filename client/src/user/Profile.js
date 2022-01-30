import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core"
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
import Divider from "@material-ui/core/Divider"
import DeleteUser from "./DeleteUser"
import auth from './../auth/auth-helper'
import { Link, Redirect } from "react-router-dom"
import {read} from './api-user'

const useStyles = makeStyles(theme=>({
    root:{
        maxWidth:600,
        margin:'auto',
        padding: theme.spacing(3),
        margin: theme.spacing(5)
    },
    title:{
        margin: theme.spacing(3),
        color: theme.palette.protectedTitle
    }
}))

const Profile = ({match}) =>{
    const classes = useStyles()
    const [user, setUser] = useState({})
    const [redirectToSingin, setRedirectToSignin] = useState(false)
    const jwt = auth.isAuthenitcated()

    useEffect(()=>{
      const abortController = new AbortController()
      const signal = abortController.signal
      read({userId: match.params.userId},{t:jwt.token}, signal)
        .then((data)=>{
            if(data && data.error) {setRedirectToSignin(true)}
            else {setUser(data)}
        })
        return function cleanup(){abortController.abort()}
    },[match.params.userId])

    if(redirectToSingin) return <Redirect to='/signin' />

    return(
        <Paper className={classes.root} elevation={4}>
            <Typography varinat="h6" className={classes.title}>
                All Users
            </Typography>
            <List dense>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar><Person /></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.email} />
                    { auth.isAuthenitcated().user && auth.isAuthenitcated().user._id
                    && (
                    <ListItemSecondaryAction>
                        <Link to={"/users/edit/" + user._id}>
                            <IconButton aria-label='Edit' color="primary">
                                <Edit />
                            </IconButton>
                        </Link>
                    </ListItemSecondaryAction>)
                    }
                </ListItem>    
                <Divider />
                <ListItem>
                    <ListItemText primary={"Joined: " + (new Date(user.created)).toDateString()} />
                </ListItem>  
              </List>
        </Paper>
      )
}

export default Profile