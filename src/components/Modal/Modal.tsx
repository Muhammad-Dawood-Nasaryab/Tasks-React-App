import React from "react";
import { useModal } from "../../hooks/useModal";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Modal.module.css";

const Modal: React.FC = () => {
	const { isModalOpen, modalContent } = useModal();
	const { isDarkMode } = useTheme();

	if (!isModalOpen) return null;

	return (
		<div className={ styles.overlay }>
			<div className={ isDarkMode ? styles.darkmodal : styles.lightmodal }>
				{ modalContent }
			</div>
		</div>
	);
};

export default Modal;