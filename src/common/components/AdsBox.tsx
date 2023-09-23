import React from "react";
import { Adsense } from '@ctrl/react-adsense';

interface AdsComponentProps {
    client: string;
    slot: string;
    style: React.CSSProperties;
    layout: string;
    format: string;
}

const AdsComponent: React.FC<AdsComponentProps> = (props) => {
    const { client, slot, style, layout, format } = props;

    return (
        <React.Fragment>
            <Adsense
                client={client}
                slot={slot}
                style={style}
                layout={layout}
                format={format}
            />
        </React.Fragment>
    );
};

export default AdsComponent;