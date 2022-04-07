import * as React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../assets/Typography';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import BasketTable from './BasketTable'
import EnrolledTable from './EnrolledTable'
import StuEnrolmentpageBoxLayout from './StuEnrolmentpageBoxLayout'

export default function StuEnrolmentpageBox() {
  return (
      <>
        <StuEnrolmentpageBoxLayout>
            <BasketTable></BasketTable>
        </StuEnrolmentpageBoxLayout>
        <StuEnrolmentpageBoxLayout>
            <EnrolledTable></EnrolledTable>
        </StuEnrolmentpageBoxLayout>
      </>
  );
}
