import { User } from "@prisma/client";
import { User_Body } from "./prismaHelpers";
import fetch from "node-fetch";

export const fetchUserFromUserid = async (
	user_id: String
): Promise<User> => {
	const data = await fetch(`/api/v1/user?user_id=${user_id}`);
	return data.json();
};

export const CreateUser = async (body: User_Body): Promise<User> => {
	const data = await fetch(`/api/v1/user`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" },
	});

	return data.json();
};