import * as React from "react";
import { Admin, Resource, ListGuesser  } from 'react-admin';
import axios from "axios";
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://localhost:5000');

const AdminPage = () => 
<Admin dataProvider={dataProvider}>
    <Resource name="api/adress/auditorium/all" list={ListGuesser} />
</Admin>;

export default AdminPage;