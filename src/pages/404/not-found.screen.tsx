import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/forms/button.component';
import Text from '../../components/style/text.component';
import colors from '../../themes/colors.theme';


const NotFoundScreen = () => {

    return (
        <div>
            <Text h1 style={{ marginBottom: 20 }}>
                404 Not found
            </Text>
            <Link to="/" style={{ marginTop: 10 }}>
                <Button text="Back to home" color="primary" />
            </Link>
        </div>
    );
}

export default NotFoundScreen;