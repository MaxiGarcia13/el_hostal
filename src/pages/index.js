import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/templates/Layout';
const IndexPage = () => {
    return (
        <Layout>
            <h1> Cartas: </h1>
            <ul>
                <li>
                    <Link to='/carta-del-comedor'>Carta del Comedor</Link>
                </li>
                <li>
                    <Link to='/carta-de-terraza'>Carta de Terraza</Link>
                </li>
            </ul>
        </Layout>
    );
};

export default IndexPage;
