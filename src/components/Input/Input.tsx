import React, { useState, useEffect } from 'react'
import { Styled } from 'direflow-component'
import styles from './Input.scss'

interface BWTInputProps {
  label: string
  type?: string
  name?: string
  value?: string | number
  disabled?: boolean
  description?: string
  onChangeValue: (value: string) => void
  validValue: RegExp
  errorMessage: string
}

export const BWTInput: React.FC<BWTInputProps> = ({
  type = 'text',
  label,
  name,
  value,
  disabled,
  description,
  onChangeValue,
  validValue,
  errorMessage,
}) => {
  const [inputFocused, setInputFocused] = useState<boolean>(false)
  const [invalidValue, setInvalidValue] = useState<boolean>(false)
  const [inputTouched, setInputTouched] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {
    onChangeValue(inputValue)
    inputTouched && setInvalidValue(!validValue.test(inputValue))

    // eslint-disable-next-line
  }, [inputValue])

  return (
    <Styled styles={styles}>
      <div className={
        `container
        ${inputFocused ? 'focused' : ''}
        ${invalidValue ? 'invalid' : ''}
        ${disabled ? 'disabled' : ''}
      `}>
        <label className="title">
          {label}
        </label>

        <input
          onFocus={() => {
            !inputTouched && setInputTouched(true)
            setInputFocused(true)
          }}
          onBlur={() => setInputFocused(false)}
          onChange={(event) => setInputValue(event.target.value)}
          type={type}
          name={name}
          value={value}
          placeholder={inputFocused ? '' : description}
          disabled={disabled}
        />

        <label className={`${invalidValue ? 'error-message' : 'hide'}`}>
          {errorMessage}
        </label>
      </div>
    </Styled>
  )
}
