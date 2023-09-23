import * as React from 'react';
import { useConsentContext } from "../contexts/CookiesContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConsentModal: React.FC = () => {
    const { Consent, toggleConsent } = useConsentContext();

    return (
        <React.Fragment>
            <Modal
                open={!Consent}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for functionality,
                        experience, measurement and marketing (personalized ads) as specified in the cookie policy. Denying consent may make related features unavailable.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You can freely give, deny, or withdraw your consent at any time.
                        Use the “Accept” button to consent. Use the “Reject” button to continue without accepting.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => toggleConsent("deny")}>
                        Reject
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => toggleConsent("allow")}>
                        Accept
                    </Button>

                </Box>
            </Modal>

        </React.Fragment>
    );
};

export default ConsentModal;