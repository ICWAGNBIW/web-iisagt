import { $authHost, $host } from "./index";

export const registration = async (firstName, lastName, email, password) => {
    const response = await $host.post('api/user/registration', {firstName, lastName, email, password, role: "ADMIN"})
    return response
}

export const login = async (firstName, lastName, email, password) => {
    const response = await $host.post('api/user/registration', {firstName, lastName, email, password, role: "ADMIN"})
    return response
}

export const check = async (firstName, lastName, email, password) => {
    const response = await $host.post('api/user/registration', {firstName, lastName, email, password, role: "ADMIN"})
    return response
}