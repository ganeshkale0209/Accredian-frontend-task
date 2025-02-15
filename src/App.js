import React, { useState } from 'react';
import ReferralForm from './ReferralForm';
import { Button } from '@mui/material';

const App = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Refer & Earn</h1>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                Refer Now
            </Button>
            <ReferralForm open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default App;
