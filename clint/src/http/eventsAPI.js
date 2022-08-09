import { $authHost, $host } from "./index";

export const getEvents = async () => {
    const response = await $host.get('api/event/all')
    return response.data
}