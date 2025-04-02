import Button from "../Button/Button.tsx";
import { useMutation } from "@tanstack/react-query";
import { Data } from "../../types/data.ts";
import { addData } from "../../hooks/queries.ts";
import { AddStyle } from './Archive.styles.ts';
import {useForm, SubmitHandler} from "react-hook-form"
import {InputStyle} from "../Input/Input.styles.ts";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
	refetch: () => void;
}

const schema = z.object({
	category: z.string().min(1, "Category field is required."),
	example: z.string().min(1, "Example field is required."),
	translate: z.string().min(1, "Translate field is required."),
	comment: z.string(),
})

const Add = ({ refetch }: Props) => {

	const mutation = useMutation({
		mutationFn: (newData: Data) => addData(newData),
		onSuccess: () => {
			reset();
			refetch();
			alert('Success');
		},
		onError: (error) => {
			alert(`Fail: ${error}`);
		}
	})

	const {
		register,
		handleSubmit,
		reset,
		// watch,
		formState: { errors },
		setValue
	} = useForm({ resolver: zodResolver(schema)}) // Zod schema is sent by zodResolver

	const createData:SubmitHandler<Data> = (data) => {
		mutation.mutate(data);
	}

	return (
		<form onSubmit={handleSubmit(createData)}>
			<AddStyle>
				<InputStyle
					onInput={(e: React.FormEvent<HTMLInputElement>) => setValue("category", e.currentTarget.value)}
					placeholder={'Category'}
					{...register("category", { required: "Category field is required" })}
				/>
				{errors.category && <span>Category field is required</span>}
				<InputStyle
					onInput={(e: React.FormEvent<HTMLInputElement>) => setValue("example", e.currentTarget.value)}
					placeholder={'Example'}
					{...register("example", { required: "Example field is required" })}
				/>
				{errors.example && <span>Example field is required</span>}
				<InputStyle
					onInput={(e: React.FormEvent<HTMLInputElement>) => setValue("translate", e.currentTarget.value)}
					placeholder={'Translate'}
					{...register("translate", { required: "Translate field is required" })}
				/>
				{errors.translate &&  <span>Translate field is required</span>}
				<InputStyle
					onInput={(e: React.FormEvent<HTMLInputElement>) => setValue("comment", e.currentTarget.value)}
					placeholder={'Comment'}
					{...register("comment", { required: "Comment field is required" })}
				/>
				<Button type="submit" text={'Add'} />
			</AddStyle>
		</form>
	)
}

export default Add;