import React from 'react';
import Home from "./Views/Home";
import About from "./Views/About";

interface IRoute {
    name: string,
    path: string,
    component: React.ReactElement,
    exact: boolean
}

const routes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        component: <Home />,
        exact: true
    },
    {
        name: 'About',
        path: '/about',
        component: <About />,
        exact: true
    },
    {
        name: 'Blog',
        path: '/blog',
        component: <Home />,
        exact: true
    },
    {
        name: 'Contact',
        path: '/contact',
        component: <About />,
        exact: true
    }
];

export default routes;
