import React, { useState } from 'react';
import { validateName, validatePhone, formatPhoneNumber } from '../../../utils/validation';

interface FieldConfig {
  name: string;
  type: 'text' | 'phone' | 'checkbox';
  validator?: (value: any) => string;
  formatter?: (value: string) => string;
  required?: boolean;
  defaultValue?: any;
}

type FormState = Record<string, any>;
type FormErrors = Record<string, string | boolean>;

interface FormValidatorProps {
  fields: FieldConfig[];
  onSubmit: (formData: FormState) => void;
  children: (props: {
    formData: FormState;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isSubmitted: boolean;
  }) => React.ReactNode;
  isSubmitted?: boolean;
  setIsSubmitted?: (value: boolean) => void;
}

export const FormValidator: React.FC<FormValidatorProps> = ({
  fields,
  children,
  onSubmit,
  isSubmitted = false,
  setIsSubmitted
}) => {
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue ?? (field.type === 'checkbox' ? false : '');
    return acc;
  }, {} as FormState);

  const initialErrors = fields.reduce((acc, field) => {
    acc[field.name] = field.type === 'checkbox' ? false : '';
    return acc;
  }, {} as FormErrors);

  const [formData, setFormData] = useState<FormState>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);

  const getFieldConfig = (fieldName: string): FieldConfig | undefined => {
    return fields.find(field => field.name === fieldName);
  };

  const getDefaultValidator = (type: string) => {
    switch (type) {
      case 'phone':
        return validatePhone;
      case 'text':
        return validateName;
      default:
        return () => '';
    }
  };

  const handleChange = (e: any) => {
    const { name, value, type } = e.target;
    const fieldConfig = getFieldConfig(name);
    
    if (!fieldConfig) return;

    if (fieldConfig.type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: e.target.checked }));
      setErrors((prev) => ({ ...prev, [name]: fieldConfig.required ? !e.target.checked : false }));
      return;
    }

    let processedValue = value;
    
    // Apply formatter if exists
    if (fieldConfig.formatter) {
      processedValue = fieldConfig.formatter(value);
    } else if (fieldConfig.type === 'phone') {
      processedValue = formatPhoneNumber(value);
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));

    // Apply validation
    const validator = fieldConfig.validator || getDefaultValidator(fieldConfig.type);
    const error = validator(processedValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    let hasErrors = false;

    fields.forEach(field => {
      if (field.type === 'checkbox') {
        const error = field.required ? !formData[field.name] : false;
        newErrors[field.name] = error;
        if (error) hasErrors = true;
      } else {
        const validator = field.validator || getDefaultValidator(field.type);
        const error = validator(formData[field.name]);
        newErrors[field.name] = error;
        if (error) hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      onSubmit(formData);
      setIsSubmitted?.(true);
      // Reset form
      setFormData(initialFormData);
    }
  };

  return children({
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitted
  });
}; 