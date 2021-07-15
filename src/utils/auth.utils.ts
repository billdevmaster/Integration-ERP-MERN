import { useSelector } from "react-redux";
import { getMe } from "../services/users.service";
import MeSlice from "../store/slices/me.slice";
import { store } from "../store/configure.store";
import { User } from "../models/user.model";

export const useLogin = (): { isLogin: boolean, me: User } => {
    const me = useSelector(state => state.meStore);
    return {
        isLogin: Boolean(localStorage.getItem('token')),
        me
    };
}

export const login = async (token: string) => {
    localStorage.setItem('token', token);
    const res = await getMe();
    if (res.statusCode === 200) {
        store.dispatch(MeSlice.actions.setMe(res.data));
    }
}

export const logout = () => {
    store.dispatch(MeSlice.actions.resetMe());
    localStorage.removeItem('token');
}