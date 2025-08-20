import React from 'react';
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'

const actions = [
  {
    icon: <PhoneIcon />,
    name: 'Phone',
    onClick: () => window.open('tel:+918595994381', '_self'),
  },
  {
    icon: <WhatsAppIcon />,
    name: 'Whatsapp',
    onClick: () => window.open('https://wa.me/918595994381', '_blank'),
  },
];

const ChatSpeedDial = () => {
  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 99,
      }}
    >
      <SpeedDial
        ariaLabel="Contact Options"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
            }}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ChatSpeedDial;