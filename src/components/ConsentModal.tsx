import * as React from 'react';
import { useConsentContext } from "../common/contexts/CookiesContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';
import { useLanguageContext } from '../common/contexts/LangContext';
import { getTranslation } from '../common/language';

const CustomBox = styled(Box)(({ theme }) => ({
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    textAlign: "justify",
    padding: "15px 15px",
}));

const ConsentModal: React.FC = () => {
    const { Consent, toggleConsent } = useConsentContext();
    const { Language } = useLanguageContext();

    return (
        <React.Fragment>
            <Modal
                open={!Consent}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    padding: "10vh 10vw",
                }}
            >
                <CustomBox>
                    <Typography  >
                        {getTranslation(Language.code, "cookieNotice")}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {getTranslation(Language.code, "consentOptions.instruction")}
                    </Typography>
                    <div style={{
                        display: "flex",
                        gap: "10px",
                        padding: "15px 0",
                    }}>
                        <Button variant="outlined" color="primary" onClick={() => toggleConsent("deny")}>
                            {getTranslation(Language.code, "consentOptions.rejectButton")}
                        </Button>
                        <Button variant="outlined" color="primary" onClick={() => toggleConsent("allow")}>
                            {getTranslation(Language.code, "consentOptions.acceptButton")}
                        </Button>
                    </div>
                </CustomBox>
            </Modal>
        </React.Fragment>
    );
};

export default ConsentModal;