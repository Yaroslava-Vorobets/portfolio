import React, { useState, useCallback, useEffect } from 'react';
import {
    ModalOverlay, ModalContent, CloseButton
} from './Modal.Styled.jsx';
import { ContactsItem, ContactsLink } from '../header/Header.Styled.jsx';

const ModalWindow = ({ show, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (show) {
            setIsModalOpen(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsModalOpen(false), 800);
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);

    const handleOverlayClick = (event) => {
      
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div>
            {isModalOpen && (
                <ModalOverlay onClick={handleOverlayClick}>
                    <ModalContent>
                        <ContactsItem>
                            <ContactsLink href="tel:+350961111111">
                                +35 096 111 11 11
                            </ContactsLink>
                        </ContactsItem>
                        <ContactsItem>
                            <ContactsLink href="mailto:info@devstudio.com">
                                info@devstudio.com
                            </ContactsLink>
                        </ContactsItem>
                        <CloseButton onClick={onClose}>Close</CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </div>
    );
};

export default ModalWindow;