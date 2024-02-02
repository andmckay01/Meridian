import React, { FC, useEffect, ReactElement } from 'react';
import { navHeight } from '../Navbar';
import { motion } from 'framer-motion';
import FillBottomModal from '@/components/Structural/FillBottomModal';
import Header from '@/components/Text/Header';
import Text from '@/components/Text/Text';
import '../ui.css';

interface TeamModalProps {
    imageSrc: string;
    name: string;
    title: string;
    linkedin?: string;
    email?: string;
    medium?: string;
    focus: string;
    education: string;
    experienceP1: string;
    experienceP2?: string;
    onClose: () => void;
    isOpen: boolean; // Added to control visibility
};

const TeamModal: FC<TeamModalProps> = ({ 
    imageSrc, 
    name, 
    title, 
    linkedin, 
    email, 
    medium, 
    focus, 
    education, 
    experienceP1, 
    experienceP2,
    onClose, 
    isOpen }): ReactElement => {

    const modalStyle: React.CSSProperties = {
        display: isOpen ? 'flex' : 'none', // Control visibility
        position: 'fixed',
        top: `calc(${navHeight} - 2px`,
        left: 'calc(4vw - 3px)',
        right: 'calc(4vw - 3px)',
        height: `calc(100vh - ${navHeight})`,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5DC',
        zIndex: 100,
        borderTop: 'solid 2px #444444',
        borderRight: 'solid 2px #444444',
        borderLeft: 'solid 2px #444444',
        borderBottom: 'none',
    };

    const contentStyle: React.CSSProperties = {
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-between',
        gap: 'clamp(20px, 40px, 40px)',
        width: 'clamp(70%, 90%, 1100px)',
        maxWidth: '1200px',
        height: `calc(100vh - ${navHeight})`,
        overflowX: 'hidden',
        overflowY: 'auto',
    };

    const closeButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '20px',
        right: '20px',
        height: 'auto',
        cursor: 'pointer',
        zIndex: 10,
    };

    const titleSectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'space-between',
        flexWrap: 'wrap-reverse',
    }

    const linkSectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    }

    const linkStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'underline',
    }

    const smallArrowStyle: React.CSSProperties = {
        width: '6.5px',
        maxWidth: '6.5px',
        position: 'relative',
        top: '-4px'
    }

    const sectionStyle: React.CSSProperties = {
        flex: 1,
    };

    const titleStyle: React.CSSProperties = {
        position: 'relative',
        top: '-10px',
    }

    const detailIconStyleTop: React.CSSProperties = {
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: -1,
        minWidth: '200px',
    }

    const detailIconStyleBottom: React.CSSProperties = {
        position: 'fixed',
        right: 0,
        bottom: `calc(${navHeight} + ${navHeight}/3`,
        pointerEvents: 'none',
    }

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        zIndex: 1
    }

    const imageStyle: React.CSSProperties = {
        width: 'clamp(150px, 25vw, 300px)',
        maxWidth: '300px',
        mixBlendMode: 'multiply',
    };

    const imageBackgroundFill: React.CSSProperties = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: '#FFF5DC',
        zIndex: -1
    }


    useEffect(() => {
        // Close modal on ESC key press
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <motion.div
            style={modalStyle}
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ type: 'easeInOut', stiffness: 100 }}
        >
            <div style={contentStyle} className="team-modal-flex">
                <button style={closeButtonStyle} onClick={onClose} className="modal-link"><img src="./ModalX.svg" alt="Close X"/> </button>
                <img src="./visionModalTop.svg" alt="vision icon" style={detailIconStyleTop} className="modalDetail"/>
                <img src="./visionModalBottom.svg" alt="vision icon" style={detailIconStyleBottom} className="modalDetail"/>
                    <div style={imageContainerStyle} className="team-modal-content">
                        <img src={imageSrc} alt={name} style={imageStyle} />
                        <div style={imageBackgroundFill}></div>
                    </div>
                    <div style={sectionStyle} className="team-modal-content">
                        <div style={titleSectionStyle}>
                            <div>
                                <Header type="H4">{name}</Header>
                                <Text variant="SmallFranklin" style={titleStyle}>{title}</Text>
                            </div>
                            <div style={linkSectionStyle}>
                                {linkedin &&
                                    <div style={linkStyle} className="modal-link">
                                    <a href={linkedin} target="_blank"><Text variant="SmallFranklin">LinkedIn </Text></a>
                                    <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle} />
                                </div>}
                                {email && <div style={linkStyle} className="modal-link">
                                    <a href={`mailto:${email}`} target="_blank"><Text variant="SmallFranklin">Email</Text></a>
                                    <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle}/>
                                </div>}
                                { medium && <div style={linkStyle} className="modal-link">
                                    <a href={medium} target="_blank"><Text variant="SmallFranklin">Medium</Text></a>
                                    <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle}/>
                                </div>}
                            </div>
                        </div>
                        <div style={{marginBottom: "12px"}}>
                            <Header type="H4"> Focus </Header>
                            <Text variant="SmallFranklin"> {focus} </Text>
                        </div>
                        <div>
                            <Header type="H4"> Education </Header>
                            <Text variant="SmallFranklin"> {education} </Text>
                        </div>
                    </div>
                <div style={sectionStyle}>
                    <div>
                        <Header type="H4"> Experience </Header>
                        <Text variant="SmallFranklin"> {experienceP1} </Text>
                        <br/>
                        <Text variant="SmallFranklin"> {experienceP2} </Text>
                    </div>
                </div>
            </div>
            <FillBottomModal/>
        </motion.div>
    );
};

export default TeamModal;
