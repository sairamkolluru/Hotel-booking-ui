/* eslint-disable react/prop-types */
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menu = [
  { title: "Bookings", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsActiveIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const navigate = useNavigate();
  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      //   dispatch(logout());
      navigate("/");
    } else navigate(`/profile/${item.title.toLowerCase()}`);
  };
  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={open}
        anchor="left"
        sx={{ zIndex: 1 }}
      >
        <div
          className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col 
        justify-center text-xl pt-16 gap-8"
        >
          {menu.map((item, i, index) => (
            <div key={index}>
              <div
                key={index}
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                {item.icon}
                <span key={index}>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider key={index} />}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
