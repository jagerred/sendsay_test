import { ReactElement } from 'react';

export type DraggableComponentName =
	| 'display'
	| 'operators'
	| 'numbers'
	| 'equal';

export interface DraggableComponentProps {
  name: DraggableComponentName;
  section: 'sidebar' | 'canvas';
  active: boolean;
  children: ReactElement;
}

export interface DisplayState {
  firstNumber: number | string;
  secondNumber: string;
  operator: string | null;
  result: number | string;
}
