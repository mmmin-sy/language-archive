import { InputContainer, InputStyle } from "./Input.styles.ts";
import React, {useEffect, useState} from "react";

interface Props {
	onInput: (value: string) => void;
	onChange?: (value: string) => void;
	onReset?: boolean;
	placeholder?: string;
}

const Input: React.FC<Props> = ({ onInput, onChange, onReset, placeholder }) => {
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		if(onReset){
			setValue('');
		}
	}, [onReset]);

	const updateValue = (value: string) => {
		setValue(value);
		onInput(value);
	}
	return (
		<InputContainer>
			<InputStyle
				onInput={(e: React.FormEvent<HTMLInputElement>) => updateValue(e.currentTarget.value)}
				onChange={() => onChange ? onChange(value) : null}
				value={value}
				placeholder={placeholder}
			/>
		</InputContainer>
	)
}

export default Input;