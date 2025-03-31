import { InputContainer, InputStyle } from "./Input.styles.ts";
import React, {useEffect, useState} from "react";

interface Props {
	onInput: (value: string) => void;
	onChange?: (value: string) => void;
	onReset?: boolean;
	placeholder?: string;
	ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ onInput, onChange, onReset, placeholder, ref, ...props }) => {
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
				// ref={ref}
				onInput={(e: React.FormEvent<HTMLInputElement>) => updateValue(e.currentTarget.value)}
				// onChange={() => onChange ? onChange(value) : null}
				value={value}
				placeholder={placeholder}
				{...props}
			/>
		</InputContainer>
	)
}

export default Input;