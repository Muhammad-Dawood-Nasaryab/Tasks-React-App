import React, { ReactNode, createContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	setModalContent: (content: ReactNode) => void;
	modalContent: ReactNode;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<ReactNode>(null);

	const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
		setModalContent(null)
  };
	
	return(
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalContent, setModalContent }}>
      { children }
    </ModalContext.Provider>
	);
};