import Typography from "@mui/material/Typography";
import { FC } from "react";

const Copyright: FC = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={[
        {
          color: "text.secondary",
        },
      ]}
    >
      {"Copyright © "}
      phalvinayak
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
