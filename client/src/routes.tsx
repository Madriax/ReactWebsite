import React from 'react';
import Home from "./Views/Home";
import About from "./Views/About";
/**import Contact from "./Views/Contact";
import Blog from "./Views/Blog";*/

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
    }/**,
    {
        name: 'Blog',
        path: '/blog',
        component: <Blog />,
        exact: true
    },
    {
        name: 'Contact',
        path: '/contact',
        component: <Contact />,
        exact: true
    }*/
];

export default routes;
