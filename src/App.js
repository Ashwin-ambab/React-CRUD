import React from "react";
import AllContacts from "./components/contacts/AllContacts";
import NewContacts from "./components/contacts/NewContacts";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import EditContactForm from "./components/contacts/EditContactForm";
import ContactItems from "./components/contacts/ContactItems";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <AllContacts />
        </Route>
        <Route path="/newcontact" exact>
          <NewContacts />
        </Route>
        {/* <Route path="/newcontact/read" exact >
          <ContactItems />
        </Route> */}
        <Route path="/newcontact/edit/:id" exact>
          <EditContactForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
