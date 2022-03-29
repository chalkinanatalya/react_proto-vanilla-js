import React from "react";
import { Switch, Route } from "react-router-dom";

import { Profile } from "../../pages/Profile";
import { Articles } from "../../pages/Articles";
import { Chats } from "../../pages/Chats";
import { ChatList } from "../ChatList/ChatList";
import { Home } from "../../pages/Home";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { SignIn } from "../../pages/SignIn";
import { PrivateRoute } from "../PrivateRouter";
import { PublicRoute } from "../PublicRouter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Main = () => {
  return (
    <Switch>
      <PublicRoute restricted={false} exact path="/" component={Home} />
      <PublicRoute restricted={false} path="/profile" component={Profile} />
      <PublicRoute restricted={false} path="/articles" component={Articles} />
      <PublicRoute restricted={true} path="/signin" component={SignIn} />

      <Route path="/chats">
        <Box sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
          <Item>
            <PrivateRoute path="/chats">
              <Route exact path="/chats" component={ChatList} />
              <Route path="/chats/:chatId/:chatName" component={Chats} />
            </PrivateRoute>
          </Item>
        </Box>
      </Route>
      <Route>
        <h3>Page not found</h3>
      </Route>
    </Switch>
  );
};
