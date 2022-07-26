import {ApiProperty} from "@nestjs/swagger";
import {TagDto} from "src/tag/dto/tag.dto";

export class UserWithTags {
	@ApiProperty({
		description: `User email`,
		example: `example@mail.com`,
	})
	email: string;

	@ApiProperty({
		description: `User nickname`,
		example: `Admin3000`,
	})
	nickname: string;

	@ApiProperty({
		description: `tags array`,
		example: [
			{
				id: "id",
				name: "example",
				sortOrder: "0",
			},
		],
		type: TagDto,
	})
	tags: TagDto[];
}

export class GetUserWithTagsReturn200 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `User entity with cards`,
		example: {
			email: "example@exe.com",
			nickname: "example",
			tags: [
				{
					id: "id",
					name: "example",
					sortOrder: "0",
				},
			],
		},
	})
	user: UserWithTags;

	@ApiProperty({
		description: `Status code`,
		example: `200`,
	})
	status: number;
}

export class UserWithoutIdDto {
	@ApiProperty({
		description: `Email`,
		example: `admin@mail.com`,
	})
	email: string;

	@ApiProperty({
		description: `Nickname`,
		example: `Admin3000`,
	})
	nickname: string;
}

export class UpdateUserReturn204 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `User entity`,
		example: {
			email: "example@exe.com",
			nickname: "example",
		},
		type: UserWithoutIdDto,
	})
	user: UserWithoutIdDto;

	@ApiProperty({
		description: `Status code`,
		example: `200`,
	})
	status: number;
}

export class UpdateUserReturn400 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `Error message`,
		example: `Email already exists`,
	})
	errorMessage: string;

	@ApiProperty({
		description: `Status code`,
		example: `400`,
	})
	status: number;
}

export class DeleteUserReturn400 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `Error message`,
		example: `User not found`,
	})
	errorMessage: string;

	@ApiProperty({
		description: `Status code`,
		example: `400`,
	})
	status: number;
}

export class GetUserTagsReturn200 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `Status code`,
		example: `200`,
	})
	status: number;

	@ApiProperty({
		description: `Array of user tags`,
		example: {
			tags: [
				{
					id: 1,
					name: "example",
					sortOrder: "0",
				},
				{
					id: 2,
					name: "example",
					sortOrder: "0",
				},
				{
					id: 3,
					name: "example",
					sortOrder: "0",
				},
			],
		},
	})
	tags: TagDto[];
}

export class AddTagsToUserReturn400 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `Error message`,
		example: `User not found`,
	})
	errorMessage: string;

	@ApiProperty({
		description: `Status code`,
		example: `400`,
	})
	status: number;
}
