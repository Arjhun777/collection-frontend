import React, { useEffect, useState } from 'react';
import { userDetailsService } from '../../../services/userDetails.service';
import TableComponent from '../../resuableComponents/table/table';

const columns = [
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'phoneNumber', label: 'Phone Number' },
    { id: 'address', label: 'Address' },
    { id: 'ssn', label: 'Social Security Number' },
]

function ShowDetailsComponent() {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = (pageNo=1) => {
        userDetailsService.getUserDetails(pageNo).then((data) => {
            setUserDetails(data);
        })
    }

    return (
        <React.Fragment>
            <TableComponent rows={userDetails} columns={columns} getUserDetails={getUserDetails}/>
        </React.Fragment>
    )
}

export default ShowDetailsComponent;