// Todo
// need to add handling for ... button will add when I have data
import { Box, Divider, Typography } from '@mui/material';
import {
  CalendarCircle, Save2,
} from 'givepulse-iconsax-react';
import React, { useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import GPCircleThumb from '../GPCircleThumb';

const useStyles = makeStyles(theme => createStyles({
  cardContainer: {
    height: isGrid => (isGrid ? 258 : 243),
    width: isGrid => (isGrid ? 300 : 238),
    borderRadius: '12px',
    transition: 'box-shadow 0.5s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  },
  cardCover: {
    flexShrink: 0,
    height: 78,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    background: theme.palette.background.gradient,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  cardTitle: {
    overflow: 'hidden',
    fontSize: '16px',
  },
  eventsText: {
    fontSize: '14px',
    color: theme.palette.secondary.dark,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '6px',
  },
}));

export type GPAddressType = {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    description?: string;
    latitude?:string;
    longitude?:string;
};
  

export type LocationType = {
    address: GPAddressType
    map_url?: string
    map_image?: string
};

export type InternshipEvents = {
    application_due_date: string;
    credit: boolean;
    credit_amount: string;
    faculty: string;
    hiring_manager: string;
    how_to_apply: string;
    paid: number;
    paid_amount: string;
    timeframe: string[];
    requirements: string[];
};

export type EventListItem = {
    grid: boolean;
    unique_id: string;
    event_id: string;
    title: string;
    path: string;
    cover?: {
      url: string;
      type: 'image';
    };
    datetime_text?: string;
    location?: LocationType;
    virtual?: boolean;
    pos_left?: number;
    description: string;
    event_type: string;
    kind_of_event: string;
    kind_of_event_raw: string;
    locked?: boolean;
    promoted?: boolean;
    group?: {
      title: string;
      path: string;
    };
    display_participants: boolean;
    latitude?: string;
    longitude?: string;
    internship?: InternshipEvents;
};

const GroupCard = ({ ...event }: EventListItem) => {
  const [isGrid, setIsGrid] = useState(event.grid);
  const classes = useStyles(isGrid);
  return (
    <>
      <Box className={classes.cardContainer}>
        <Box sx={{
          display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
        }}
        >
          <Box
            className={classes.cardCover}
            style={event.cover?.url ? { backgroundImage: `url(${event.cover.url})` } : {}}
          />
          <Box sx={{ marginTop: '-35px' }}>
            <GPCircleThumb
              thumbUrl="https://d3epsxdq52jozs.cloudfront.net/givepulse_icon_600x600_transparent_01_0045961006_m.png"
              thumbName="FakeName"
              size={70}
            />
          </Box>
        </Box>
        {isGrid ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px 10px 0 10px' }}>
            <Typography className={classes.cardTitle} variant="h6" component="h3">
              GivePulse
            </Typography>
            <Typography className={classes.eventsText}>12 upcoming events</Typography>
            <Divider sx={{ marginTop: '6px', marginBottom: '6px' }} />
            <Box className={classes.bottomContainer}>
              <Typography variant="caption">
                <Box component="span" ml={0.5}>
                  5 impacts
                </Box>
              </Typography>
              <Typography variant="caption">
                <Box component="span" ml={0.5}>
                  1000 hours
                </Box>
              </Typography>
              <Typography variant="caption">
                <Box component="span" ml={0.5}>
                  $1000
                </Box>
              </Typography>

            </Box>
          </Box>
        )
          : (
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px 10px 0 10px' }}>
              <Typography className={classes.cardTitle} variant="h6" component="h3">
                GivePulse
              </Typography>
              <Divider sx={{ marginTop: '4px', marginBottom: '4px' }} />
              <Box sx={{
                display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center',
              }}
              >

                <Typography variant="caption">
                  <Box
                    sx={{
                      display: 'flex', flexDirection: 'row', gap: '2px', alignItems: 'center',
                    }}
                  >
                    <Save2 size={18} />
                    <Box component="span" ml={0.5}>
                      5 impacts
                    </Box>
                  </Box>
                </Typography>

                <Typography variant="caption">
                  <Box sx={{
                    display: 'flex', flexDirection: 'row', gap: '2px', alignItems: 'center',
                  }}
                  >
                    <CalendarCircle size={20} />
                    <Box className="GPLineEllipsis" component="span" ml={0.5}>
                      12 upcoming events
                    </Box>
                  </Box>
                </Typography>

              </Box>
            </Box>
          )}
      </Box>
    </>
  );
};

export default GroupCard;
