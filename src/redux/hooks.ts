import { useGetEmergenciasQuery } from './services/features/emergenciasApi';
import { AppDispatch, RootState } from "./store";
import { useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

export const useEmergenciasWithPolling = () => {
    return useGetEmergenciasQuery(
    null
    );
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;