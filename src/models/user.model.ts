export interface User {
    id: number;
    email: string;
    password: string;
    role: "user" | "premium" | "admin";
}

export interface CreateUser {
    email: string;
    password: string;
}