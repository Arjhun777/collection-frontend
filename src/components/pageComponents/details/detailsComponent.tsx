import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { userDetailsService } from '../../../services/userDetails.service';
import { onlyNumbers } from '../../../utils/helper';

function DetailsComponent() {
    const [userDetails, setUserDetails] = useState({
        firstName: '', lastName: '', phoneNumber: '', address: '', ssn: ''
    });

    const handleFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        let valid = true;
        if (name === 'phoneNumber') valid = onlyNumbers(value) || !value.length;
        if (valid)
            setUserDetails({
                ...userDetails,
                [name]: value
            });
    }

    const handleDetailsSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const valid = checkValidity();
        if (valid) {
            userDetailsService.newUserDetails(userDetails).then(() => {
                setUserDetails({
                    firstName: '', lastName: '', phoneNumber: '', address: '', ssn: ''
                });
            });
        }
    }

    const checkValidity = () => {
        return (userDetails.firstName.length && userDetails.lastName.length && userDetails.phoneNumber.length && userDetails.address.length && userDetails.ssn.length);
    }

    return (
        <React.Fragment>
            <form id="user-details-form" onSubmit={handleDetailsSubmit}>
                <TextField name="firstName" className="name-field" label="First Name" type="text" value={userDetails.firstName} onChange={handleFieldChange} />
                <TextField name="lastName" className="name-field" label="Last Name" type="text" value={userDetails.lastName} onChange={handleFieldChange} />
                <TextField name="phoneNumber" className="name-field" label="Phone Number" type="text" value={userDetails.phoneNumber} onChange={handleFieldChange} />
                <TextField name="address" label="Full Address" multiline rows={5} value={userDetails.address} variant="outlined" onChange={handleFieldChange}/>
                <TextField name="ssn" className="name-field" label="Social Security Number" type="text" value={userDetails.ssn} onChange={handleFieldChange} />
                <Button className="details-submit-btn" color="primary" type="submit">Submit</Button>

            </form>
        </React.Fragment>
    )
}

export default DetailsComponent;