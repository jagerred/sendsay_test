import { selectSwitch } from 'store/selectors/index';
import { resetDisplay } from 'store/slices/displaySlice';
import { toggleSwitch } from 'store/slices/switchSlice';
import { useAppDispatch, useAppSelector } from './redux';

const useSwitch = () => {
  const { mode } = useAppSelector(selectSwitch);
  const dispatch = useAppDispatch();
  const isRuntime = mode === 'runtime' ? true : false;
  const setMode = () => {
    const switchMode = isRuntime ? 'constructor' : 'runtime';
    dispatch(toggleSwitch(switchMode));
    dispatch(resetDisplay());
  };

  return { mode, setMode, isRuntime };
};
export default useSwitch;
