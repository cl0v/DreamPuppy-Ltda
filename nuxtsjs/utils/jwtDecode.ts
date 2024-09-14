import {jwtDecode} from 'jwt-decode';

export function decodeToken<T>(token: string) {
    return jwtDecode(token) as T;
}

