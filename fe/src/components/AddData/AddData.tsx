import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import { useMutation } from "@tanstack/react-query";
import { Data } from "../../types/data.ts";
import { addData } from "../../hooks/queries.ts";
import { useState } from "react";
import { AddDataStyle } from './AddData.styles.ts';

const AddData = () => {
	const [categoryValue, setCategory] = useState<string>('');
	const [exampleValue, setExample] = useState<string>('');
	const [translateValue, setTranslate] = useState<string>('');
	const [commentValue, setComment] = useState<string>('');

	const mutation = useMutation({
		mutationFn: (newData: Data) => addData(newData),
		onSuccess: () => {
			setCategory('');
			setExample('');
			setTranslate('');
			setComment('');
			alert('데이터가 성공적으로 추가되었습니다.');
		},
		onError: (error) => {
			alert(`데이터 추가 실패: ${error}`);
		}
	})

	const createData = () => {
		mutation.mutate({ category: categoryValue, example: exampleValue, translate: translateValue, comment: commentValue })
		// TODO: Update list after create new data
	}

	return (
		<AddDataStyle>
			<Input
				onReset={categoryValue ===''}
				onInput={(value: string) => setCategory(value)}
				placeholder={'Category'}
			/>
			<Input
				onReset={exampleValue ===''}
				onInput={(value: string) => setExample(value)}
				placeholder={'Example'}
			/>
			<Input
				onReset={translateValue ===''}
				onInput={(value: string) => setTranslate(value)}
				placeholder={'Translate'}
			/>
			<Input
				onReset={commentValue ===''}
				onInput={(value: string) => setComment(value)}
				placeholder={'Comment'}
			/>
			<Button onClick={() => createData()} text={'Add'}/>
		</AddDataStyle>
	)
}

export default AddData;