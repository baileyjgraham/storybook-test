import {
    Theme, Box, Avatar, AvatarProps, Tooltip,
  } from '@mui/material';
  import React from 'react';
  import { createStyles, makeStyles } from '@mui/styles';
  
  type GPCircleThumbProps = {
    thumbUrl: string
    thumbName?: string
    size?: number
    tooltip?: string
    avatar?: boolean
    dashboard?: boolean
    avatarProps?: AvatarProps
    classes?: Record<string, string>;
  };
  
  const useStyles = makeStyles<Theme, GPCircleThumbProps>(theme => createStyles({
    size: props => ({
      height: props.size ?? '100%',
      width: props.size ?? '100%',
      backgroundColor: theme.palette.divider,
    }),
    container: {
      borderRadius: '50%',
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden',
      border: `1px solid ${theme.palette.divider}`,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    avatar: {
      border: `1px solid ${theme.palette.divider}`,
      color: theme.palette.text.secondary,
      fontSize: 'inherit',
    },
    dashboard: {
      border: `3px solid ${theme.palette.divider}`,
      backgroundColor: `${theme.palette.primary.light} !important`,
      color: theme.palette.primary.contrastText,
      fontSize: 'inherit',
    },
  }));
  
  const GPCircleThumb = ({ ...props }: GPCircleThumbProps) => {
    const {
      avatar, thumbUrl, thumbName, avatarProps, tooltip, dashboard,
    } = props;
    const classes = useStyles(props);
    const render = () => (
      avatar
        ? (
          <Avatar
            className={`${classes.size} ${dashboard === true ? classes.dashboard : classes.avatar}`}
            {...avatarProps}
            src={thumbUrl}
            alt={thumbName}
          >
            {thumbName?.slice(0, 1)}
          </Avatar>
        )
        : (
          <Box className={`${classes.size} ${classes.container}`}>
            <img src={thumbUrl} alt={thumbName} className={`${classes.image}`} />
          </Box>
        )
    );
    return tooltip ? (
      <Tooltip title={tooltip}>
        {render()}
      </Tooltip>
    ) : render();
  };
  
  export default GPCircleThumb;
  