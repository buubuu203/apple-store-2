import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SendIcon from "@mui/icons-material/Send";
import * as React from "react";

const actions = [
  {
    icon: <CallIcon />,
    name: "Call",
    onClick() {
      window.location.href = "tel:+0917.192.680";
    },
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    onClick() {
      window.location.href = "mailto:chaungocbuudang2003@gmail.com";
    },
  },
  {
    icon: <SendIcon />,
    name: "Chat Now",
    onClick() {
      window.open("https://www.facebook.com/apple", "_blank");
    },
  },
];

export default function ContactSpeedDial() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
      }}
      className="z-10"
    >
      <Box sx={{ transform: "translateZ(0px)", flexGrow: 2000 }}>
        <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
