"use client";
import React, { useEffect, useState } from "react";

const InputField = ({
  css,
  label,
  placeholder,
  inputType,
  borderColor,
  bgColor,
  required,
  onChange,
  value,
  name,
  endIcon,
  startIcon,
  disabled,
  onWheel,
  ariaLabel,
  inputPad,
  autoFocus,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="block text-gray-700 font-semibold">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}

      <div className={`${css} relative flex items-center`}>
        {startIcon && (
          <span className="absolute inset-y-0 left-0 pt-5 p-2 pb-5 flex items-center">
            {startIcon}
          </span>
        )}

        <input
          autoFocus={autoFocus}
          type={inputType ? inputType : "text"}
          id={name}
          name={name}
          placeholder={placeholder}
          className={`w-full h-10 ${
            inputPad ? inputPad : "p-4 py-2"
          }  rounded-md border-2 ${bgColor && bgColor} ${borderColor} ${
            required ? "border-gray-300" : "border-gray-300"
          } focus:outline-none focus:${borderColor} ${startIcon ? "pl-8" : ""}`}
          required={required}
          aria-label={ariaLabel}
          onChange={onChange}
          value={value}
          disabled={disabled}
          onWheel={onWheel}
        />

        {endIcon && (
          <span className="absolute inset-y-0 -right-1 pr-3 pt-5 pb-5 flex items-center">
            {endIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
