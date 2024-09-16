import jwtEncode  from 'jwt-encode';

export function encodeToken(payload: Object, intent: string) {
    return jwtEncode(payload, intent);
}
