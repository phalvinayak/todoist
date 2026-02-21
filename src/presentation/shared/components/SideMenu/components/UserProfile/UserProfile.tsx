import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OptionsMenu from "@src/presentation/shared/components/SideMenu/components/OptionsMenu/OptionsMenu";
import { selectUser } from "@src/redux/slices/auth/authSelector";
import { FC } from "react";
import { useSelector } from "react-redux";

export const UserProfile: FC = () => {
  const user = useSelector(selectUser);

  if (!user) return null;

  return (
    <>
      <Avatar
        sizes="small"
        alt={user.name}
        src={user.picture}
        sx={{ height: 36, width: 36 }}
      />
      <Box sx={{ mr: "auto" }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, lineHeight: "16px" }}
        >
          {user.name}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {user.email}
        </Typography>
      </Box>
      <OptionsMenu />
    </>
  );
};
