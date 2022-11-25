import { useModalStore } from "./Modal";
import create from "zustand";

const TE = ({
	onClick,
	stuff,
	setStuff,
}: {
	onClick: () => void;
	stuff: string;
	setStuff: (input: string) => void;
}) => {
	return (
		<div>
			<input value={stuff} onChange={(e) => setStuff(e.target.value)}></input>
			<button
				onClick={(e) => {
					e.preventDefault();
					onClick();
				}}
			>
				Send
			</button>
		</div>
	);
};

const useTeStore = create<{ stuff: string; setStuff: (input: string) => void }>(
	(set) => {
		return {
			setStuff: (stuff) => set({ stuff }),
			stuff: "",
		};
	}
);

const WrappedTE = () => {
	const { setModal } = useModalStore();
	const { setStuff, stuff } = useTeStore();
	return (
		<TE
			{...{
				stuff: stuff,
				setStuff: setStuff,
				onClick: () => setModal(<WrappedTE />),
			}}
		></TE>
	);
};

const Editor = () => {
	const { modal, setModal } = useModalStore();

	return (
		<div>
			{modal ? null : <WrappedTE />}
			Hi there I am a slate editor
		</div>
	);
};

export default Editor;
