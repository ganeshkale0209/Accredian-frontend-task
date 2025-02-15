import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import axios from 'axios';

const ReferralForm = ({ open, onClose }) => {
    const [form, setForm] = useState({ referrerName: '', referrerEmail: '', refereeName: '', refereeEmail: '', course: '' });

    const handleSubmit = async () => {
        await axios.post('http://localhost:5000/api/referral', form);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ padding: 3, backgroundColor: 'white', width: 400, margin: 'auto', marginTop: '10%' }}>
                <h2>Refer a Friend</h2>
                <TextField label="Your Name" fullWidth onChange={e => setForm({ ...form, referrerName: e.target.value })} />
                <TextField label="Your Email" fullWidth onChange={e => setForm({ ...form, referrerEmail: e.target.value })} />
                <TextField label="Friend's Name" fullWidth onChange={e => setForm({ ...form, refereeName: e.target.value })} />
                <TextField label="Friend's Email" fullWidth onChange={e => setForm({ ...form, refereeEmail: e.target.value })} />
                <TextField label="Course" fullWidth onChange={e => setForm({ ...form, course: e.target.value })} />
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Modal>
    );
};

export default ReferralForm;
