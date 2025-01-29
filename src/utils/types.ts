export interface Error {
	[key: string]: string;
}

export interface InputErrorContextType {
  errors: Error;
  setErrors: React.Dispatch<React.SetStateAction<Error>>;
}