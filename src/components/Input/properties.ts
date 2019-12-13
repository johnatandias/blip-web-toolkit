export interface IBWTInputProperties {
  validValue: RegExp
  onChangeValue: (value: string) => void
}

export interface IBWTInputAttributes {
  label: string;
  errorMessage?: string
  type?: string
  name?: string
  value?: string | number
  disabled?: boolean
  description?: string
}

export const properties: IBWTInputProperties = {
  validValue: /[a-zA-Z]/g,
  onChangeValue: console.log
};

export const attributes: IBWTInputAttributes = {
  label: 'Title',
  description: 'Action descripition'
};
