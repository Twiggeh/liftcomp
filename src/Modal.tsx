import { ReactNode } from "react";
import create from "zustand";

const Modal = ({ children }: { children: ReactNode }) => {
	const { modal, setModal } = useModalStore();
	if (!modal) return children;

	return (
		<div>
			in modal
			{modal}
			<button
				onClick={() => {
					setModal(null);
				}}
			>
				Delete
			</button>
			{children}
		</div>
	);
};

export default Modal;

export const useModalStore = create<{
	modal: ReactNode;
	setModal: (modal: ReactNode) => void;
}>((set, get) => ({
	modal: null,
	setModal: (modal) => set({ modal }),
}));

// apiClient.logi
// apiClient.deleteClient
// apiClient.api.notifications.get
