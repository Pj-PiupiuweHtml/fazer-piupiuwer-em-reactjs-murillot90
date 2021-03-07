import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import SidebarMenu from '../../components/SidebarMenu';
import SidebarMenuCollapsed from '../../components/SidebarMenuCollapsed';

import api from '../../services/api';

import * as S from './styles';

function Feed() {
    return (
        <>
            <PageHeader/>
            <S.ContentWrapper>
                <SidebarMenu/>
                <SidebarMenuCollapsed/>
            </S.ContentWrapper>
        </>
    );
}

export default Feed;